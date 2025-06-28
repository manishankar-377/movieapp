import React from 'react';
import './css/App.css';
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import {Routes, Route} from "react-router-dom";
import Favourites from "./pages/Favourites";

function App() {
    return (
        <div>
            <NavBar/>
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/favourites" element={<Favourites/>}/>
                </Routes>
            </main>
        </div>
    );
}

export default App;
