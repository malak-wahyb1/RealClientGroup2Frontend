import "./home.css";
import Categories from "./category.png";
import { Link } from "react-router-dom";
import AllCategories from "../../components/category/allCategory";
import CardProduct from "../../components/card/card";

function Home() {
  return (
    <div className="Home">
      <input
        className="inputHome"
        placeholder="You can pay by Which Money or by cash on delivery "
        readOnly
      />
      <section className="allCategory">
        <section className="allCategory-Header">
          <section className="allCategory-Title">
            <img src={Categories} alt="All Categories" height={30} />

            <h1>ALL Products</h1>
          </section>
          <section className="seemore">
            <Link>See more</Link>
          </section>
        </section>

        <section className="product-card">

        
         <CardProduct/>

        </section>
      </section>
    </div>
  );
}

export default Home;
