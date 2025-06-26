import React from 'react';
import './css/App.css';
import NavBar from "./components/NavBar";
import MovieCard from "./components/MovieCard";
import Home from "./pages/Home";

function App() {

    const movie = 2;
    return (
        <div className="App">
            <NavBar/>
            <h1>Welcome to React</h1>
            {movie == 1 ? (<MovieCard movie={{title: "Mani Movie", release_date: "2025"}}/>) : (
                <MovieCard movie={{title: "Mani Movie 2", release_date: "2026"}}/>)}

        </div>
    );
}

export default App;
