import Carousel from "react-bootstrap/Carousel";
import CarouselList from '../home/model';
// const CarouselList = require('../home/model.js') as any;
import Products from "../products/products";

function bindData(data:any) {
  return (
    <Carousel.Item>
      <img
        className="d-block w-100 carouselImage"
        src={data.image}
        alt="Second slide"
      />
      <Carousel.Caption>
        <h5>{data.title}</h5>
        <p>{data.description}</p>
      </Carousel.Caption>
    </Carousel.Item>
  );
}

function Home() {
  return (
    <div className="main">
      <Carousel data-bs-theme="dark">{CarouselList.map(bindData)}</Carousel>
      <Products />
    </div>
  );
  //
}

export default Home;
