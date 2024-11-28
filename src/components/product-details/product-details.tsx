import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "../product-details/product-details.css";
import Comments from "./comments";

function ProductDetails({ isOpen, close, item } : any) {
  const [selectedImage, setImage] = useState(item.images[0]);

  function selectImage(selectedImages:any) {
    setImage(selectedImages);
  }
  function getBelowCards(itemDetails:any) {
    return (
      <a href={void 0}>
        <img
          className="images"
          src={itemDetails}
          alt="Product"
          onClick={() => selectImage(itemDetails)}
        />
      </a>
    );
  }

  return (
    <div className="main">
      <Modal
        size="xl"
        show={isOpen}
        onHide={close}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            <p>Product Details</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row ">
              <div className="col-md-6">
                <img src={selectedImage} alt="Product" className="img-fluid" />
                <div className="more-images">
                  {item.images.map(getBelowCards)}
                </div>
                <h2>{item.card_title}</h2>
                <p className="text-muted">{item.card_description}</p>
                <p>
                  <strong className="text-success">⭐⭐⭐⭐⭐ (121 reviews)</strong>
                </p>
                <h4>{item.cost}</h4>
                <div>
                  <button className="btn btn-success btn-lg me-3">
                    Check later
                  </button>
                  <button className="btn btn-outline-dark btn-lg">Chat now</button>
                </div>
              </div>
              <div className="col-md-6">
                <Comments list={item} />
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default ProductDetails;
