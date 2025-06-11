import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginimage from "../assets/login_bg.jpg";

const Otp = () => {
  const navigate = useNavigate();
  const [otpDigits, setOtpDigits] = useState(["", "", "", ""]);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleChange = (index, value) => {
    if (/^\d?$/.test(value)) {
      const updatedOtp = [...otpDigits];
      updatedOtp[index] = value;
      setOtpDigits(updatedOtp);
    }
  };

  const handleotp = async () => {
    const crm_otp = otpDigits.join("");
    const crm_user_mobile = localStorage.getItem("crm_user_mobile"); // assuming mobile is stored

    setMessage("");

    try {
      const response = await fetch(
        "https://sparkapi-stage.dvaramoney.com/c360/api/v1/verifyOtp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ crm_user_mobile, otp: crm_otp }),
        }
      );

      const data = await response.json();
      console.log("OTP data", data);

      if (data.statuscode === 200) {
        console.log("OTP verified:", data);
        navigate("/dashboard");
      } else if (data.statuscode === 208) {
        setMessage(data.message || "Partial success or warning.");
        setMessageType("error");
      } else {
        setMessage(
          data.message || "OTP verification failed. Please try again."
        );
        setMessageType("error");
      }
    } catch (error) {
      console.error("API error:", error);
      setMessage("Something went wrong. Please try again.");
      setMessageType("error");
    }
  };

  return (
    <div
      className="h-screen w-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${loginimage})` }}
    >
      <div className="flex flex-col items-center md:max-w-[423px] w-[380px] bg-white rounded-2xl shadow-lg p-6 sm:p-10">
        <p className="text-2xl font-semibold text-gray-900">Verify OTP</p>
        <p className="mt-2 text-sm text-gray-900/90 text-center">
          Enter the 4-digit code sent to your mobile number.
        </p>

        {message && (
          <div
            className={`w-full mb-4 text-center px-4 py-2 rounded-md text-sm ${
              messageType === "error"
                ? "bg-red-100 text-red-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {message}
          </div>
        )}

        <div className="grid grid-cols-4 gap-2 sm:gap-3 w-11/12 mt-8 justify-center">
          {otpDigits.map((digit, idx) => (
            <input
              key={idx}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(idx, e.target.value)}
              className="w-full h-12 bg-indigo-50 text-gray-900 text-xl rounded-md outline-none text-center"
            />
          ))}
        </div>

        <button
          onClick={handleotp}
          type="button"
          className="mt-8 w-full max-w-80 h-11 rounded-full text-white text-sm bg-indigo-500 hover:opacity-90 transition-opacity"
        >
          Verify OTP
        </button>
      </div>
    </div>
  );
};

export default Otp;
