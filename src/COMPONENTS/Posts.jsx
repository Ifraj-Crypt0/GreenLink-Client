import React, { useContext } from 'react';
import AuthContext from '../CONTEXTS/AuthContext';
import Swal from 'sweetalert2';
import { Navigate, useNavigate } from 'react-router';

const Posts = ({ post }) => {
    const { _id, postData, userData } = post;
    const navigate = useNavigate();
    const handleDeletePost = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/posts/${id}`, {
                    method: "DELETE"
                }).then(res => res.json()).catch(err => console.log(err))
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });

    };

    const handleEditPostVisit = (id) => {
        console.log('edit', id);
       navigate(`/fixTips/${id}`, { replace: true });
    };

    const { user } = useContext(AuthContext)

    return (
        <div className="max-w-4xl mx-auto bg-white border border-green-100 rounded-3xl p-6 mb-6
                    shadow-sm hover:shadow-md transition-shadow">

            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <img
                        src={userData?.photo}
                        alt={user?.email}
                        className="w-10 h-10 rounded-full object-cover ring-2 ring-green-100"
                    />
                    <span className="text-xl font-bold text-green-900 ">
                        {userData?.name}
                    </span>
                </div>

                {/* Public / Private badge */}
                <span
                    className={`text-xs px-3 py-1 rounded-full font-medium
          ${postData?.isPublic
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-600'
                        }`}
                >
                    {postData?.isPublic ? 'Public' : 'Private'}
                </span>
            </div>
            <hr className='mb-4 text-green-300/40' />
            {/* Title */}
            <h2 className="text-xl font-bold text-green-900 mb-2">
                {postData?.title}
            </h2>

            {/* Tip */}
            <p className="text-green-700 leading-relaxed mb-4 whitespace-pre-wrap">
                {postData?.tip}
            </p>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="text-sm text-green-800/80">
                    <span className="italic">{postData?.category}</span>
                    <span className="mx-2">•</span>
                    <span>{postData?.createdAt}</span>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                    <button
                        onClick={() => handleEditPostVisit(_id)}
                        className="px-4 py-1.5 rounded-lg text-sm font-medium
                       bg-green-100 text-green-800
                       hover:bg-green-200 hover:shadow transition"
                    >
                        Edit
                    </button>

                    <button
                        onClick={() => handleDeletePost(_id)}
                        className="px-4 py-1.5 rounded-lg text-sm font-medium
                       bg-red-100 text-red-700
                       hover:bg-red-200 hover:shadow transition"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Posts;