import Image from "next/image";
import CardView from "./CardView";

export default function ProductDetails({
  itemName,
  seller,
  tag,
  description,
  setModalContent,
}) {
  return (
    <div className="product-details-container flex-column">
      <span className="product-header">{itemName}</span>
      <BadgePanel {...{ tag }} />
      <span className="product-description">{description}</span>
      <SellerPanel {...{ seller, setModalContent }} />
    </div>
  );
}

const BadgePanel = ({ tag }) => (
  <div className="product-badges flex-row">
    {[tag].map(({ tagName, tagBackgroundColor, tagTextColor }) => (
      <CardView key={tagName} {...{ tagBackgroundColor, tagTextColor }}>
        {tagName}
      </CardView>
    ))}
  </div>
);

const SellerPanel = ({ seller, setModalContent }) => (
  <div
    className="seller-panel"
    onClick={() => {
      setModalContent({
        header: "Satıcı Bilgisi",
        body: sellerInformationModal(seller),
      });
    }}
  >
    <CardView className={"non-selectable"}>
      <Image src="/user.png" width={10} height={10} />
      <span className="seller-name-area">
        Satıcı: <span className="seller-name">{seller.name}</span>
      </span>
      <CardView
        {...{ tagBackgroundColor: "#f4bd40", className: "rating-card" }}
      >
        <Image src="/star.png" width={10} height={10} />
        {seller.rating}
      </CardView>
    </CardView>
  </div>
);
export const sellerInformationModal = (seller) => {
  return (
    <div className="seller-modal flex-column">
      {Object.entries(seller).map(([key, value]) =>
        informationPanelElement(key, value)
      )}
    </div>
  );
};

const informationPanelElement = (title, content) => {
  return (
    <span>
      <span style={{ fontWeight: "bold" }}>{capitalizeFirstLetter(title)}</span>{" "}
      : <span>{content}</span>
    </span>
  );
};

const capitalizeFirstLetter = (word) => {
  const firstLetter = word.charAt(0);
  const remainingLetters = word.substring(1);
  return firstLetter.toUpperCase() + remainingLetters;
};
