import React, { useState } from 'react';
import { toast } from 'react-toastify';

const NSDLInstakitsForm = () => {
    const [kitId, setKitId] = useState('');
    const [remarks, setRemarks] = useState('');

    const handleSubmit = () => {
        if (!kitId.trim()) {
            toast.error("Kit ID is required.");
            return;
        }
        toast.success(`Kit ${kitId} submitted successfully with remarks: ${remarks}`);
        setKitId('');
        setRemarks('');
    };

    return (
        <div className="p-6">
            <h2 className="text-lg font-bold mb-4 text-center text-black bg-gray-100 py-2 rounded">
                NSDL Instakit Form
            </h2>
            <div className="grid grid-cols-4 items-center mb-2 text-black gap-2">
                <label className="block mb-1 font-medium">Kit ID <span className="text-red-500">*</span></label>
                <input
                    type="text"
                    value={kitId}
                    onChange={(e) => setKitId(e.target.value)}
                    className="border bg-white px-3 py-2 rounded w-full"
                    placeholder="Enter Kit ID"
                />
            </div>
            <div className="grid grid-cols-4 items-center mb-2 text-black gap-2">
                <label className="block mb-1 font-medium">Remarks</label>
                <input
                    type="text"
                    value={remarks}
                    onChange={(e) => setRemarks(e.target.value)}
                    className="border bg-white px-3 py-2 rounded w-full"
                    placeholder="Optional remarks"
                />
            </div>
            <button onClick={handleSubmit} className="bg-indigo-500 text-white px-4 py-2 rounded">
                Submit
            </button>
        </div>
    );
};

export default NSDLInstakitsForm;
