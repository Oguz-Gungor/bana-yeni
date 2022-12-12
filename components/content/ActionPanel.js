import Image from "next/image";
import CardView from "./cardView";
import IconWrapper from "./IconWrapper";

export default function ActionPanel({ elementSize }) {
  return (
    <div className="action-container flex-row">
      <IconWrapper
        {...{
          iconSize: elementSize,
          style: {
            width: elementSize + 20,
            height: elementSize + 20,
          },
          image: "/share.png",
        }}
      />
      <IconWrapper
        {...{
          iconSize: elementSize,
          style: {
            width: elementSize + 20,
            height: elementSize + 20,
          },
          image: "/heart.png",
        }}
      />
      <CardView
        className={"buy-button non-selectable"}
        tagBackgroundColor="black"
        tagTextColor={"white"}
        onClick={buyAction}
      >
        Hemen Al
      </CardView>
    </div>
  );
}

const buyAction = () => {};
