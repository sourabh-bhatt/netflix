import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    // console.log(movies);
    return (
        <div className="px-6 bg-black">
            <h1 className="text-3xl py-6 text-white">{title}</h1>
            <div className="flex overflow-x-scroll" style={{ overflowX: 'scroll', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
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
