// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../utils/firebase";
// import { addUser, removeUser } from "../utils/userSlice";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Error";
import Browse from "./Browse";
import Login from "./Login";

const Body = () => {
  // const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/browse',
      element: <Browse />
    },
    {
      path: '/error',
      element: <Error />
    }
  ]);

  // Sign in state change
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       const { uid, email, displayName, photoURL } = user;
  //       dispatch(
  //         addUser({
  //           uid: uid,
  //           email: email,
  //           displayName: displayName,
  //           photoURL: photoURL,
  //         })
  //       );
  //     } else {
  //       dispatch(
  //         removeUser());
  //     }
  //   });
  // }, []);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Body;
