import React from 'react';
import { useRouteError, Link } from 'react-router';

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 p-6">
            <h1 className="text-6xl font-bold text-red-600 mb-4">Oops!</h1>
            <p className="text-xl text-red-800 mb-6">Something went wrong.</p>
            {error && <p className="text-red-700 mb-6">{error.statusText || error.message}</p>}
            <Link 
                to="/" 
                className="px-6 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-400 transition"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default ErrorPage;