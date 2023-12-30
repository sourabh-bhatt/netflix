import { addUser, removeUser } from "../utils/userSlice"
import { useDispatch } from "react-redux"
import { auth } from "../utils/firebase"
import { onAuthStateChanged } from "firebase/auth"
import { createBrowserRouter } from "react-router-dom"
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
        }
    ])

    // Sign in state change

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName} = user;
              dispatch( addUser({uid: uid, email: email, displayName: displayName}))
              
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