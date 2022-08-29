import Layout from "../../components/layout";
import { getItems } from "../../services/itemService";
import Product from "../../components/product";
import styles from '../../styles/product.module.css'
export default function Store({ items }) {
  return (
    <>
      <Layout title="Store">
        <h1>Store</h1>
        <div className={styles.items}>
          {items &&
            items.map((item) => (
              <Product key={item.id} item={item} showAs="Default" />
            ))}
        </div>
      </Layout>
    </>
  );
}
export async function getStaticProps() {
  const res = await getItems();
  return {
    props: {
      items: res,
    },
  };
}
