import { useState } from "react";
import Image from "next/image";
import IconWrapper from "./IconWrapper";

export default function Slider({ images, sliderSize }) {
  const [displayedImage, setDisplayedImage] = useState(0);
  const size = sliderSize ?? 500;
  const dotSize = size / 25;
  const dotGaping = dotSize;
  const navigatorHeight = dotSize + 6;
  const shareIconSize = size / 10;
  return (
    <div className="slider flex-column" style={{ width: size, height: size }}>
      <Image
        className="image"
        loader={({ src }) => `${src}`}
        onClick={() =>
          setDisplayedImage((prevState) =>
            prevState === images.length - 1 ? 0 : prevState + 1
          )
        }
        src={images[displayedImage].imageUrl}
        width={size}
        height={size}
      />
      <IconWrapper
        {...{
          iconSize: shareIconSize,
          style: {
            width: shareIconSize + 20,
            height: shareIconSize + 20,
            margin: `${shareIconSize / 2}px ${shareIconSize / 2}px 0 auto`,
          },
          image: "/share.png",
        }}
      />
      <div
        className="slider-navigator flex-row"
        style={{
          gap: dotGaping,
          borderRadius: navigatorHeight / 2,
        }}
      >
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setDisplayedImage(index)}
            style={{ height: dotSize, width: dotSize }}
            className={
              "slider-navigator-element " +
              (index === displayedImage && "active")
            }
          />
        ))}
      </div>
    </div>
  );
}
