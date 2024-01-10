import { useRef, useState } from "react";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { checkValidData } from '../utils/validate';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { LOGIN_BG, USER_AVATAR, altText } from '../utils/contansts';
import Header from "./Header";

const Login = () => {
    const dispatch = useDispatch();
    const [errorMessage, setErrorMessage] = useState(null);
    const [isSignInForm, setIsSignInForm] = useState(true);
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        const message = checkValidData(email?.current?.value, password?.current?.value);
        setErrorMessage(message);

        if (message) return;

        if (!isSignInForm) {
            createUserWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    const auth = getAuth();
                    
                    updateProfile(user, {
                        displayName: name?.current?.value, 
                        photoURL: USER_AVATAR,
                    }).then(() => {
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
                    }).catch((error) => {
                        setErrorMessage(error.message);
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        } else {
            signInWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        }
    };

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    return (
        <div>
            <Header />
            <div className="absolute">
                <img
                className="h-screen w-full object-cover fixed"
                    src={LOGIN_BG} alt={altText}
                />
            </div>
            <form onSubmit={(e) => { e.preventDefault() }}
                className="w-full sm:w-3/4 lg:w-1/3 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80" style={{ zIndex: 1 }}>
                <h1 className="font-bold text-3xl py-4">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>

                {!isSignInForm &&
                    <input
                        ref={name}
                        className="p-4 my-4 w-full bg-gray-800"
                        type="text"
                        placeholder="Full Name"
                    />
                }
                <input
                    ref={email}
                    className="p-4 my-4 w-full bg-gray-800"
                    type="email"
                    placeholder="Email Id"
                />

                <input
                    ref={password}
                    className="p-4 my-4 w-full bg-gray-800"
                    type="password"
                    placeholder="Password"
                />

                <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>

                <button
                    type="submit"
                    className="p-4 my-6 bg-red-700 w-full rounded-lg"
                    onClick={handleButtonClick}
                >
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>

                <p className="py-4 cursor-pointer" onClick={toggleSignInForm} >
                    {isSignInForm
                        ? "New to NetFlix? Sign Up Now"
                        : "Already a user? Sign In Now"
                    }
                </p>
            </form>
        </div>
    );
};

export default Login;

{/* <div style={{ position: 'relative' }}>
            <Header />
            <div style={{ position: 'absolute', top: 0, left: 0 }}>
                <img
                    src={LOGIN_BG} alt={altText}
                    style={{ width: '100%', height: '100%' }}
                />
            </div>
            <form onSubmit={(e) => { e.preventDefault() }}
                className="w-full sm:w-3/4 lg:w-1/3 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80" style={{ zIndex: 1 }}>
                <h1 className="font-bold text-3xl py-4">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>

                {!isSignInForm &&
                    <input
                        ref={name}
                        className="p-4 my-4 w-full bg-gray-800"
                        type="text"
                        placeholder="Full Name"
                    />
                }
                <input
                    ref={email}
                    className="p-4 my-4 w-full bg-gray-800"
                    type="email"
                    placeholder="Email Id"
                />

                <input
                    ref={password}
                    className="p-4 my-4 w-full bg-gray-800"
                    type="password"
                    placeholder="Password"
                />

                <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>

                <button
                    type="submit"
                    className="p-4 my-6 bg-red-700 w-full rounded-lg"
                    onClick={handleButtonClick}
                >
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>

                <p className="py-4 cursor-pointer" onClick={toggleSignInForm} >
                    {isSignInForm
                        ? "New to NetFlix? Sign Up Now"
                        : "Already a user? Sign In Now"
                    }
                </p>
            </form>
        </div> */}

