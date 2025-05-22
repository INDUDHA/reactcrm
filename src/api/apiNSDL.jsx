// src/api/nsdlApi.js

export const addNsdlFloat = async (payload) => {
    try {
        const response = await fetch('https://sparkapi-stage.dvaramoney.com/nsdl/api/v1/addNsdlFloat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'source': 'QnlQYXNzSW50ZXJuYWxSZXE=',
            },
            body: JSON.stringify(payload),
        });

        return await response.json();
    } catch (error) {
        console.error('API Error:', error);
        throw new Error('Network error');
    }
};


export const getkitallocation = async (payload) => {
    try {
        const response = await fetch('https://sparkc360api.dvaramoney.com/c360/api/v1/getkitallocation', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'source': 'QnlQYXNzSW50ZXJuYWxSZXE=',
            },
            body: JSON.stringify(payload),
        });

        return await response.json();
    } catch (error) {
        console.error('API Error:', error);
        throw new Error('Network error');
    }
};
