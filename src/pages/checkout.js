import Image from "next/image"
import Header from "../components/Header"
import { selectItems, selectTotal } from "../slices/basketReducer"
import { useSelector } from 'react-redux'
import CheckoutProduct from "../components/CheckoutProduct"
import { useSession } from "next-auth/react"

function checkout() {
    const items = useSelector(selectItems);
    const { data } = useSession();
    const total = useSelector(selectTotal);
    return (
        <div className='bg-gray-100 '>
            <Header />
            <main className="lg:flex max-w-screen-xl mx-auto ">
                {/* left */}
                <div className="flex-grow m-5 shadow-sm">
                    <Image src='https://links.papareact.com/ikj' width={1020} height={250} objectFit='contain' />
                    <div className="flex flex-col p-5 bg-white">
                        <h1 className="text-2xl border-b pb-4">
                            {items.length === 0 ? 'Your Amazon basket is empty' : 'Shopping Basket'}
                        </h1>
                        <div>
                            {items.map((item, i) => (
                                <CheckoutProduct key={i}
                                    id={item.id}
                                    title={item.title}
                                    rating={item.rating}
                                    price={item.price}
                                    description={item.description}
                                    category={item.category}
                                    image={item.image}
                                    hasPrime={true}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                {/* Right */}
                {items.length > 0 && (
                    <div className='bg-white whitespace-nowrap  shadow-md flex flex-col p-10'>
                        <h2 className="whitespace-nowrap">Subtotal ({items.length} items): ${total}
                        </h2>
                        {data ? <button className={`button mt-2`}>
                            Proceed to checkout
                        </button> :
                            <button className={'disabled-button'} disabled={!data}>
                                Sign in to checkout
                            </button>}
                    </div>
                )}
            </main>
        </div>
    )
}

export default checkout