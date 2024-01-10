import { IMG_CDN_URL } from "../utils/contansts";

const MovieCard = ({ posterPath }) => {
    if(!posterPath) return null;
    return (
        <div className="w-36 md:w-48 pr-2 ">
            {posterPath && (
                <img src={IMG_CDN_URL + posterPath} alt="Movie Card" />
            )}
        </div>
    );
};

export default MovieCard;
