import Head from "next/head";
import styles from "../styles/layout.module.css";
import Menu from "./menu";
import ShoppingCart from "./shoppingCart";
export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>Github Merch {title ? `| ${title}` : ""}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <div className={styles.container}>{children}</div>
      <ShoppingCart />
    </>
  );
}