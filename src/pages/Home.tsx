import MovieCard from "../components/MovieCard";
import {useState} from "react";
import "../css/Home.css";


function Home() {

    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "Inception", release_date: 2010},
        {id: 2, title: "The Dark Knight", release_date: 2008},
        {id: 3, title: "Interstellar", release_date: 2014}
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery)
        setSearchQuery("")
    }

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
            <div className="movies-grid">
                {movies.map(
                    (movie) =>
                    movie.title.toLowerCase().startsWith(searchQuery) && (
                        <MovieCard movie={movie} key={movie.id}/>
                    )
                )}
            </div>

        </div>
    )
}

export default Home;