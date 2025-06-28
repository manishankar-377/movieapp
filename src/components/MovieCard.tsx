import "../css/MovieCard.css"
import {useMovieContext} from "../contexts/MovieContext";

function MovieCard({movie}) {
    const {addFavourite, removeFavourite, isFavourite} = useMovieContext();
const favorite = isFavourite(movie.id);
    function onFavouriteClick(e) {
        e.stopPropagation(); // Prevent click from propagating to the card
        if (favorite) {
            removeFavourite(movie.id);
        } else {
            addFavourite(movie);
        }
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
                <div className="movie-overlay"></div>
                <button className={`favorite-btn ${favorite? "active": ""}`} onClick={onFavouriteClick}>♥</button>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-")[0]}</p>
                <p>{movie.overview}</p>
            </div>
        </div>
    );
}

export default MovieCard;