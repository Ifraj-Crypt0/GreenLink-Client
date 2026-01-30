import React from 'react';
import { useLoaderData } from 'react-router';

const BrowseTipsPage = () => {
    const loaderData = useLoaderData();

    // Filter only public posts
    const publicPosts = loaderData.filter(post => post.postData.isPublic);

    return (
        <div className='bg-green-50 min-h-screen'>
        <div className="h-fit  p-6 grid grid-cols-1 gap-4 ">
            {publicPosts.map(post => (
                <div key={post._id} className="bg-gradient-to-br w-full lg:w-3xl mx-auto h-50 from-green-100 to-orange-100 rounded-xl shadow-lg p-5 flex flex-col">
                    {/* User Info */}
                    <div className="flex items-center mb-4">
                        <img
                            src={post.userData.photo}
                            alt={post.userData.name}
                            className="w-10 h-10 rounded-full mr-3 border border-green-300"
                        />
                        <span className="font-semibold text-green-800">{post.userData.name}</span>
                    </div>

                    {/* Post Title */}
                    <h2 className="text-xl font-bold text-green-900 mb-2">{post.postData.title}</h2>

                    {/* Post Tip */}
                    <p className="text-green-700 mb-3 whitespace-pre-wrap overflow-scroll">{post.postData.tip}</p>

                    {/* Category & CreatedAt */}
                  
                    <div className="flex justify-between text-sm  text-green-800">
                        <span className="italic">{post.postData.category}</span>
                        <span className='font-bold'>  {post.postData.createdAt && <span>{post.postData.createdAt}</span>}</span>
                    </div>
                   
                </div>
            ))}
        </div>
        </div>
    );
};

export default BrowseTipsPage;


    