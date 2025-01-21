import React, { useState } from 'react';

const APITest = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Get the API URL from environment variables
    const apiUrl = import.meta.env.VITE_API_URL || process.env.REACT_APP_API_URL;

    const testAPI = async () => {
        if (!apiUrl) {
            setError('API URL is not defined. Please set REACT_APP_API_URL in your .env file.');
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`${apiUrl}/hello`);
            if (!response.ok) {
                throw new Error(`API responded with status ${response.status}`);
            }
            const result = await response.json();
            setData(result);
        } catch (err) {
            setError(err.message);
            setData(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>API Test Component</h1>
            <button onClick={testAPI} disabled={loading}>
                {loading ? 'Testing...' : 'Test API'}
            </button>
            {data && (
                <div style={{ marginTop: '20px' }}>
                    <h2>API Response:</h2>
                    <pre style={{ background: '#f4f4f4', padding: '10px', borderRadius: '4px' }}>
            {JSON.stringify(data, null, 2)}
          </pre>
                </div>
            )}
            {error && (
                <div style={{ marginTop: '20px', color: 'red' }}>
                    <strong>Error:</strong> {error}
                </div>
            )}
        </div>
    );
};

export default APITest;
