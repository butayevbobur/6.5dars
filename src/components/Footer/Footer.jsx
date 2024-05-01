import React from "react";
import "./fotter.css";
function Footer() {
  return (
    <div className="fotter">
      <div className="about">
        <h3>Copyright 2020</h3>
        <p>
          Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam
          facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus
          mattis eros at sem pulvinar tincidunt.
        </p>
      </div>
      <div className="sayt">
        <h3>Sayt sahifalari</h3>
        <ul>
          <li>Bosh sahifa</li>
          <li>Xizmatlar</li>
          <li>Portfolio</li>
          <li>Jamoa</li>
          <li>Blog</li>
          <li>Kontaktlar</li>
        </ul>
      </div>
      <div className="social">
        <h3>Biz internetda</h3>
        <ul>
          <li>
            {" "}
            <img src="./tg.svg" alt="" />
            Telegram
          </li>
          <li>
            {" "}
            <img src="./fc.png" alt="" />
            Facebook
          </li>
          <li>
            {" "}
            <img src="./i.png" alt="" />
            Instagram
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
