import { auth } from '../utils/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { checkValidData } from '../utils/validate';
import { useState, useRef } from "react";
import Header from "./Header";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(null);
    const [isSignInForm, setIsSignInForm] = useState(true);

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    // const name = useRef(null);

    const handleButtonClick = () => {
        // console.log(email.current.value);
        // console.log(password.current.value);
        // console.log(name.current.value);``

        const message = checkValidData(email?.current?.value, password?.current?.value);
        setErrorMessage(message);

        if (message) return;

        // Sign In / Sign Up Logic
        if (!isSignInForm) {
            // Sign Up logic
            createUserWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;

                    //update the user profile

                    const auth = getAuth();
                    
                    updateProfile(user, {
                        displayName: name?.current?.value, 
                        photoURL: "https://avatars.githubusercontent.com/u/89153172?v=4"
                    }).then(() => {

                        // dispatchign on update

                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))

                        navigate('/browse')

                    }).catch((error) => {
                        setErrorMessage(error.message)

                    });


                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)
                });
        } else {
            // Sign In Logic
            signInWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    navigate("/browse")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)
                });
        }
    };

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    return (
        <div style={{ position: 'relative' }}>
            <Header />
            <div style={{ position: 'absolute', top: 0, left: 0 }}>
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="background image home page"
                    style={{ width: '100%', height: '100%' }}
                />
            </div>
            <form onSubmit={(e) => { e.preventDefault() }}
                className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80" style={{ zIndex: 1 }}>
                <h1 className="font-bold text-3xl py-4">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>

                {!isSignInForm &&
                    <input
                        // ref={name}
                        // name='name'
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
