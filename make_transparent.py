from PIL import Image

def make_transparent(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    pixels = img.load()
    
    for y in range(img.height):
        for x in range(img.width):
            r, g, b, a = pixels[x, y]
            # Use brightness (max of RGB) as the alpha channel so black becomes transparent
            # and bright neon colors remain opaque.
            alpha = max(r, g, b)
            
            # Since the original background was black, the color components were premultiplied by alpha.
            # We can optionally un-premultiply them to make the colors vibrant against light backgrounds,
            # but leaving them is usually fine for glowing neon. Let's just set the alpha.
            pixels[x, y] = (r, g, b, alpha)
            
    img.save(output_path, "PNG")

make_transparent("public/images/typing-car.png", "public/images/typing-car-transparent.png")
print("Successfully created transparent car image.")
