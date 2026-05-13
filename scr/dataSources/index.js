import axios from 'axios';

let config = {
  method: 'get',
  url: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Njg3YjIwZmI1MjFlNGY0YmM5NmQ1Y2QwYzRlY2RhNyIsIm5iZiI6MTY2MzA3ODExMS4zNzEsInN1YiI6IjYzMjA4ZWRmN2ZjYWIzMDA4MmVkYzExNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fimjoMcsUU2_-J7-GgglfqZ5Bq_TC1c1aS7bNAaY1Cg',
    accept: 'application/json',
  },
};

let configPopular = {
  method: 'get',
  url: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Njg3YjIwZmI1MjFlNGY0YmM5NmQ1Y2QwYzRlY2RhNyIsIm5iZiI6MTY2MzA3ODExMS4zNzEsInN1YiI6IjYzMjA4ZWRmN2ZjYWIzMDA4MmVkYzExNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fimjoMcsUU2_-J7-GgglfqZ5Bq_TC1c1aS7bNAaY1Cg',
    accept: 'application/json',
  },
};

const getNowPlaying = async () => {
  try {
    const response = await axios.request(config);
    console.log('response', response);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch now playing movies: ' + error.message);
  }
};

const getPopularMovies = async () => {
  try {
    const response = await axios.request(configPopular);
    console.log('response', response);
    return response.data;
  } catch (error) {
    throw new Error('Failed to get popular movies: ' + error.message);
  }
};

const tmdbDataSource = {
  getNowPlaying,
  getPopularMovies,
};

export default tmdbDataSource;
