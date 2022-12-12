import Image from "next/image";

export default function Breadcrumb({ size, elementSize }) {
  const listOfNodes = [
    "Telefon",
    "Cep Telefonu",
    "Apple Cep Telefonu"
  ];
  return (
    <span className="bread-crumb" style={{ width: size }}>
      <span className="bread-crumb-container">
        <Image
          className="non-selectable"
          src={"/home.png"}
          width={elementSize}
          height={elementSize}
        />
        {listOfNodes.map((node) => (
          <span className="breadcrumb-element-container"key={node}>
            <Image
              className="non-selectable"
              src={"/right-arrow.png"}
              width={elementSize}
              height={elementSize}
            />
            <span
              className="breadcrumb-element non-selectable"
              style={{ fontSize: elementSize }}
            >
              {node}
            </span>
          </span>
        ))}
      </span>
    </span>
  );
}
