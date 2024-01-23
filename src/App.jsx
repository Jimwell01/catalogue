import "./App.css";
import Header from "./components/header";
import Hero from "./components/hero";
import ProductCatalogue from "./components/prodCat";
import { FaHeart } from "react-icons/fa6";
import Refrigerator from "./products/refrigerator";
import Aircon1 from "./products/aircon1";
import Washing from "./products/washing";
import Rice from "./products/rice";
import Aircon2 from "./products/aircon2";
import Efan from "./products/efan";
import Oven from "./products/oven";
import Blender from "./products/blender";
import Footer from "./components/footer";


function App() {
  return (
    <section className="main">
      <Hero />
      <ProductCatalogue />
      <div className="prod-series">
        <h2>ENERGY EFFICIENT APPLIANCES</h2>
        <div>
          <h5>My Favorites</h5>
          <FaHeart />
        </div>
      </div>
      <Refrigerator />
      <Aircon1 />
      <Washing />
      <Rice />
      <Aircon2 />
      <Efan />
      <Oven />
      <Blender />
      <div className="search">
        <div>
          <input type="text" placeholder="Articles, Videos, Guides, Tips, Link" />
          <button> Search</button>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default App;
