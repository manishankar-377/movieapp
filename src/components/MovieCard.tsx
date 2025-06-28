import "../css/MovieCard.css"
        import { useMovieContext } from "../contexts/MovieContext"

        interface Movie {
            id: number
            title: string
            poster_path: string
            release_date?: string
            // Add other fields as needed
        }

        interface MovieCardProps {
            movie: Movie
        }

        function MovieCard({movie}: MovieCardProps) {
            const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()
            const favorite = isFavorite(movie.id)

            function onFavoriteClick(e: React.MouseEvent<HTMLButtonElement>) {
                e.preventDefault()
                if (favorite) removeFromFavorites(movie.id)
                else addToFavorites(movie)
            }

            return (
                <div className="movie-card">
                    <div className="movie-poster">
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
                        <div className="movie-overlay">
                            <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
                                ♥
                            </button>
                        </div>
                    </div>
                    <div className="movie-info">
                        <h3>{movie.title}</h3>
                        <p>{movie.release_date?.split("-")[0]}</p>
                    </div>
                </div>
            )
        }

        export default MovieCard