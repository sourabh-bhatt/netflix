import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/contansts";

const Header = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        
      })
      .catch((error) => {
        navigate("/error");
      });
    
  };

  // useEffect

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL,
          })
        );
        navigate('/browse')
      } else {
        dispatch(removeUser());
        navigate('/')
      }
    });

    return () => unsubscribe(); // component unmounts after completion and unsubscribe onAuthStateChanged
  }, []);

  //

  console.log("User Photo URL:", user?.photoURL);
  return (
    <>
      <div className="absolute w-full px-4 sm:px-8 py-2 bg-gradient-to-b from-white z-10 flex justify-between items-center">
        <img
          className="w-28 sm:w-36 lg:w-44"
          src={LOGO}
          alt="Netflix logo"
        />
      </div>

      {/* if user is signed out then dont load this */}
      {user && user.photoURL && (
        <div className="flex justify-end items-center mr-2 sm:mr-4 py-6">
          <img
            className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mr-2 sm:mr-4 z-10"
            src={user.photoURL}
            // src="https://avatars.githubusercontent.com/u/89153172?v=4"
            alt="User Photo"
          />

          <button
            onClick={handleSignOut}
            className="font-bold px-2 py-1 sm:px-3 sm:py-1 lg:px-4 lg:py-2 bg-yellow-500 border rounded-lg border-yellow-600 hover:bg-yellow-700 z-10"
          >
            Sign Out
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
