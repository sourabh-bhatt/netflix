import { IMG_CDN_URL } from "../utils/contansts";

const MovieCard = ({ posterPath }) => {
    return (
        <div className="w-48 pr-2 ">
            {posterPath && (
                <img src={IMG_CDN_URL + posterPath} alt="Movie Card" />
            )}
        </div>
    );
};

export default MovieCard;
