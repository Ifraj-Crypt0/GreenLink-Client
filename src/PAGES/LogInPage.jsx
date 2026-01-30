import React, { useContext } from 'react';
import AuthContext from '../CONTEXTS/AuthContext';
import Loading from '../COMPONENTS/Loading';
import Swal from 'sweetalert2';
import { Link } from 'react-router';


const LogInPage = () => {
    const { googleSignIn, loading, emailSignIn, user } = useContext(AuthContext)

    const handleGoogleSignIn = () => {

        googleSignIn().then(res => {
            console.log(res)

        }
        ).catch((err) => {
            console.log(err)
        })
    }
    const handleEmailLogIn = (e) => {

        e.preventDefault()

        const form = e.target
        const email = form.email.value
        const password = form.password.value
        emailSignIn(email, password).then(() => {
            Swal.fire({
                title: "Login successful!",
                icon: "success",
                draggable: true
            });

        })
            .catch((error) => {

                const errorMessage = error.message;
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: errorMessage,

                });
            });
    }
    if (loading) return Loading

    return (
        !user ? <div className='bg-yellow-300/40'>
            <form onSubmit={handleEmailLogIn} className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            You need to log in to access private tabs and create your own posts.
                        </p>
                    </div>
                    <div className="card bg-white w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input name='email' type="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input name='password' type="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                            <p className='w-full text-center'>OR</p>
                            <button type='button' onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Login with Google
                            </button>
                            <div className='text-sm italic text-gray-500' >Do not have an account? <Link to={"/signUp"}><span className='text-blue-400 hover:underline'>Sign Up</span></Link></div>
                        </div>
                    </div>
                </div>

                <div>

                </div>
            </form>

        </div> : <>
            <> <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md bg-white p-8 rounded-2xl shadow-xl">
                        <img
                            src={user.photoURL || "https://i.ibb.co/2M7rtLk/user.png"}
                            alt="User"
                            className="w-24 h-24 rounded-full mx-auto mb-4"
                        />

                        <h1 className="text-3xl font-bold mb-2">
                            Welcome, {user.displayName || "User"} 👋
                        </h1>

                        <p className="text-gray-600 mb-2">
                            You’re logged in as
                        </p>

                        <p className="font-semibold text-green-600 mb-6">
                            {user.email}
                        </p>

                        <p className="text-sm text-gray-500">
                            You can now explore gardeners, share tips, and grow together 🌱
                        </p>
                    </div>
                </div>
            </div>
            </>
        </>
    );
};

export default LogInPage;