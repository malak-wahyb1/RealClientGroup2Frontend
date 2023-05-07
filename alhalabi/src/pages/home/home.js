import "./home.css";
import delivery from "./delivery2.png";
import { useEffect, useState } from "react";
import { useAnimate, usePresence } from "framer-motion";
import door from "./door.png";
import Offer from "../../components/offers/product";
// import { Rating } from "@mui/material";
function Home() {
  const [ setClassName] = useState("text_hero");
  useEffect(() => {
    if (isPresent) {
      const enterAnimation = async () => {
        const heroSection = document.querySelector(".hero-section");
        const remainingWidth = `calc( ${
          heroSection.getBoundingClientRect().right
        }px -  ${heroSection.getBoundingClientRect().left}px - ${
          heroSection.getBoundingClientRect().left
        }px  - ${heroSection.getBoundingClientRect().left}px)`;
        await animate(
          scope.current,
          { transform: `translateX(${remainingWidth})` },
          { duration: 3, delay: 0.8 }
        );
        setClassName("text-transform");
      };
      enterAnimation();
    }
  });
  const [isPresent] = usePresence();
  const [scope, animate] = useAnimate();
  return (
    <div className="Home">
      <section className="hero-section">
        <div ref={scope} className="hero-del">
          <img src={delivery} alt="" />
        </div>
        <section className="hero_text">
          <h1>Al Halabi Super Market </h1>
          <h4>Bring The Store To Your Door</h4>
        </section>
        <div className="door">
          <img src={door} alt="" width={200} height={300} />
        </div>
      </section>
      <section>
        <Offer />
       
      </section>
    </div>
  );
}

export default Home;
