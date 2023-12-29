import { useState } from "react";
import Header from "./Header";

const Login = () => {

    const [isSignInForm, setisSignInForm] = useState(true)

    const toggleSignInForm = () => {
        setisSignInForm(!isSignInForm)
    }
    return (
        <>
        <div style={{ position: 'relative' }}>
            <Header />
            <div style={{ position: 'absolute', top: 0, left: 0 }}>
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="background image home page"
                    style={{ width: '100%', height: '100%' }}
                />
            </div>
            
            <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80" style={{ zIndex: 1 }}>
                <h1 className="font-bold text-3xl py-4">
                    {isSignInForm? "Sign In" : "Sign Up"}
                </h1>

                {!isSignInForm &&
                    <input
                    className="p-4 my-4 w-full bg-gray-800"
                    type="text"
                    placeholder="Full Name"
                />
                }
                <input
                    className="p-4 my-4 w-full bg-gray-800"
                    type="email"
                    placeholder="Email or phone number"
                />
               
                <input
                    className="p-4 my-4 w-full bg-gray-800"
                    type="password"
                    placeholder="Enter Password"
                />
                <button
                    type="submit"
                    className="p-4 my-6 bg-red-700 w-full rounded-lg"
                >
                {isSignInForm? "Sign In" : "Sign Up"}
                </button>

                <p className="py-4 cursor-pointer" onClick={toggleSignInForm} >
                {isSignInForm
                ? "New to NetFlix? Sign Up Now"
                : "Already a user? Sign In Now"
                }
                </p>
            </form>
        </div>
        </>
    )
}

export default Login;
