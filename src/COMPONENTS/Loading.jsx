import React from 'react';

const Loading = () => {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '12px'
        }}>
            <div
                style={{
                    width: '48px',
                    height: '48px',
                    border: '5px solid #e5e7eb',
                    borderTop: '5px solid #22c55e',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                }}
            />
            <p style={{ color: '#16a34a', fontWeight: 500 }}>Loading...</p>

            <style>
                {`
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `}
            </style>
        </div>
    );
};

export default Loading;