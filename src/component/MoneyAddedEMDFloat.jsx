import React from 'react';

const MoneyAddedEMDFloat = ({
    amount,
    setAmount,
    refNo,
    setRefNo,
    instrumentType,
    setInstrumentType,
    comments,
    setComments,
    errors,
    handleSubmit,
    handleReset,
    loading,
}) => (
    <div className="p-6">
        <h2 className="text-lg font-bold mb-4 text-center text-black bg-gray-100 py-2 rounded">
            Money Added to EMD Float
        </h2>

        <div className="grid grid-cols-4 items-center mb-2 text-black gap-2">
            <label className="text-center font-medium">Amount: <span className="text-red-500">*</span></label>
            <div className="col-span-1">
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className={`border px-3 py-2 rounded w-full bg-white no-spinner ${errors.amount ? 'border-red-500' : ''}`}
                    placeholder="Enter amount"
                    disabled={loading}
                />
                {errors.amount && <p className="text-red-500 text-xs">{errors.amount}</p>}
            </div>

            <label className="text-center font-medium">Ref No: <span className="text-red-500">*</span></label>
            <div className="col-span-1">
                <input
                    type="text"
                    value={refNo}
                    onChange={(e) => setRefNo(e.target.value)}
                    className={`border bg-white px-3 py-2 rounded w-full ${errors.refNo ? 'border-red-500' : ''}`}
                    placeholder="Enter reference no"
                    disabled={loading}
                />
                {errors.refNo && <p className="text-red-500 text-xs">{errors.refNo}</p>}
            </div>
        </div>

        <div className="grid grid-cols-4 items-center mb-2 text-black gap-2">
            <label className="text-center font-medium">Instrument Type: <span className="text-red-500">*</span></label>
            <div className="col-span-1">
                <select
                    value={instrumentType}
                    onChange={(e) => setInstrumentType(e.target.value)}
                    className={`border bg-white px-3 py-2 rounded w-full ${errors.instrumentType ? 'border-red-500' : ''}`}
                    disabled={loading}
                >
                    <option value="">Select an option</option>
                    <option value="NEFT">NEFT</option>
                    <option value="RTGS">RTGS</option>
                    <option value="IMPS">IMPS</option>
                </select>
                {errors.instrumentType && <p className="text-red-500 text-xs">{errors.instrumentType}</p>}
            </div>

            <label className="text-center font-medium">Comments:</label>
            <div className="col-span-1">
                <input
                    type="text"
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    className="border bg-white px-3 py-2 rounded w-full"
                    placeholder="Enter comments"
                    disabled={loading}
                />
            </div>
        </div>

        <div className="flex justify-center gap-10 mt-6">
            <button onClick={handleReset} className="bg-indigo-400 text-white px-5 py-2 rounded font-semibold" disabled={loading}>
                Reset
            </button>
            <button onClick={handleSubmit} className="bg-indigo-400 text-white px-5 py-2 rounded font-semibold flex items-center justify-center" disabled={loading}>
                {loading ? (
                    <>
                        <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                        </svg>
                        Submitting...
                    </>
                ) : 'Submit'}
            </button>
        </div>
    </div>
);

export default MoneyAddedEMDFloat;
