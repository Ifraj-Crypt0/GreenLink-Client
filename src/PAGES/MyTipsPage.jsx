import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../CONTEXTS/AuthContext';
import Posts from '../COMPONENTS/Posts';

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
            {
                myPosts.map(post => <Posts key={post._id} post={post}></Posts>)
            }
        </div>
    );
};

export default MyTipsPage;