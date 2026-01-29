import React, { useState, useEffect } from "react";

const images = [
    "/src/Images/liam-m-DJFmbOd84Z0-unsplash.jpg",
    "/src/Images/sandie-clarke-q13Zq1Jufks-unsplash.jpg",
    "/src/Images/robin-wersich-Q0IrpWQIMR4-unsplash.jpg",
    "/src/Images/roxana-crusemire-TW6sBJnZqOw-unsplash.jpg",
];

const HomePage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // change image every 2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 2400); 

        return () => clearInterval(interval); 
    }, []);

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
                        Welcome to GardenConnect
                    </h1>
                    <p className="text-lg md:text-2xl text-white drop-shadow-md mb-6 max-w-xl">
                        Connect with local gardeners, share tips, and grow your green space.
                    </p>
                    <div className="flex gap-4 ">
                        <button className="btn text-white border-orange-50 btn-primary btn-lg bg-green-700 transition-transform hover:scale-105 ">
                            Sign Up
                        </button>
                        <button className="btn btn-primary btn-lg text-white border-white hover:bg-white hover:text-black transition-all">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;





//

