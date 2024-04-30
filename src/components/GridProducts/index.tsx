import CardProduct from "./CardProduct";
import style from "./style.module.scss"

interface GridProductsProps {}
export default function GridProducts(props: GridProductsProps) {
  const arr = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

  return <section className={style.sectionGrid}>
    {arr.map((i, index) => <CardProduct key={index}/>)}
  </section>;
}