import Image from "next/image"
import { AiFillStar } from "react-icons/ai"

function Product({ id, title, price, description, category, image, }) {
    return (
        <div className="relative flex flex-col m-5 bg-white z-30 p-10 rounded-sm">
            <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
            <Image src={image} height={200} width={200} objectFit='contain'
                className="mx-auto self-center " />
            <h4 className="my-3 font-semibold">{title}</h4>
            <div className="flex">
                <AiFillStar className="text-yellow-500" />
                <AiFillStar className="text-yellow-500" />
                <AiFillStar className="text-yellow-500" />
                <AiFillStar className="text-yellow-500" />
            </div>
            <p className="text-xs my-2 line-clamp-2">{description}</p>
            <p className="mb-5">
                ${price}
            </p>
            <div className="flex items-center space-x-2 -mt-5">
                <img src="https://links.papareact.com/fdw" alt=""
                    className="w-12 " />
                <p className="text-xs text-gray-500">Free Next-Day Delivery</p>
            </div>
            <button className="self-stretch text-center mt-auto button">Add to Basket</button>
        </div>
    )
}

export default Product