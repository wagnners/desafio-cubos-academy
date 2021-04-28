import React, {useState} from 'react'
import SearchInput from '../../components/SearchInput';
import { getMovies, getGenrers } from '../../helpers/MovieDBAPI';
import MoviesList from '../../components/MoviesList';
import Pagination from '../../components/Pagination';

const Home = ({history}) => {

  const [state, setState] = useState({
    search: "",
    page: null,
    results: null,
    genres: null,
    movies: null
  });

  const handleChangeInput = (values) => {

    const name  = values.target.name;
    const value = values.target.value;

    setState({
      ...state,
      [name]:value
    });

  }
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      fetchMovies();
    }
  }

  async function fetchMovies(page = 1) {
    
    const results = await getMovies(state.search, page);
    const genres  = await getGenrers();
    
    setState({
      ...state,
      page,
      results,
      genres : genres.genres,
      movies: results.results
    });
  }

  const handleGoToPage = (movie_id) => {
    history.push({
      pathname: '/movie',
      search: '?id='+movie_id,
    });
  }

  const handleBtnPagination = (e) => {
    fetchMovies(e.target.getAttribute("data-index"))
  }


  return ( 
    <>
      <SearchInput state={state} name="search" handleChangeInput={handleChangeInput} handleKeyDown={handleKeyDown} />
      {state.movies && state.genres ? 
        <>
          <MoviesList movies={state.movies} genres={state.genres} handleGoToPage={handleGoToPage} />
          <Pagination page={state.page} total_pages={state.results.total_pages} handleBtnPagination={handleBtnPagination} />
        </> : ""}
    </>
  )
}
export default Home;