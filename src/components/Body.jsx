import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Error";
import Browse from "./Browse";
import Login from "./Login";

const Body = () => {
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

  return (
    <RouterProvider router={appRouter} />
  );
};

export default Body;
