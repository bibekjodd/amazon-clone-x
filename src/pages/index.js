import { useEffect } from "react"
import Banner from "../components/Banner"
import Header from "../components/Header"
import ProductFeed from "../components/ProductFeed"
import { addToBasket, selectItems } from "../slices/basketReducer"
import { useDispatch, useSelector } from 'react-redux'

function index({ products }) {
  const items = useSelector(selectItems);
  const dispatch = useDispatch();
  useEffect(() => {
    const localBasket = JSON.parse(localStorage.getItem('amazon'));
    if (localBasket && items.length < 1) {
      localBasket.forEach(element => {
        dispatch(addToBasket(element));
      })
    }
  }, [])
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

