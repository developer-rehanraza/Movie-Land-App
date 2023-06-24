import { useEffect, useState } from 'react';

import MovieCard from './MovieCard';

import Footer from './Footer';
import './App.css';

import SearchIcon from './search.svg';

// 7b71ee54

// const API_URL = 'http://www.omdbapi.com?apikey=7b71ee54';
// const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=7b71ee54';
const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=7b71ee54';

// const movie1 = {
//     "Title": "Guardians of the Galaxy Vol. 2",
//     "Year": "2017",
//     "imdID": "tt3896198",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"


// };

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        
        const response = await fetch(`${API_URL}&s=${title}`); 
        const data = await response.json();
        setMovies(data.Search);
        // console.log(data.Search)
    }   

        
    useEffect(() => {
        searchMovies('Spiderman');

    }, []);
    
    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input type="text" placeholder='Serach for Movies' value={searchTerm}
                    onChange={(e) => 
                    setSearchTerm(e.target.value)
                    }
                />
                <img src={SearchIcon}
                    alt="search" 
                    onClick={() => 
                    searchMovies(searchTerm)}
                />

            </div>


            {
                movies?.length > 0 
                    ? (
                        <div className="container">
                            {movies.map((movie) => (
                                <MovieCard movie={ movie} />
                            ))}
            </div>
                    ) :
                    (
                        <div className="empty">
                            <h2>No Movies found</h2>
                     </div>
                    )
            }


            
            <Footer/>
        </div>
    );
    
}


export default App;  