import Head from "next/head"
import Banner from "../components/Banner"
import Header from "../components/Header"
import ProductFeed from "../components/ProductFeed"

function index({ products }) {
  return (
    <div className="">
      <Header />
      <Banner />
      <ProductFeed products={products} />
    </div>
  )
}

export default index

export async function getServerSideProps(context) {
  const products = await fetch('https://fakestoreapi.com/products').then((res) => res.json());

  return {
    props: {
      products
    }
  }
}

