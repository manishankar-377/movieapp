import MovieCard from "../components/MovieCard";
import React, {useState, useEffect} from "react";
import {searchMovies, getPopularMovies} from "../services/api";
import "../css/Home.css";


function Home() {

    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (error) {
                console.error("Failed to fetch popular movies:", error);
                setError("Failed to fetch popular movies.");
            }
            finally {
                setLoading(false);
            }
        }
        loadPopularMovies();
    }, []);


    const handleSearch = async (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();
        if (!searchQuery.trim()) {
            setError("Please enter a search query.");
            return;
        }
        if (loading){
            setError("Please wait until the current search is complete.");
            return;
        }
        setLoading(true);
        try {
            const searchResults = await searchMovies(searchQuery);
            if (searchResults.length === 0) {
                setError("No movies found for your search query.");
            } else {
                setMovies(searchResults);
                setError(null);
            }

        }
        catch (error) {
            console.error("Failed to search movies:", error);
            setError("Failed to search movies.");
        }
        finally {
            setLoading(false);
        }
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for a movie..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            {error && <div className="error-message">{error}</div>}

            {loading ? (<div className="loading">Loading...</div>) : (<div className="movies-grid">
                {movies.map((movie) => (
                            <MovieCard movie={movie} key={movie.id}/>
                        )
                )}
            </div>)}


        </div>
    )
}

export default Home;