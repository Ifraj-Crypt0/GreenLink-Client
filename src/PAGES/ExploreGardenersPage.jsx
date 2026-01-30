import React from 'react';
import { useLoaderData } from 'react-router';

const ExploreGardenersPage = () => {
    const loaderData = useLoaderData();

    // Extract unique gardeners from posts
    const gardenersMap = {};
    loaderData.forEach(post => {
        const id = post.userData.name; // using name/email as unique id
        if (!gardenersMap[id]) {
            gardenersMap[id] = post.userData;
        }
    });
    const gardeners = Object.values(gardenersMap);

    return (
        <div className="min-h-screen bg-green-50 flex flex-col items-center p-6">
            <h1 className="text-4xl font-bold text-green-800 mb-8">Explore Gardeners 🌿</h1>

            <div className="w-full max-w-3xl space-y-6">
                {gardeners.map(gardener => (
                    <div key={gardener.name} className="flex items-center bg-green-100 rounded-xl shadow-md p-4">
                        <img 
                            src={gardener.photo} 
                            alt={gardener.name} 
                            className="w-16 h-16 rounded-full mr-4 border border-green-300"
                        />
                        <div>
                            <h2 className="text-xl font-semibold text-green-900">{gardener.name}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExploreGardenersPage;