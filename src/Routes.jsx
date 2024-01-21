import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Error from './components/Error'
import Login from './components/Login'
import MovieError from './components/MovieError'
import BrowsePage from './pages/Browse.page'

const Routes = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/browse',
      element: <BrowsePage />,
    },
    {
      path: '/browse/movieError',
      element: <MovieError />,
    },
    {
      path: '/error',
      element: <Error />,
    },
  ])

  return <RouterProvider router={appRouter} />
}

export default Routes
