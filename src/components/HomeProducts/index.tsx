import GridProducts from "../GridProducts";
import HeaderHomeProducts from "./HeaderHomeProducts";
import style from "./style.module.scss";

interface HomeProductsProps {}
export default function HomeProducts(props: HomeProductsProps) {
  return (
    <main className={style.mainHomeProducts}>
      <HeaderHomeProducts />
      <GridProducts />
    </main>
  );
}
