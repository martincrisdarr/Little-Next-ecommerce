import Image from 'next/image'
import styles from '../styles/Home.module.css'
import stylesProduct from '../styles/product.module.css'
import Layout from '../components/layout'
import { getLatestItems } from '../services/itemService'
import Product from '../components/product'
export default function Home({items}) {
  return (
    <Layout title="Bienvenido">
      <div className={styles.banner}>
        <div className={styles.bannerBackground}>
          <div className={styles.bannerInfo}>
            <h1>Shop the Summer 2022 Collection</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga natus quae dolor iure recusandae</p>
          </div>
        </div>
      </div>
      <h1>Latest Products</h1>
      <div className={stylesProduct.items}>
        {items && items.map(item => <Product key={item.id} item={item} showAs="item" />) }
      </div>
    </Layout>
  )
}

export async function getStaticProps(){
  const res = await getLatestItems()
  return{
    props:{
      items: res
    }
  }
}