import React from 'react'
import { useNavigate } from 'react-router-dom'
import loginimage from '../assets/login_bg.jpg'

function Login() {
    const navigate = useNavigate();

    return (
        <div className='bg-gray-100 h-screen w-screen flex items-center justify-center' img={loginimage}>
            <div class="flex flex-col items-center md:max-w-[423px] w-[380px] bg-white rounded-2xl shadow-lg p-6 sm:p-10">
                <p class="text-2xl font-semibold text-gray-900 mb-8">Enter Mobile No</p>
                {/* <input class="w-full outline-none bg-transparent py-2.5" type="text" placeholder="Username" required> */}
                {/* <p class="mt-2 text-sm text-gray-900/90 text-center">Enter the 6-digit code sent to your email ID.</p> */}
                <input class="w-full h-10 bg-indigo-100 text-black text-xl rounded-md outline-none text-center" type='text' required></input>
                <button onClick={() => navigate('/otp')} type="button" class="mt-8 w-full max-w-80 h-11 rounded-full text-white text-sm bg-indigo-500 hover:opacity-90 transition-opacity">
                    Get Otp
                </button>
            </div>
        </div>

    )
}

export default Login
