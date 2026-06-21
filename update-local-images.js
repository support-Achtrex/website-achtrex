const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'lib', 'blog-data.ts');
let content = fs.readFileSync(targetFile, 'utf-8');

const localImages = [
    '/images/about_hero_blueprint_1775931886342.png',
    '/images/ai-architecture.png',
    '/images/ai_training_hero.png',
    '/images/automotive-data-engine.png',
    '/images/automotive_data_api.png',
    '/images/automotive_software_dashboard.png',
    '/images/auto_dealership.png',
    '/images/bright_data_hero.jpg',
    '/images/bright_office_hero.jpg',
    '/images/cloud_infrastructure.png',
    '/images/corporate_team_1.png',
    '/images/global-innovation.png',
    '/images/infra_console_meaningful.png',
    '/images/lumi_ai_brain.png',
    '/images/lumi_ai_interface.png',
    '/images/lumi_laptop_hero.png',
    '/images/medical_dashboard_meaningful.png',
    '/images/real_architects_1775935490595.png',
    '/images/real_dashboard_context.jpg',
    '/images/real_dev_team.jpg',
    '/images/real_enterprise_header.png',
    '/images/real_hardware_mac.jpg',
    '/images/real_infrastructure.png',
    '/images/real_server_room_1775935470750.png',
    '/images/server_isolated.png',
    '/images/slide1_composite.png',
    '/images/slide1_foreground.png',
    '/images/slide2_foreground.png',
    '/images/slide3_foreground.png',
    '/images/slide_ai_proxy_1775931988295.png',
    '/images/slide_data_engine_1775931944498.png',
    '/images/slide_venture_builder_1775932108823.png',
    '/images/typing-car-user.png',
    '/images/typing-car.png',
    '/images/uploaded_car_bg.png'
];

let i = 0;
// We need to replace `"image": "https://..."` with the local paths.
content = content.replace(/"image":\s*"[^"]+"/g, () => {
    const url = `"image": "${localImages[i % localImages.length]}"`;
    i++;
    return url;
});

fs.writeFileSync(targetFile, content);
console.log(`Successfully updated ${i} blog images to 100% reliable local enterprise assets!`);
