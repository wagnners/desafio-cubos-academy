import React from 'react';
import movie_img from '../assets/img/movie.png';

const Movie = ({movie, genres, handleGoToPage}) => {

    const filterGenre = (gerne_id) => {
        return genres.filter(genre => genre.id === gerne_id)[0].name;
    }

    return (
        <div className="list movie-content">
            {/* <div className="img-movie" style={{"backgroundImage": `url('https://image.tmdb.org/t/p/w500${movie.poster_path}')`}}></div> */}
            <div className="img-movie">
                {movie.poster_path  ? <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}></img>
                                    : <div className="none-image"><img src={movie_img} alt={movie.title}></img></div>}
            </div>
            <div className="movie-details">
                <div className="movie-content-header">
                    <div className="movie-score"><span>{movie.vote_average}</span></div>
                    <h2 onClick={() => handleGoToPage(movie.id)}>{movie.title}</h2>
                </div>
                <div className="movie-content-body">
                    <h4>{new Date(movie.release_date).toLocaleDateString()}</h4>
                    <p>{movie.overview}</p>
                </div>
                <div className="movie-content-footer">
                   {movie.genre_ids && movie.genre_ids.length > 0 && movie.genre_ids.map((genre_id) => (  
                       <span className="genres" key={genre_id}>{filterGenre(genre_id)}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Movie;