import { getProviders, signIn } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc'
function signin({ providers }) {
    return (
        <div className='w-full h-screen grid place-items-center py-20'>
            <div className='w-fit flex flex-col space-y-2'>
                {Object.values(providers).map(provider => (
                    <button key={provider.id} onClick={() => { signIn(provider.id, { callbackUrl: '/' }) }}
                        className='flex space-x-2   text-white bg-white rounded-tl-md rounded-bl-md overflow-hidden'>
                        <p className='text-lg px-7 pr-3 py-1 bg-blue-600'>
                            Sign In with {provider.name}

                        </p>
                        <p className='bg-white self-center px-1'>{provider.name === 'Google' ? <FcGoogle className='text-4xl' /> : ''}</p>
                    </button>
                ))}
            </div>

        </div>
    )
}

export default signin
export async function getServerSideProps(context) {
    const providers = await getProviders();
    return {
        props: {
            providers
        }
    }
}