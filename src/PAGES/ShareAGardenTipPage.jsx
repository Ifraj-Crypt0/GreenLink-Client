import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import AuthContext from '../CONTEXTS/AuthContext';
import {  useNavigate } from 'react-router';

const ShareAGardenTipPage = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
    const userData = {
        name: user.displayName || user.email,
        photo: user.photoURL || "https://www.afnic.fr/wp-media/uploads/2023/02/Anonymous.jpg"
    }
    const handleSubmitPost = (e) => {
        e.preventDefault();
        const form = e.target;

        const postData = {
            title: form.title.value,
            tip: form.tip.value,
            category: form.category.value,
            isPublic: form.isPublic.checked,
            createdAt: new Date().toLocaleTimeString("en-BD", {
                timeZone: "Asia/Dhaka",
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            }),
            email: user.email
        };

        const post = {
            userData,
            postData
        }



        Swal.fire({
            title: "Confirm Post?",
            // text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, post it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "POSTED!",
                    icon: "success"
                });
                fetch("https://greenlink-server-1.onrender.com/posts", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(post)
                }).then(res => res.json()).then(data => {
                    console.log("data after post", data)
                    navigate("/browse-tips", { replace: true })
                }).catch((err) => console.log(err))
                console.log("Submitted Garden Tip 🌱", postData);
            } else {
                form.reset();
            }
        });

    };

    return (
        <div className="min-h-screen bg-green-50 flex flex-col items-center p-6">
            <h1 className="text-4xl font-extrabold text-green-800 mb-8">
                Share Your Garden Tip 🌿
            </h1>

            <form
                onSubmit={handleSubmitPost}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl"
            >
                {/* Title */}
                <div className="flex flex-col">
                    <label className="mb-2 font-semibold text-green-700">Title</label>
                    <input
                        type="text"
                        name="title"
                        placeholder="How to grow tomatoes"
                        required
                        className="p-3 rounded-lg shadow-md border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-300 bg-white"
                    />
                </div>

                {/* Category */}
                <div className="flex flex-col">
                    <label className="mb-2 font-semibold text-green-700">Category</label>
                    <select
                        name="category"
                        className="p-3 rounded-lg shadow-md border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-300 bg-white"
                    >
                        <option>General</option>
                        <option>Vegetables</option>
                        <option>Flowers</option>
                        <option>Soil</option>
                        <option>Watering</option>
                        <option>Pest Control</option>
                    </select>
                </div>

                {/* Tip */}
                <div className="flex flex-col md:col-span-2">
                    <label className="mb-2 font-semibold text-green-700">Garden Tip</label>
                    <textarea
                        name="tip"
                        placeholder="Share your gardening wisdom..."
                        rows="5"
                        required
                        className="p-3 rounded-lg shadow-md border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-300 bg-white"
                    ></textarea>
                </div>

                {/* Public / Private */}
                <div className="flex items-center space-x-3 md:col-span-2">
                    <input
                        type="checkbox"
                        name="isPublic"
                        defaultChecked
                        className="w-5 h-5 text-green-500 border-green-300 rounded focus:ring-green-300"
                    />
                    <span className="text-green-700 font-medium">Make this tip public</span>
                </div>

                {/* Submit Button */}
                <div className="md:col-span-2">
                    <button
                        type="submit"
                        className="w-full py-3 bg-green-600 text-white font-bold rounded-lg shadow-lg hover:bg-green-500 transition-colors"
                    >
                        Share Tip 🚀
                    </button>
                </div>
            </form>


        </div>
    );
};

export default ShareAGardenTipPage;