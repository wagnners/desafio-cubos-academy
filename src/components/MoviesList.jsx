import React from 'react';
import Movies from './Movie';

const MoviesList = ({movies, genres, handleGoToPage}) => {

    return (
        movies.map((movie) => {   
            return <Movies handleGoToPage={handleGoToPage} movie={movie} genres={genres} key={movie.id} />;
        })
    );
};

export default MoviesList;