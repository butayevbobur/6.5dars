import React from "react";
import "./input.css";
function Input() {
  return (
    <div className="inputChild">
      <h3>Xizmatlar</h3>
      <p className="buyurtma_p">
        Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam
        facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus
        mattis eros at sem pulvinar
      </p>
      <div className="inputWrapper">
        <input type="text" placeholder="Ismingiz" />
        <input type="tel" placeholder="Telefon raqamingiz" />

        <select>
          <option value="1">Standart</option>
          <option value="2">Premiuim</option>
          <option value="3">Gold</option>
        </select>
        <button className="inp">Buyurtma berish</button>
      </div>
    </div>
  );
}

export default Input;
