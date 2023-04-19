import "./home.css";
import Categories from "./category.png";
import CardProduct from "../../components/card/card";
import { Link } from "react-router-dom";

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
            <Link >See more</Link>
          </section>
        </section>

        <section className="product-card">
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </section>
      </section>
    </div>
  );
}

export default Home;
