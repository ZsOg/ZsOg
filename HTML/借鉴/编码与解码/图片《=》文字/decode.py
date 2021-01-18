from PIL import Image

def decode(im):
    width, height = im.size
    Ist = []
    for y in range (height):
        for x in range (width):
            red, green, blue = im.getpixel((x,y))
            if (blue | green | red) == 0:
                break

            index = (green >> 8) + blue
            Ist.append(chr(index))

    return .join(Ist)

if __name__ == '__main__':
    all_text = decode(Image.open("encoded.bmp","r"))
    with open("decoded.txt","w",encoding="UTF-8") as f:
        f.write(all_text)