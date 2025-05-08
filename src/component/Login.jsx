import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate();

    return (
        <div class="flex flex-col items-center md:max-w-[423px] w-[380px] bg-white rounded-2xl shadow-lg p-6 sm:p-10">
            <p class="text-2xl font-semibold text-gray-900 mb-8">Enter Mobile No</p>
            {/* <input class="w-full outline-none bg-transparent py-2.5" type="text" placeholder="Username" required> */}
            {/* <p class="mt-2 text-sm text-gray-900/90 text-center">Enter the 6-digit code sent to your email ID.</p> */}
            <input class="w-full h-10 bg-indigo-50 text-gray-900 text-xl rounded-md outline-none text-center" type='text'required></input>
            <button onClick={()=>navigate('/otp')} type="button" class="mt-8 w-full max-w-80 h-11 rounded-full text-white text-sm bg-indigo-500 hover:opacity-90 transition-opacity">
                Get Otp
            </button>
        </div>
        
    )
}

export default Login
