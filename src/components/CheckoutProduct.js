import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { AiFillStar } from "react-icons/ai"
import { addToBasket, removeFromBasket } from '../slices/basketReducer';


function CheckoutProduct({ id, title, price, rating, description, category, image, hasPrime }) {
    const dispatch = useDispatch();
    const addItemToBasket = () => {
        dispatch(addToBasket({ id, title, price, rating, description, category, image, hasPrime }))
    }
    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({id}))
    }
    return (
        <div className='grid grid-cols-5 relative my-7'>
            {/* left  */}
            <Image
                src={image}
                height={200}
                width={200}
                objectFit='contain'
            />
            {/* middle */}
            <div className='col-span-3 mx-5'>
                <p>{title}</p>
                <div className='flex'>
                    <AiFillStar className='text-yellow-500' />
                    <AiFillStar className='text-yellow-500' />
                    <AiFillStar className='text-yellow-500' />
                    <AiFillStar className='text-yellow-500' />
                </div>
                <p className='text-xs my-2 line-clamp-3'>
                    {description}
                </p>
                <p>${price}</p>
                {hasPrime && (
                    <div className='flex items-center space-x-2'>
                        <img src="https:links.papareact.com/fdw" alt="" loading='lazy'
                            className='w-12' />
                        <p className='text-xs'>Free Next Day Delivery</p>
                    </div>
                )}
            </div>
            {/* right  */}
            <div className='flex flex-col space-y-2 my-auto justify-end'>
                <button onClick={addItemToBasket}
                    className='button'>Add To Basket</button>
                <button onClick={removeItemFromBasket}
                    className='button'>Remove From Basket</button>
            </div>


        </div>
    )
}

export default CheckoutProduct