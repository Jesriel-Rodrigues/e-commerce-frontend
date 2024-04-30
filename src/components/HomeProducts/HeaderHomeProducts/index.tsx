"use client";

import { useState } from "react";
import style from "./style.module.scss";

interface HeaderHomeProductsProps {}
export default function HeaderHomeProducts(props: HeaderHomeProductsProps) {
  const [activeItem, setActiveItem] = useState("Glitter");

  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName);
  };
  return (
    <div className={style.mainHeaderHomeProducts}>
      <h2>BÍBLIAS E ACESSÓRIOS</h2>
      <nav>
        <ul>
          <li
            className={activeItem === "Glitter" ? style.active : ""}
            onClick={() => handleItemClick("Glitter")}
          >
            Glitter
          </li>
          <li
            className={activeItem === "Couro" ? style.active : ""}
            onClick={() => handleItemClick("Couro")}
          >
            Couro
          </li>
          <li
            className={activeItem === "Tecido" ? style.active : ""}
            onClick={() => handleItemClick("Tecido")}
          >
            Tecido
          </li>
          <li
            className={activeItem === "Pedrarias" ? style.active : ""}
            onClick={() => handleItemClick("Pedrarias")}
          >
            Pedrarias
          </li>
          <li
            className={activeItem === "Infantil" ? style.active : ""}
            onClick={() => handleItemClick("Infantil")}
          >
            Infantil
          </li>
          <li
            className={activeItem === "Carteira" ? style.active : ""}
            onClick={() => handleItemClick("Carteira")}
          >
            Carteira
          </li>
          <li
            className={activeItem === "Acessórios" ? style.active : ""}
            onClick={() => handleItemClick("Acessórios")}
          >
            Acessórios
          </li>
        </ul>
      </nav>
    </div>
  );
}
