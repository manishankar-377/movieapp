import React from 'react';
import './css/App.css';
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import {Routes, Route} from "react-router-dom";
import Favourites from "./pages/Favourites";

function App() {

    const movie = 2;
    return (
        <main className="main-content">

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/favourites" element={<Favourites />} />
            </Routes>
        </main>

            /*<div className="App">
            <NavBar/>
            <h1>Welcome to React</h1>
            <Home />

        </div>*/
    );
}

export default App;
