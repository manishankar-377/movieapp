import "../css/Favorites.css";
        import { useMovieContext } from "../contexts/MovieContext";
        import MovieCard from "../components/MovieCard";

        // If not already imported, define or import the Movie interface
        interface Movie {
            id: number;
            title: string;
            poster_path: string;
            release_date?: string;
            // Add other fields as needed
        }

        function Favorites() {
            const { favorites } = useMovieContext();

            if (favorites) {
                return (
                    <div className="favorites">
                        <h2>Your Favorites</h2>
                        <div className="movies-grid">
                            {favorites.map((movie: Movie) => (
                                <MovieCard movie={movie} key={movie.id} />
                            ))}
                        </div>
                    </div>
                );
            }

            return (
                <div className="favorites-empty">
                    <h2>No Favorite Movies Yet</h2>
                    <p>Start adding movies to your favorites and they will appear here!</p>
                </div>
            );
        }

        export default Favorites;