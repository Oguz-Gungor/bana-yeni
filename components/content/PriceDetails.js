import Image from "next/image";

export default function PriceDetails({
  price,
  instalment,
  currencyTypeName,
  elementSize,
}) {
  const formatter = new Intl.NumberFormat("de-DE");
  const [significant, insignificant] = price.toFixed(2).split(".");
  return (
    <div className="price-container flex-column">
      <PriceContainerItem
      className={"price"}
        content={
          <span style={{ fontWeight: "bold" }}>
            <span style={{ fontSize: elementSize * 2 }}>
              {formatter.format(significant)}
            </span>
            <span style={{ fontSize: elementSize }}>,{insignificant}</span>
            {currencyTypeName}
          </span>
        }
      />
      <PriceContainerItem
        className={"shipment"}
        content={"Ücretsiz Kargo"}
        image={"/fast-delivery.png"}
        elementSize={elementSize}
      />
      <PriceContainerItem
        className={"instalment"}
        content={instalment}
        image={"/credit-card.png"}
        elementSize={elementSize}
      />
      <PriceContainerItem
        className={"money-refund"}
        content={"Paran Güvende"}
        image={"/return.png"}
        elementSize={elementSize}
      />
    </div>
  );
}

const PriceContainerItem = ({ image, className, content, elementSize }) => {
  return (
    <div className="price-container-item">
      {image && <Image src={image} width={elementSize} height={elementSize} />}
      <span className={"price-detail-item " + className}>{content}</span>
    </div>
  );
};
