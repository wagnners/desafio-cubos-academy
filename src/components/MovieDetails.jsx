import React from 'react';
import movie_img from '../assets/img/movie.png';

const MovieDetails = ({movie}) => {

    return (
        <>
            <div className="movie movie-content">
                {/* <div className="img-movie" style={{"backgroundImage": `url('https://image.tmdb.org/t/p/w500${movie.poster_path}')`}}></div> */}
                <div className="movie-details">
                    <div className="movie-content-header">
                        <h2>{movie.title}</h2>
                        <h4>{new Date(movie.release_date).toLocaleDateString()}</h4>
                    </div>
                    <div className="movie-content-body">
                        <div className="img-movie">
                            {movie.poster_path  ? <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}></img>
                                                : <div className="none-image"><img src={movie_img} alt={movie.title}></img></div>}
                        </div>
                        <div className="movie-details">
                            <h3>Sinopse</h3>
                            <p>{movie.overview}</p>
                            <h3>Informações</h3>
                            <div className="info">
                                <div>
                                    <h4>Situação</h4>
                                    <p>{movie.status}</p>
                                </div>
                                <div>
                                    <h4>Idioma</h4>
                                    <p>{movie.spoken_languages && movie.spoken_languages.length ? movie.spoken_languages[0].name : ""}</p>
                                </div>
                                <div>
                                    <h4>Orçamento</h4>
                                    <p>$ {movie.budget}</p>
                                </div>
                                <div>
                                    <h4>Receita</h4>
                                    <p>$ {movie.revenue}</p>
                                </div>
                                <div>
                                    <h4>Lucro</h4>
                                    <p>$ {movie.revenue - movie.budget}</p>
                                </div>
                            </div>
                            <div className="movie-content-footer">
                                {movie.genres && movie.genres.length > 0 && movie.genres.map((genre) => (  
                                    <span className="genres" key={genre.id}>{genre.name}</span>
                                ))}
                                <div className="movie-score"><span>{movie.vote_average}</span></div>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
            {movie.videos && movie.videos.length > 0 ?
                <iframe width="100%" height="500" src={`https://www.youtube.com/embed/${movie.videos[0].key}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            : ""}
        </>
    );
};

export default MovieDetails;