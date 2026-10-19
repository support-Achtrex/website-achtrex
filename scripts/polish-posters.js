const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function polishPosters() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  const carB64 = fs.readFileSync(path.join(__dirname, 'orig-car.jpg')).toString('base64');
  const showB64 = fs.readFileSync(path.join(__dirname, 'orig-showroom.jpg')).toString('base64');

  const { carResult, showResult } = await page.evaluate(async (cB64, sB64) => {
    const loadImage = (src) => new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.src = src;
    });

    const carImg = await loadImage('data:image/jpeg;base64,' + cB64);
    const showImg = await loadImage('data:image/jpeg;base64,' + sB64);

    // =========================================================================
    // 1. POLISH CAR CONFIG POSTER
    // =========================================================================
    const carCanvas = document.createElement('canvas');
    carCanvas.width = carImg.width;
    carCanvas.height = carImg.height;
    const carCtx = carCanvas.getContext('2d');
    carCtx.drawImage(carImg, 0, 0);

    // (a) Clean top-left watermark by vertically interpolating vertical mullions
    const carData = carCtx.getImageData(0, 0, carCanvas.width, carCanvas.height);
    const cD = carData.data;

    const getCarPixel = (x, y) => {
      const idx = (Math.round(y) * carCanvas.width + Math.round(x)) * 4;
      return [cD[idx], cD[idx + 1], cD[idx + 2]];
    };

    const setCarPixel = (x, y, rgb) => {
      const idx = (Math.round(y) * carCanvas.width + Math.round(x)) * 4;
      cD[idx] = rgb[0];
      cD[idx + 1] = rgb[1];
      cD[idx + 2] = rgb[2];
    };

    // Erase WEDOO watermark and underline at x=20..250, y=24..68
    // We interpolate between y=12..20 and y=72..80
    for (let x = 20; x <= 250; x++) {
      const topP = getCarPixel(x, 16);
      const botP = getCarPixel(x, 74);
      for (let y = 24; y <= 68; y++) {
        const t = (y - 24) / (68 - 24);
        const r = Math.round(topP[0] * (1 - t) + botP[0] * t);
        const g = Math.round(topP[1] * (1 - t) + botP[1] * t);
        const b = Math.round(topP[2] * (1 - t) + botP[2] * t);
        setCarPixel(x, y, [r, g, b]);
      }
    }
    carCtx.putImageData(carData, 0, 0);

    // (b) License plate area: x=1396, y=510, w=278, h=102
    // Use metallic gradient matching car lighting
    const plateGrad = carCtx.createLinearGradient(1396, 510, 1396, 612);
    plateGrad.addColorStop(0, '#111215');
    plateGrad.addColorStop(0.5, '#17181c');
    plateGrad.addColorStop(1, '#131417');
    carCtx.fillStyle = plateGrad;
    carCtx.fillRect(1396, 510, 278, 102);

    // Plate metallic border
    carCtx.strokeStyle = '#25272e';
    carCtx.lineWidth = 2;
    carCtx.strokeRect(1398, 512, 274, 98);

    // Achtrex embossed metallic text on plate
    carCtx.fillStyle = '#9aa4ae';
    carCtx.font = '500 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    carCtx.textAlign = 'center';
    carCtx.textBaseline = 'middle';
    carCtx.letterSpacing = '11px';
    carCtx.fillText('ACHTREX', 1396 + 278 / 2, 510 + 102 / 2);

    // =========================================================================
    // 2. POLISH SHOWROOM POSTER
    // =========================================================================
    const showCanvas = document.createElement('canvas');
    showCanvas.width = showImg.width;
    showCanvas.height = showImg.height;
    const showCtx = showCanvas.getContext('2d');
    showCtx.drawImage(showImg, 0, 0);

    const showData = showCtx.getImageData(0, 0, showCanvas.width, showCanvas.height);
    const sD = showData.data;

    const getShowPixel = (x, y) => {
      const idx = (Math.round(y) * showCanvas.width + Math.round(x)) * 4;
      return [sD[idx], sD[idx + 1], sD[idx + 2]];
    };

    const setShowPixel = (x, y, rgb) => {
      const idx = (Math.round(y) * showCanvas.width + Math.round(x)) * 4;
      sD[idx] = rgb[0];
      sD[idx + 1] = rgb[1];
      sD[idx + 2] = rgb[2];
    };

    // (a) Clean WEDOO from center wall: x=150..1350, y=195..345
    // Vertical interpolation between y=180 and y=355
    const yTop = 180;
    const yBot = 355;
    for (let x = 150; x <= 1350; x++) {
      const pTop = getShowPixel(x, yTop);
      const pBot = getShowPixel(x, yBot);
      for (let y = 195; y <= 345; y++) {
        const t = (y - yTop) / (yBot - yTop);
        const ease = t * t * (3 - 2 * t);

        // Sample subtle wall texture from y=140..170
        const noiseY = 140 + (y % 30);
        const pNoise = getShowPixel(x, noiseY);
        const pRef = getShowPixel(x, 155);
        const nR = (pNoise[0] - pRef[0]) * 0.45;
        const nG = (pNoise[1] - pRef[1]) * 0.45;
        const nB = (pNoise[2] - pRef[2]) * 0.45;

        const r = Math.min(255, Math.max(0, Math.round(pTop[0] * (1 - ease) + pBot[0] * ease + nR)));
        const g = Math.min(255, Math.max(0, Math.round(pTop[1] * (1 - ease) + pBot[1] * ease + nG)));
        const b = Math.min(255, Math.max(0, Math.round(pTop[2] * (1 - ease) + pBot[2] * ease + nB)));
        setShowPixel(x, y, [r, g, b]);
      }
    }

    // (b) Clean WEDOO from top-left: x=85..235, y=38..65
    for (let x = 85; x <= 235; x++) {
      const pT = getShowPixel(x, 28);
      for (let y = 38; y <= 65; y++) {
        setShowPixel(x, y, pT);
      }
    }

    // (c) Clean W from exit sign: x=1545..1640, y=80..175
    for (let x = 1545; x <= 1640; x++) {
      for (let y = 80; y <= 175; y++) {
        setShowPixel(x, y, [255, 255, 255]);
      }
    }

    showCtx.putImageData(showData, 0, 0);

    // Draw ACHTREX on top-left above Metatelier
    showCtx.fillStyle = '#ffffff';
    showCtx.font = '400 15px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    showCtx.textAlign = 'left';
    showCtx.textBaseline = 'middle';
    showCtx.letterSpacing = '7px';
    showCtx.fillText('ACHTREX', 88, 52);

    // Draw Achtrex logo mark in the white exit sign square
    showCtx.fillStyle = '#111111';
    showCtx.font = '700 48px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    showCtx.textAlign = 'center';
    showCtx.textBaseline = 'middle';
    showCtx.letterSpacing = '0px';
    showCtx.fillText('A', (1545 + 1640) / 2, (80 + 175) / 2);

    // Draw ACHTREX on center wall above SHOWROOM
    const wallText = 'ACHTREX';
    showCtx.font = '300 78px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    showCtx.textAlign = 'center';
    showCtx.textBaseline = 'middle';
    showCtx.letterSpacing = '32px';

    // Soft cast shadow
    showCtx.fillStyle = 'rgba(28, 26, 24, 0.22)';
    showCtx.fillText(wallText, 760 + 6, 275 + 8);

    // Front text
    showCtx.fillStyle = 'rgba(38, 36, 34, 0.85)';
    showCtx.fillText(wallText, 760, 275);

    return {
      carResult: carCanvas.toDataURL('image/jpeg', 0.94).replace(/^data:image\/jpeg;base64,/, ''),
      showResult: showCanvas.toDataURL('image/jpeg', 0.94).replace(/^data:image\/jpeg;base64,/, ''),
    };
  }, carB64, showB64);

  const carDest = path.join(__dirname, '..', 'public', 'case', 'realtime-cgi', 'car-config-video-poster.jpg');
  const showDest = path.join(__dirname, '..', 'public', 'case', 'realtime-cgi', 'showroom-video-poster.jpg');

  fs.writeFileSync(carDest, carResult, 'base64');
  fs.writeFileSync(showDest, showResult, 'base64');

  console.log('Both posters polished and saved successfully!');
  await browser.close();
}

polishPosters().catch((err) => {
  console.error('Error polishing posters:', err);
  process.exit(1);
});
