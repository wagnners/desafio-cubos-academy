import React, {useState, useEffect} from 'react'
import { getMovie } from '../../helpers/MovieDBAPI';
import queryString from 'query-string';
import MovieDetails from '../../components/MovieDetails';

const Movie = ({history, location}) => {

    const [movie, setMovie] = useState(null);
    const movie_id = queryString.parse(location.search).id;

    useEffect(() => { 

        async function fetch() {
            const result = await getMovie(movie_id);
            setMovie(result);
        }
        fetch();

    }, [movie_id]);
   
    return ( 
        <>
            {movie ? <MovieDetails movie={movie} /> : ""}
        </>
    )
}
export default Movie;