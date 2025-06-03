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
