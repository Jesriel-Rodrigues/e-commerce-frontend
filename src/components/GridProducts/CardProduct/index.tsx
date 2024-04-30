import Image from "next/image"
import style from "./style.module.scss"

import sampleImg from "@/assets/products/product-sample.jpeg"

interface CardProductProps {

}
export default function CardProduct(props : CardProductProps){
    return(
        <div className={style.card}>
          <Image src={sampleImg} alt="product"/>

          <span className={style.cardName}>Bíblia Ele Vive - Glitter</span>

          <span className={style.cardPrice}>R$ 100,00</span>

          <button className={style.cardButton}>Comprar</button>
        </div>
    )
}