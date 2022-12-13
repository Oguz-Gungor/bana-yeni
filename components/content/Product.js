import { useState } from "react";
import ActionPanel from "./ActionPanel";
import Breadcrumb from "./BreadCrumb";
import PriceDetails from "./PriceDetails";
import ProductDetails from "./ProductDetails";
import Slider from "./Slider";

export default function Product(props) {
  const [modalContent, setModalContent] = useState(null);
  const {
    id,
    sliderImage,
    itemName,
    seller,
    tag,
    description,
    instalment,
    price,
    currencyTypeName,
  } = props.data;
  const elementSize = props.size / 20;
  return (
    <>
      <Modal {...{ modalContent, setModalContent }} />
      <div className="product-container flex-column" style={{ width: props.size }}>
        <Slider images={sliderImage} sliderSize={props.size} />
        <Breadcrumb size={props.size} elementSize={elementSize} />
      </div>
      <div
        className="product-information-container"
        style={{ width: props.size }}
      >
        <ProductDetails
          {...{ itemName, seller, tag, description, setModalContent }}
        />
        <PriceDetails
          {...{ price, instalment, currencyTypeName, elementSize }}
        />
        <ActionPanel elementSize={elementSize / 2} />
      </div>
    </>
  );
}

const Modal = ({ modalContent, setModalContent }) => {
  return (
    modalContent && (
      <div className="modal-wrapper appear-animation">
        <div className="modal-content-container">
          <div className="modal-header flex-row">
            <span style={{ marginRight: "auto" }}>{modalContent.header}</span>
            <span
              onClick={() => setModalContent(null)}
              style={{ marginLeft: "auto", cursor: "pointer" }}
            >
              x
            </span>
          </div>
          <div className="modal-content">{modalContent.body}</div>
        </div>
      </div>
    )
  );
};
