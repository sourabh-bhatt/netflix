import { useRouteError } from "react-router-dom";

const MovieError = () => {
    const err = useRouteError();
  console?.log(err);
    return (
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-red-600">No Movies Found</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Oops!</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find any movie recommendations based on your search.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="#" className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Go back</a>
            <a href="#" className="text-sm font-semibold text-gray-900">Contact support <span aria-hidden="true">&rarr;</span></a>
          </div>
        </div>
      </main>
    );
  };
  
  export default MovieError;
  