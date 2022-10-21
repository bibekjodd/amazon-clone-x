import { useSession } from 'next-auth/react'
import Header from '../components/Header'

function orders() {
    const { data } = useSession();


    return (
        <div className=''>
            <Header />
            <main className='max-w-screen-lg mx-auto p-10'>
                <h1 className='text-3xl border-b mb-2 pb-1 border-yellow-400 '>Your Orders</h1>
                {data ? (
                    <h2>Orders unavailable to your country</h2>
                ) : (
                    <h2>Please sign in to see your orders </h2>
                )}
                <div className='mt-5 space-y-4 '>

                </div>
            </main>
        </div>
    )
}

export default orders