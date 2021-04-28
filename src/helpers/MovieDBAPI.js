import axios from 'axios';

const api = {
    key: '2499b6f872b42f500d228caee6bf0727',
}

export const getMovies = async (query, page) => {
    try {
        return await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${api.key}&language=pt-BR&page=${page}`)
            .then((response) => {
                return response.data;
            })
            .catch((e) => {
                return '';
        });
    } catch (error) {
        console.log(">>>> src/helpers/MovieDBAPI.js : getMovies -> error", error)
        return '';
    }
}

export const getGenrers = async (query) => {
  try {
      return await axios.get(`https://api.themoviedb.org/3/genre/movie/list?&api_key=${api.key}&language=pt-BR`)
          .then((response) => {
              return response.data;
          })
          .catch((e) => {
              return '';
      });
  } catch (error) {
      console.log(">>>> src/helpers/MovieDBAPI.js : getGenrers -> error", error)
      return '';
  }
}

export const getMovie = async (movie_id) => {
    try {
        return await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${api.key}&language=pt-BR`)
            .then( async (response) => {
                response.data.videos = await getVideos(movie_id);
                return response.data;
            })
            .catch((e) => {
                return '';
        });
    } catch (error) {
        console.log(">>>> src/helpers/MovieDBAPI.js : getMovie -> error", error)
        return '';
    }
}

export const getVideos = async (movie_id) => {
    try {
        return await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${api.key}&language=pt-BR`)
            .then((response) => {
                return response.data.results;
            })
            .catch((e) => {
                return '';
        });
    } catch (error) {
        console.log(">>>> src/helpers/MovieDBAPI.js : getVideos -> error", error)
        return '';
    }
}