import Image from "next/image";
import style from "./style.module.scss";

import { FaSistrix } from "react-icons/fa6";

import logo from "@/assets/logo/logo.png";
import Link from "next/link";

interface HeaderProps {}
export default function Header(props: HeaderProps) {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Image src={logo} alt="Luxo de Bíblia" />
      </div>
      <div className={style.search}>
        <input type="text" placeholder="Buscar produtos" />
        <span className={style.icon}>
          <FaSistrix />
        </span>
      </div>
      <div className={style.links}>
        <div className={style.link}>
          <Link href="#" target="_blank" rel="noopener noreferrer">
            Minha Conta
          </Link>
        </div>
        <div className={style.link}>
          <Link href="#" target="_blank" rel="noopener noreferrer">
            <span className={style.summary}>R$0,00</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
