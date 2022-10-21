import Image from 'next/image'
import { AiFillStar } from "react-icons/ai"
import { useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket } from '../slices/basketReducer';


function CheckoutProduct({ id, title, price, rating, description, category, image, hasPrime }) {
    const dispatch = useDispatch();
    const addItemToBasket = () => {
        dispatch(addToBasket({ id, title, price, rating, description, category, image, hasPrime }))
    }
    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({ id }))
    }

    return (
        <div className='grid grid-cols-5 relative my-7'>
            {/* left  */}
            <div className='col-span-full sm:col-span-2 md:col-span-1 mb-5 md:mb-0 grid place-items-center w-full'>
                <Image
                    src={image}
                    height={200}
                    width={200}
                    objectFit='contain'
                />
            </div>
            {/* middle */}
            <div className='col-span-full sm:col-span-3 mx-5'>
                <p className='font-semibold sm:text-lg'>{title}</p>
                <div className='flex'>
                    <AiFillStar className='text-yellow-500 ' />
                    <AiFillStar className='text-yellow-500' />
                    <AiFillStar className='text-yellow-500' />
                    <AiFillStar className='text-yellow-500' />
                </div>
                <p className='text-xs my-2 line-clamp-3'>
                    {description}
                </p>
                <p>${price}</p>
                {hasPrime && (
                    <div className='flex items-center space-x-2 '>
                        <img src="https:links.papareact.com/fdw" alt="" loading='lazy'
                            className='w-12' />
                        <p className='text-xs whitespace-nowrap'>Free Next Day Delivery</p>
                    </div>
                )}
            </div>
            {/* right  */}
            <div className='flex flex-col space-y-2 my-3 md:my-auto justify-end col-span-full md:col-span-1 '>
                <button onClick={addItemToBasket}
                    className='button'>Add To Basket</button>
                <button onClick={removeItemFromBasket}
                    className='button'>Remove From Basket</button>
            </div>


        </div>
    )
}

export default CheckoutProduct