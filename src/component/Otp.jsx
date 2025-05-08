import React from 'react';

const Otp = () => {
    return (
        <div class="flex flex-col items-center md:max-w-[423px] w-[380px] bg-white rounded-2xl shadow-lg p-6 sm:p-10">
            <p className="text-2xl font-semibold text-gray-900">Verify OTP</p>
            <p className="mt-2 text-sm text-gray-900/90 text-center">
                Enter the 4-digit code sent to your mobile no.
            </p>

            <div className="grid grid-cols-4 gap-2 sm:gap-3 w-11/12 mt-8 justify-center">
                <input type="text" maxLength="1" className="w-full h-12 bg-indigo-50 text-gray-900 text-xl rounded-md outline-none text-center" />
                <input type="text" maxLength="1" className="w-full h-12 bg-indigo-50 text-gray-900 text-xl rounded-md outline-none text-center" />
                <input type="text" maxLength="1" className="w-full h-12 bg-indigo-50 text-gray-900 text-xl rounded-md outline-none text-center" />
                <input type="text" maxLength="1" className="w-full h-12 bg-indigo-50 text-gray-900 text-xl rounded-md outline-none text-center" />
            </div>

            <button type="button" className="mt-8 w-full max-w-80 h-11 rounded-full text-white text-sm bg-indigo-500 hover:opacity-90 transition-opacity">
                Verify OTP
            </button>
        </div>
    );
};

export default Otp;
