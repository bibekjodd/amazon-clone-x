import { getProviders, signIn } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc'
function signin({ providers }) {
    return (
        <div className='w-full h-screen grid place-items-center py-20'>
            <div className='w-fit flex flex-col space-y-2'>
                {Object.values(providers).map(provider => (
                    <button key={provider.id} onClick={() => { signIn(provider.id, { callbackUrl: '/' }) }}
                        className='flex space-x-2  bg-blue-600 text-white rounded-sm overflow-hidden'>
                        <p className='text-xl px-5 py-1'>
                            Sign In with {provider.name}

                        </p>
                        <p className='bg-white self-center'>{provider.name === 'Google' ? <FcGoogle className='text-4xl' /> : ''}</p>
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