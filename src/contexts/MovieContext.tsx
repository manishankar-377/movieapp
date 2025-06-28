import {createContext, useContext, useState, useEffect} from 'react';

const MovieContext = createContext({

});
export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        const storedFavourites = localStorage.getItem('favourites');
        if (storedFavourites) {
            setFavourites(JSON.parse(storedFavourites));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('favourites', JSON.stringify(favourites));
    }, [favourites]);

    const addFavourite = (movie) => {
        setFavourites((prevFavourites) => {
            const updatedFavourites = [...prevFavourites, movie];
            localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
            return updatedFavourites;
        });
    }

    const removeFavourite = (movieId) => {
        setFavourites((prevFavourites) => {
            const updatedFavourites = prevFavourites.filter(movie => movie.id !== movieId);
            localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
            return updatedFavourites;
        });
    }

    const isFavourite = (movieId) => {
        return favourites.some(movie => movie.id === movieId);
    }

    const value = {
        favourites,
        addFavourite,
        removeFavourite,
        isFavourite
    }
    return <MovieContext.Provider value={{value}}>
        {children}
    </MovieContext.Provider>
}