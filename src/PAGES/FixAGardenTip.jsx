import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import AuthContext from '../CONTEXTS/AuthContext';
import { useParams, useNavigate } from 'react-router';

const FixAGardenTip = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const userData = {
    name: user?.displayName || user?.email,
    photo:
      user?.photoURL ||
      'https://www.afnic.fr/wp-media/uploads/2023/02/Anonymous.jpg',
  };

  const handleUpdatePost = (e) => {
    e.preventDefault();

    const form = e.target;

    const postData = {
      title: form.title.value,
      tip: form.tip.value,
      category: form.category.value,
      isPublic: form.isPublic.checked,
      createdAt: new Date().toLocaleString('en-BD', {
        timeZone: 'Asia/Dhaka',
      }),
      email: user.email,
    };

    const post = { userData, postData };

    Swal.fire({
      title: 'Confirm Update?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, update it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/posts/${id}`, {
          method: 'PATCH',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(post),
        })
          .then((res) => res.json())
          .then(() => {
            Swal.fire('Updated!', 'Garden tip updated 🌱', 'success');
            navigate('/browse-tips', { replace: true });
          })
          .catch(console.error);
      }
    });
  };

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center p-6">
      <h1 className="text-4xl font-extrabold text-green-800 mb-8">
        Update Your Garden Tip 🌿
      </h1>

      <form
        onSubmit={handleUpdatePost}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl"
      >
        {/* Title */}
        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-green-700">Title</label>
          <input
            type="text"
            name="title"
            required
            className="p-3 rounded-lg shadow-md border border-green-200 focus:ring-2 focus:ring-green-300"
          />
        </div>

        {/* Category */}
        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-green-700">Category</label>
          <select
            name="category"
            className="p-3 rounded-lg shadow-md border border-green-200 focus:ring-2 focus:ring-green-300"
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
          <label className="mb-2 font-semibold text-green-700">
            Garden Tip
          </label>
          <textarea
            name="tip"
            rows="5"
            required
            className="p-3 rounded-lg shadow-md border border-green-200 focus:ring-2 focus:ring-green-300"
          />
        </div>

        {/* Public */}
        <div className="flex items-center space-x-3 md:col-span-2">
          <input
            type="checkbox"
            name="isPublic"
            defaultChecked
            className="w-5 h-5 text-green-500"
          />
          <span className="text-green-700 font-medium">
            Make this tip public
          </span>
        </div>

        {/* Submit */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-white font-bold rounded-lg shadow-lg hover:bg-green-500 transition"
          >
            Update Tip
          </button>
        </div>
      </form>
    </div>
  );
};

export default FixAGardenTip;