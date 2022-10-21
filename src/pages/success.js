import { useRouter } from 'next/router'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import Header from '../components/Header'


function success() {
    const router = useRouter();
    return (
        <div className='bg-gray-100'>
            <Header />
            <main className='bg-white p-10 flex flex-col'>
                <div className=' flex items-center space-x-3'>
                    <div>
                        <BsFillCheckCircleFill
                            className='text-green-500 h-10 text-xl ' />
                    </div>
                    <h1 className='text-2xl font-semibold'>Thank you, your order has been confirmed!</h1>
                </div>
                <p className='mt-3'>Thank you for shoppinng with us. We'll send you a confirmation once your item has been shipped, if you would like to check the status of your order(s) please press the link below.</p>
                <button onClick={() => { router.push('/orders') }}
                    className='button mt-8'>Go to my orders</button>
            </main>
        </div>
    )
}

export default success