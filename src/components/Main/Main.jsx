import React from "react";
import "./main.css";
import Table from "./Table";
import Peace from "./Peace";
import Input from "./Input";
import { Link } from "react-router-dom";
function Main() {
  return (
    <div className="buyurtma">
      <h3>Xizmatlar</h3>
      <p className="buyurtma_p">
        Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam
        facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus
        mattis eros at sem pulvinar
      </p>
      <div>
        <Peace />

        <button className="btn_2">Buyurtma berish</button>
        <Link to="/" className="link">
          Xizmatlar sahifasiga o’tish
        </Link>
      </div>

      <div className="buyurtma">
        <h3>Biz qanday ishlaymiz?</h3>
        <p className="buyurtma_p">
          Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam
          facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus
          mattis eros at sem pulvinar
        </p>
      </div>
      <Table />
      <Input />
    </div>
  );
}

export default Main;
