import { addUser, removeUser } from "../utils/userSlice"
import { useDispatch } from "react-redux"
import { auth } from "../utils/firebase"
import { onAuthStateChanged } from "firebase/auth"
import { createBrowserRouter } from "react-router-dom"
import Error from "./Error"
import Browse from "./Browse"
import Login from "./Login"
import { RouterProvider } from "react-router-dom"
import { useEffect } from "react"


const Body = () => {

    const dispatch = useDispatch();

    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login/>
        },
        {
            path: '/browse',
            element: <Browse/>
        },
        {
          path: '/error',
          element: <Error/>
        }
    ])
  

    // Sign in state change

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName, photoURL} = user;
              dispatch( addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}))
              
            } else {
              dispatch(removeUser());
              
            }
          });
    },[])

  return (
    <>
        <RouterProvider router={appRouter}/>
    </>
  )
}

export default Body