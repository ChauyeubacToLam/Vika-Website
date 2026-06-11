from PIL import Image

def recolor(input_path, output_path, ratio_x):
    img = Image.open(input_path).convert("RGBA")
    data = img.getdata()
    new_data = []
    w, h = img.size
    split_x = w * ratio_x
    for i, item in enumerate(data):
        x = i % w
        # if x > split_x and pixel is not fully transparent
        if x > split_x and item[3] > 0:
            # Change only the color but keep the alpha for anti-aliasing
            new_data.append((0, 0, 0, item[3])) # 26,26,26 is a nice dark black (#1A1A1A) instead of #000000 which can be too harsh, but let's just use (0,0,0) as requested.
        else:
            new_data.append(item)
    img.putdata(new_data)
    img.save(output_path)

# 160 / 486 is about 0.33
recolor('vika-wordmark-yellow.png', 'vika-wordmark-blacktext.png', 0.33)
recolor('vika-wordmark.png', 'vika-wordmark-blacktext2.png', 0.33)
