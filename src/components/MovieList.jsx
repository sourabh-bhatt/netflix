// import MovieCard from "./MovieCard";

// const MovieList = ({ title, movies }) => {
//     // console.log(movies);
//     return (
//         <div className=" from-black to-gray-800">
//             <h1 className="text-3xl py-6 text-white">{title}</h1>
//             <div className="flex overflow-x-scroll" style={{ overflowX: 'scroll', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
//                 <div className="flex">
//                     {movies && movies.length > 0 && movies?.map(movie => (
//                         <MovieCard key={movie?.id} posterPath={movie.poster_path} />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MovieList;


import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    return (
        <div className="px-6">
            <h1 className="text-3xl py-4 text-white">{title}</h1>
            <div className="flex overflow-x-scroll">
                <div className="flex">
                    {movies && movies.length > 0 && movies?.map(movie => (
                        <MovieCard key={movie?.id} posterPath={movie.poster_path} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieList;