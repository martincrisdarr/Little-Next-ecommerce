import Link from "next/link";
import Image from "next/image";
import styles from "../styles/product.module.css";
import { convertToPath } from "../libs/utils";
import CartButton from "./cartButton";

export default function Product({ item, showAs, qty }) {
  if (showAs === "Page") {
    return (
      <div className={styles.page}>
        <div className={styles.image}>
          <Image
            src={item.data.img}
            alt={item.data.description}
            width={500}
            height={500}
          ></Image>
        </div>
        <div className={styles.info}>
          <h1>{item.data.title}</h1>
          <p className={styles.price}>${item.data.price}</p>
          <p>{item.data.description}</p>
          <CartButton item={item.data} />
        </div>
      </div>
    );
  }
  if (showAs === "ListItem") {
    return (
      <div className={styles.listItem}>
        <div>
          <Image
            src={item.img}
            alt={item.description}
            width={100}
            height={100}
          ></Image>
        </div>
        <div>
          <h3>{item.title}</h3>
          {item.price}
          {qty === 0 ? "" : <div>{qty} units</div>}
          {qty === 0 ? "" : <div>${qty * item.price}</div>}
        </div>
      </div>
    );
  }
  return (
    <>
      <div className={styles.item}>
        <div>
          <Link href={`/store/${convertToPath(item.title)}`}>
            <a>
              <Image
                src={item.img}
                alt={item.description}
                width={500}
                height={500}
              ></Image>
            </a>
          </Link>
        </div>
        <div>
          <h3>
            <Link href={`/store/${convertToPath(item.title)}`}>
              <a>{item.title}</a>
            </Link>
          </h3>
        </div>
        <div>{item.price}</div>
        <div>
          <CartButton item={item} />
        </div>
      </div>
    </>
  );
}
