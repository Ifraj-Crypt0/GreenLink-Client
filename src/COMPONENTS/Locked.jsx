import React from 'react';
import { Link } from 'react-router';

const Locked = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 px-4">
            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-green-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0-1.657-1.343-3-3-3s-3 1.343-3 3v3h6v-3zM18 11c0-1.657-1.343-3-3-3s-3 1.343-3 3v3h6v-3z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 14h12M6 17h12" />
                </svg>
                <h1 className="text-2xl font-bold mb-2 text-gray-800">Hold Up!</h1>
                <p className="text-gray-600 mb-4">You need to sign in to access all the features of GardenConnect.</p>
                <Link to={"/logIn"} className="inline-block bg-green-600 text-white px-6 py-2 rounded-full shadow hover:bg-green-700 transition duration-300">Sign In Now</Link>
            </div>
        </div>
    );
};

export default Locked;