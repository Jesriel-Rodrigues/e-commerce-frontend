import style from "./style.module.scss";
import { IconInsta } from "@/components/Icons/IconInsta";
import { IconMenu } from "@/components/Icons/IconMenu";
import { IconWhatsApp } from "@/components/Icons/IconWhatsapp";
import Link from "next/link";

interface NavDesktopProps {}
export default function NavDesktop(props: NavDesktopProps) {
  return (
    <nav className={style.navMain}>
      <span>
        <button type="button" className={style.btnHover}>
          <i>
            <IconMenu />
          </i>{" "}
          Procurar Categorias
        </button>
        <ul className={style.menuHover}>
          <li className={style.itemMenu}>
            <Link href={"/"}>
              <span>Bíblia em Gliter</span>
            </Link>
          </li>
          <li className={style.itemMenu}>
            <Link href={"/"}>
              <span>Bíblia em Couro</span>
            </Link>
          </li>
          <li className={style.itemMenu}>
            <Link href={"/"}>
              <span>Bíblia Carteira</span>
            </Link>
          </li>
          <li className={style.itemMenu}>
            <Link href={"/"}>
              <span>Bíblia com pedraria</span>
            </Link>
          </li>
          <li className={style.itemMenu}>
            <Link href={"/"}>
              <span>Bíblia Infantil</span>
            </Link>
          </li>
        </ul>
      </span>

      <span className={style.socialsLinks}>
        <a href="#">
          <i>
            <IconInsta />
          </i>
        </a>
        <a href="#">
          <i>
            <IconWhatsApp />
          </i>
        </a>
      </span>
    </nav>
  );
}
