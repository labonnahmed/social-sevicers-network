import React, { useEffect } from 'react';
import logo from '../../images/logo.png';
import auth from './firebase';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser')) || null;

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname;

    const handleLoggedIn = (provider) => {
        signInWithPopup(auth, provider)
        // .then((result) => {
        //     // console.log(result.user)
        // }).catch((error) => {
        //     console.log(error)
        // });
    };

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                sessionStorage.setItem('loggedInUser', JSON.stringify(user));

                storeAuthToken();

                navigate(from, { replace: true })
            } else {
                sessionStorage.setItem('loggedInUser', JSON.stringify(null));
            }
        });
        return () => {
            listen();
        }
    }, [])


    const handleLoggedOut = () => {
        signOut(auth)
        // .then(() => {
        //     alert('sign out');
        // })
        // .catch((err) => {
        //     console.log(err.massage)
        // });

        window.location.reload();
    };


    const storeAuthToken = () => {
        auth.currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken);
            }).catch(function (error) {
                // Handle error
            });
    };

    return (
        <div className='w-screen h-screen bg-slate-200'>
            <img className='m-auto py-7 h-32' src={logo} alt="" />
            <div className='border-2 m-auto text-center p-10 py-20 rounded-md w-fit h-fit shadow-md bg-slate-100'>
                {
                    loggedInUser ?
                        <>
                            <p>{loggedInUser.email}</p>
                            <br />
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleLoggedOut()}> Log Out </button>
                        </> :
                        <>
                            <h3 className='text-2xl font-semibold my-5'>Login With</h3>
                            <button
                                onClick={() => handleLoggedIn(new GoogleAuthProvider())}
                                type="button"
                                className="focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-3xl text-sm px-5 py-2 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mb-4 border-2 w-96">
                                <svg className="w-7 h-7 ml-0.5 mr-20 text-blue-500" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                                Continue with Google
                            </button><br />
                            <small className='font-medium text-xs mt-3'>Don't have an account? <span className='text-blue-400 underline'>Create an account.</span></small><br />
                        </>
                }
            </div>
        </div>
    );
};

export default Login;