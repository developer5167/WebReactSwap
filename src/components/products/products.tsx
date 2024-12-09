import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import ProductDetails from "../product-details/product-details";
import "../products/products.css";
import Modal from "react-bootstrap/Modal";

const ProductsList = [
  {
    id: 1,
    images: [
      "https://cdn.pixabay.com/photo/2024/11/07/07/34/hydrangeas-9179924_1280.jpg",
      "https://plus.unsplash.com/premium_photo-1675198764473-30434364c8b6?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1715614412216-244d0dfc4bde?q=80&w=3276&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1729601724864-7bd7d9ff7894?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1729601724864-7bd7d9ff7894?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1729601724864-7bd7d9ff7894?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1729601724864-7bd7d9ff7894?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1729601724864-7bd7d9ff7894?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1729601724864-7bd7d9ff7894?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1729601724864-7bd7d9ff7894?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    card_title: "card1",
    cost: "Rs 60,000",
    card_description: "description1",
    comments: [
      {
        name: "Samuel",
        profile:
          "https://images.unsplash.com/photo-1729601724864-7bd7d9ff7894?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        comment: "I have visited it already its genuine product",
        id: "2",
      },
      {
        name: "Nihar",
        profile:
          "https://images.unsplash.com/photo-1729601724864-7bd7d9ff7894?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        comment: "I have visited it already its genuine product",
        id: "2",
      },
      {
        name: "Suresh",
        profile:
          "https://images.unsplash.com/photo-1729601724864-7bd7d9ff7894?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        comment: "I have visited it already its genuine product",
        id: "2",
      },
    ],
  },
  {
    id: 2,
    images: [
      "https://images.unsplash.com/photo-1729601724864-7bd7d9ff7894?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1729601724864-7bd7d9ff7894?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1729601724864-7bd7d9ff7894?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1729601724864-7bd7d9ff7894?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1729601724864-7bd7d9ff7894?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    card_title: "card2",
    cost: "Rs 70,000",
    card_description: "description2",
    comments: [
      {
        name: "Samuel",
        profile:
          "https://images.unsplash.com/photo-1729601724864-7bd7d9ff7894?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        comment: "I have visited it already its genuine product",
        id: "2",
      },
      {
        name: "Nihar",
        profile:
          "https://images.unsplash.com/photo-1729601724864-7bd7d9ff7894?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        comment: "I have visited it already its genuine product",
        id: "2",
      },
      {
        name: "Suresh",
        profile:
          "https://images.unsplash.com/photo-1729601724864-7bd7d9ff7894?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        comment: "I have visited it already its genuine product",
        id: "2",
      },
    ],
  },
  {
    id: 3,
    images: [
      "https://images.unsplash.com/photo-1729601724864-7bd7d9ff7894?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1729601724864-7bd7d9ff7894?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1729601724864-7bd7d9ff7894?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1729601724864-7bd7d9ff7894?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1729601724864-7bd7d9ff7894?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    card_title: "card3",
    cost: "Rs 50,000",
    card_description: "description3",
    comments: [
      {
        name: "Samuel",
        profile:
          "https://images.unsplash.com/photo-1729601724864-7bd7d9ff7894?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        comment: "I have visited it already its genuine product",
        id: "2",
      },
      {
        name: "Nihar",
        profile:
          "https://images.unsplash.com/photo-1729601724864-7bd7d9ff7894?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        comment: "I have visited it already its genuine product",
        id: "2",
      },
      {
        name: "Suresh",
        profile:
          "https://images.unsplash.com/photo-1729601724864-7bd7d9ff7894?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        comment: "I have visited it already its genuine product",
        id: "2",
      },
    ],
  },
  {
    id: 4,
    images: [
      "https://images.unsplash.com/photo-1729601724864-7bd7d9ff7894?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1729601724864-7bd7d9ff7894?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1729601724864-7bd7d9ff7894?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1729601724864-7bd7d9ff7894?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1729601724864-7bd7d9ff7894?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    card_title: "card4",
    cost: "Rs 80,000",
    card_description: "description4",
    comments: [
      {
        name: "Samuel",
        profile:
          "https://images.unsplash.com/photo-1729601724864-7bd7d9ff7894?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        comment: "I have visited it already its genuine product",
        id: "2",
      },
      {
        name: "Nihar",
        profile:
          "https://images.unsplash.com/photo-1729601724864-7bd7d9ff7894?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        comment: "I have visited it already its genuine product",
        id: "2",
      },
      {
        name: "Suresh",
        profile:
          "https://images.unsplash.com/photo-1729601724864-7bd7d9ff7894?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        comment: "I have visited it already its genuine product",
        id: "2",
      },
    ],
  },
];

function Products() {
  const [activeComponent, setActiveComponent] = useState(false);
  const [product, setproduct] = useState(ProductsList[0]);

  function openModel(obj: any) {
    setActiveComponent(!activeComponent);
    setproduct(obj);
  }
  function closeModel() {
    setActiveComponent(!activeComponent);
    // setproduct(null);
  }

  return (
    <div className="main">
      <h5 className="">Trending post near you</h5>
      <div className="col-12 row">
        {ProductsList.map((item, index) => (
          <div className="col-3" key={item.id}>
            <Card>
              <Card.Img variant="top" src={item.images[index]} />
              <Card.Body>
                <Card.Title>{item.card_title}</Card.Title>
                <Card.Text>{item.card_description}</Card.Text>
                <Button onClick={() => openModel(item)}>Details</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      {activeComponent ? (
        <ProductDetails
          isOpen={activeComponent}
          close={closeModel}
          item={product}
        />
      ) : null}
    </div>
  );
}
export default Products;
