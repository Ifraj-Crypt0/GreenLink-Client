import React, { useContext, useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router';
import AuthContext from '../CONTEXTS/AuthContext';


const Headers = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();
    const images = [
        "/Images/liam-m-DJFmbOd84Z0-unsplash.jpg",
        "/Images/robin-wersich-Q0IrpWQIMR4-unsplash.jpg",
        "/Images/roxana-crusemire-TW6sBJnZqOw-unsplash.jpg",
        "/Images/sandie-clarke-q13Zq1Jufks-unsplash.jpg",
    ]

    // $$$ jsTasks
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 2400);

        return () => clearInterval(interval);
    }, []);

    const goToSignUpPage = () => {
        navigate("/signUp");
    }
    const { user } = useContext(AuthContext)
    console.log(user)
    return (
        <div>
            {/* HEADERS */}
            <div className="w-screen h-[75vh] relative overflow-hidden">
                <div
                    className="absolute top-0 left-0 w-full h-full transition-transform duration-700"
                    style={{ transform: `translateY(-${currentIndex * 100}%)` }}
                >
                    {images.map((src, idx) => (
                        <div key={idx} className="h-[75vh] w-full">
                            <img src={src} className="object-cover w-full h-full" />
                        </div>
                    ))}
                </div>

                {/* HERO TEXT OVERLAY */}
                <div className="absolute w-full flex flex-col inset-0 justify-center px-4 bg-black/30">
                    <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">
                        Welcome to <span className='text-green-400'> GardenConnect</span>
                    </h1>
                    {
                        !user ? <p className=" text-gray-100/80 md:text-2xl  drop-shadow-md mb-6 max-w-xl">
                           Sign Up with your gmail or use fake email and password to unlock the app. Use the navigation panel to access your profile or create posts.
                        </p> : ""
                    }
                    {
                        !user ? <div className="flex gap-4 ">
                            <button onClick={goToSignUpPage} className="btn text-white border-orange-50 btn-primary btn-lg bg-green-700 transition-transform hover:scale-105 ">
                                Sign Up
                            </button>
                            <Link to={"/learn-more"} className="btn btn-primary btn-lg text-white border-white hover:bg-white hover:text-black transition-all">
                                Learn More
                            </Link>
                        </div> : <span className='text-white font-bold text-3xl'>{user.displayName || user.email}</span>
                    }

                </div>
            </div>
        </div>
    );
};

export default Headers;