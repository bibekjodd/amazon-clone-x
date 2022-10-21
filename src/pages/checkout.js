import Image from "next/image"
import Header from "../components/Header"
import { addToBasket, selectItems, selectTotal } from "../slices/basketReducer"
import { useSelector, useDispatch } from 'react-redux'
import CheckoutProduct from "../components/CheckoutProduct"
import { useSession } from "next-auth/react"
import { useEffect } from "react"
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'
const stripePromise = loadStripe(process.env.stripe_public_key);
// const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY);

function checkout() {
    const items = useSelector(selectItems);
    const total = useSelector(selectTotal);
    const dispatch = useDispatch();
    const { data } = useSession();


    useEffect(() => {
        const localBasket = JSON.parse(localStorage.getItem('amazon'));
        if (localBasket && items.length < 1) {
            localBasket.forEach(element => {
                dispatch(addToBasket(element));
            })
        }
    }, []);


    const createCheckoutSession = async () => {
        try {
            const stripe = await stripePromise;
            const checkoutSession = await axios.post('/api/create-checkout-session', {
                items: items,
                email: data.user.email,
            });
            console.log(checkoutSession)
            // localStorage.clear();
            const result = await stripe.redirectToCheckout({
                sessionId: checkoutSession.data.id
            });

            if (result.error)
                return alert(result.error.message)


        } catch (error) {
            console.log('error')
        }
    }



    return (
        <div className='bg-gray-100 '>
            <Header />
            <main className="lg:flex max-w-screen-xl mx-auto items-start">
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
                        <button onClick={createCheckoutSession}
                            className='mt-3'>
                            {data ? <span className={`button `}>
                                Proceed to checkout
                            </span> :
                                <span className={'disabled-button cursor-not-allowed'} disabled={!data}>
                                    Sign in to checkout
                                </span>}
                        </button>
                    </div>
                )}
            </main>
        </div>
    )
}

export default checkout