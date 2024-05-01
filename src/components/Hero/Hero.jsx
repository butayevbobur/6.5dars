import PagesHeader from "../PagesHeader/PagesHeader";
import "./hero.css";
function Hero() {
  return (
    <div className="HeroWrapper">
      <div className="hero_description">
        <h3>Biznesingizni keyingi bosqichga olib chiqing</h3>
        <p>
          Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam
          facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus
          mattis eros at sem pulvinar
        </p>
        <button className="btn">Xizmatlar bilan tanishish</button>
      </div>
      <div className="hero_img">
        <img src="/hero img.png" alt="" width="458" height="258" />
      </div>
    </div>
  );
}

export default Hero;
