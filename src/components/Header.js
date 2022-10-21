import Image from 'next/image'
import React from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import { CgShoppingCart } from 'react-icons/cg'
import { AiOutlineMenu } from 'react-icons/ai'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { selectItems } from '../slices/basketReducer'

function Header() {
    const items = useSelector(selectItems);
    const router = useRouter();
    const { data } = useSession();
    return (
        <header className='w-full text-[13px] xs:text-sm'>
            {/* top nav */}
            <div className='bg-amazon_blue flex items-center p-nice py-2 '>
                <div onClick={() => { router.push('/') }}
                    className='w-fit grid place-items-center'>
                    <Image
                        src='/logo.png'
                        height={40} width={150} objectFit='contain'
                        className='translate-y-1.5'
                    />
                </div>
                <div className='hidden sm:flex bg-white rounded-sm overflow-hidden  flex-grow flex-shrink'>
                    <input type="text" name="" id="" placeholder=''
                        className='bg-transparent px-2 sm:py-1 w-full' />
                    <div className='grid place-content-center bg-yellow-400 hover:bg-yellow-500 cursor-pointer'>
                        <HiOutlineSearch className='p-1 text-3xl sm:p-1.5 text-gray-700' />
                    </div>
                </div>
                {/* right  */}
                <div className='flex items-center text-white text-center whitespace-nowrap space-x-5 px-3  ml-auto'>
                    <div onClick={!data ? signIn : signOut}
                        className='flex items-center flex-col cursor-pointer'>
                        <p className='text-xs font-semibold'>Hello, {data ? data.user.name : 'Sign In'}</p>
                        <p className='font-semibold '>Account & Lists</p>
                    </div>

                    <div className='items-center flex-col cursor-pointer hidden xs:flex'>
                        <p className='text-xs font-semibold'>Returns</p>
                        <p className='font-semibold'>& Orders</p>
                    </div>

                    <div onClick={() => { router.push('/checkout') }}
                        className='flex items-center  cursor-pointer relative'>
                        <div className='absolute top-0 right-1/3 bg-yellow-400 px-1 text-black rounded-full w-fit aspect-square grid place-items-center'>
                            <p className='text-xs'>{items.length}</p>
                        </div>
                        <CgShoppingCart className='text-3xl sm:text-4xl' />
                        <p className='self-end font-semibold '>Cart</p>
                    </div>


                </div>
            </div>
            {/* bottom nav */}
            <div className='w-full bg-amazon_blue-light py-2 flex items-center space-x-1 p-nice text-white'>
                <div className='flex items-center space-x-1 cursor-pointer px-2 border border-transparent rounded-sm hover:border-white'>
                    <AiOutlineMenu />
                    <p className='font-semibold'>All</p>
                </div>
                <p className='cursor-pointer  px-2 border border-transparent rounded-sm hover:border-white'>Today's Deals</p>
                <p className='cursor-pointer  px-2 border border-transparent rounded-sm hover:border-white'>Cutomter Service</p>
                <p className='cursor-pointer  px-2 border border-transparent rounded-sm hover:border-white hidden sm:block'>Registry</p>
                <p className='cursor-pointer  px-2 border border-transparent rounded-sm hover:border-white hidden sm:block'>Gift Cards</p>
                <p className='cursor-pointer  px-2 border border-transparent rounded-sm hover:border-white hidden sm:block'>Sell</p>
            </div>

        </header>
    )
}

export default Header