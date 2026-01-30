import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../CONTEXTS/AuthContext';

const MyTipsPage = () => {
    const [data, setData] = useState([]);
    const { user } = useContext(AuthContext);
    const userEmail = user?.email;

    useEffect(() => {
        fetch('http://localhost:3000/posts')
            .then(res => res.json())
            .then(posts => setData(posts));
    }, []);

    const myPosts = data?.filter(d => d.postData.email === userEmail);

    return (
        <div className="min-h-screen bg-green-50 px-6 py-10">
            {/* Profile header */}
            <div className="max-w-4xl mx-auto mb-10 text-center">

                <h1 className="text-2xl font-semibold text-green-900">{user?.email}'s posts</h1>
            </div>

            <hr className="max-w-4xl mx-auto border-green-200 mb-8" />

            {/* Posts */}
            <div className="max-w-4xl mx-auto space-y-6">
                {myPosts?.length > 0 ? (
                    myPosts.map(post => (
                        <div
                            key={post._id}
                            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 border border-green-100"
                        >
                            {/* Top row */}
                            <div className="flex items-start justify-between mb-3">
                                <h2 className="text-lg font-semibold text-green-900">
                                    {post.postData.title}
                                </h2>
                                <span
                                    className={`text-xs px-3 py-1 rounded-full font-medium ${post.postData.isPublic
                                            ? 'bg-green-100 text-green-700'
                                            : 'bg-gray-100 text-gray-600'
                                        }`}
                                >
                                    {post.postData.isPublic ? 'Public' : 'Private'}
                                </span>
                            </div>

                            {/* Tip body */}
                            <p className="text-green-700 leading-relaxed mb-4 whitespace-pre-wrap">
                                {post.postData.tip}
                            </p>

                            {/* Footer */}
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                <div className="text-sm text-green-800/80">
                                    <span className="italic">{post.postData.category}</span>
                                    {post.postData.createdAt && (
                                        <span className="ml-2">• {post.postData.createdAt}</span>
                                    )}
                                </div>


                                <div className="flex gap-2">
                                    <button className="px-4 py-1.5 rounded-lg text-sm font-medium bg-green-100 text-green-800 hover:bg-green-200 hover:shadow transition">
                                        Edit
                                    </button>
                                    <button className="px-4 py-1.5 rounded-lg text-sm font-medium bg-red-100 text-red-700 hover:bg-red-200 hover:shadow transition">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-green-800 font-medium text-center">
                        You haven't shared any tips yet 🌱
                    </p>
                )}
            </div>
        </div>
    );
};

export default MyTipsPage;