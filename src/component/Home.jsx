import React from 'react'
import Support from '../assets/support.jpg'
import Dvaralogo from '../assets/dvaralogo.png'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="flex w-screen h-screen font-sans">
            <div className="w-1/2 bg-gray-100">
                <img
                    src={Support}
                    alt="Customer Support"
                    className="object-cover w-full h-full"
                />
            </div>

            <div className="w-1/2 bg-lime-400 flex flex-col justify-center items-center relative">
                {/* Logo */}
                <div className="absolute top-6 right-6">
                    <img
                        src={Dvaralogo}
                        alt="Dvara Money"
                        className="w-32"
                    />
                </div>

                <h1 className="text-3xl font-semibold text-white mb-10">C360</h1>

                <div className="flex flex-col space-y-4 w-1/2">
                    {/* <button className="bg-cyan-700 text-white py-3 rounded-full hover:bg-cyan-800 transition">
                        User Login
                    </button>
                    <button className="bg-cyan-700 text-white py-3 rounded-full hover:bg-cyan-800 transition">
                        Administrator Login
                    </button> */}
                    <button onClick={() => navigate('/login')} type="button" className="mt-8 w-full max-w-80 h-11 rounded-full text-white text-sm bg-cyan-700 hover:opacity-90 transition-opacity">
                        User Login
                    </button>
                    <button onClick={() => navigate('/login')} type="button" className="mt-8 w-full max-w-80 h-11 rounded-full text-white text-sm bg-cyan-700 hover:opacity-90 transition-opacity">
                        Admin Login
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Home
