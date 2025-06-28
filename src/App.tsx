import React from 'react';
import './css/App.css';
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import {Routes, Route} from "react-router-dom";
import {MovieProvider} from "./contexts/MovieContext";
import Favourites from "./pages/Favourites";

function App() {
    return (
        <MovieProvider>
            <NavBar/>
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/favourites" element={<Favourites/>}/>
                </Routes>
            </main>
        </MovieProvider>
    );
}

export default App;
