import { Balloon } from "@alifd/next";
import Image from "next/image";
import { IItem } from "../../typings/common";
import PriceDetail from "../PriceDetail";
import styles from "./index.module.css";

export default function Item(props: { data: IItem }) {
  const { data } = props;
  const imageLoader = ({ src, width, quality = 5 }) => {
    return `${src}?w=${width}&q=${quality || 5}`;
  };
  const toDetail = () => {
    window.open(data.url);
  };
  const addCart = () => {
    console.log("添加到购物车");
  };
  return (
    <div className={styles.box}>
      <Image
        className={styles.image}
        loader={imageLoader}
        src={data.image}
        alt={""}
        width={150}
        height={150}
        onClick={toDetail}
      ></Image>
      <div className={styles.info}>
        <div className={styles.name} onClick={toDetail}>
          {data.name}
        </div>
        <Balloon
          v2
          type="normal"
          autoFocus
          trigger={
            <div className={styles.price} onClick={addCart}>
              {data.price}
            </div>
          }
          closable={false}
          triggerType="hover"
          align="bl"
        >
          <PriceDetail data={data}></PriceDetail>
        </Balloon>
      </div>
    </div>
  );
}
