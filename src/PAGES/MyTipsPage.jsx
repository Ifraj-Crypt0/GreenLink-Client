import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../CONTEXTS/AuthContext';

const MyTipsPage = () => {
    const [data, setData] = useState([]);
    const { user } = useContext(AuthContext);
    const userEmail = user?.email;

    useEffect(() => {
        fetch("http://localhost:3000/posts")
            .then(res => res.json())
            .then(posts => setData(posts));
    }, []);

    const myPosts = data?.filter(d => d.postData.email === userEmail);

    return (
        <div className="min-h-screen bg-green-50 p-6">
            <h1 className="text-3xl font-bold text-green-800 mb-4">My Garden Tips 🌿</h1>

            {/* Beautiful separator */}
            <hr className="border-green-300 mb-6" />

            <div className="space-y-6">
                {myPosts?.length > 0 ? myPosts.map(post => (
                    <div 
                        key={post._id} 
                        className={`relative bg-gradient-to-br rounded-xl shadow-md p-5 flex flex-col border-l-4 ${post.postData.isPublic ? 'border-green-400' : 'border-red-400'}`}
                    >
                        {/* Title */}
                        <h2 className="text-xl font-bold text-green-900 mb-2">{post.postData.title}</h2>

                        {/* Tip */}
                        <p className="text-green-700 mb-3 whitespace-pre-wrap">{post.postData.tip}</p>

                        {/* Category & Date */}
                        <div className="flex justify-between text-sm text-green-800">
                            <span className="italic">{post.postData.category}</span>
                            {post.postData.createdAt && <span>{post.postData.createdAt}</span>}
                        </div>

                        {/* Action buttons at bottom-right */}
                        <div className="absolute bottom-3 right-3 flex space-x-2">
                            <button className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-400 transition">Edit</button>
                            <button className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-400 transition">Delete</button>
                            <button className={`px-3 py-1 text-white text-sm rounded transition ${post.postData.isPublic ? 'bg-green-500 hover:bg-green-400' : 'bg-gray-500 hover:bg-gray-400'}`}>{post.postData.isPublic ? 'Public' : 'Private'}</button>
                        </div>
                    </div>
                )) : (
                    <p className="text-green-800 font-medium">You haven't shared any tips yet!</p>
                )}
            </div>
        </div>
    );
};

export default MyTipsPage;