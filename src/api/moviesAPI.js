import axios from 'axios';
import axiosClient from './axiosClient';

const moviesAPI = {
  getPopularMovies: (pageIndex) => {
    let url = pageIndex
      ? `/movie/popular?api_key=${
          import.meta.env.VITE_API_APIKEY
        }&language=en-US&page=${pageIndex}`
      : `/movie/popular?api_key=${
          import.meta.env.VITE_API_APIKEY
        }&language=en-US&page=1`;
    return axiosClient.get(url);
  },

  getUpComingMovies: (pageIndex) => {
    let url = pageIndex
      ? `/movie/upcoming?api_key=${
          import.meta.env.VITE_API_APIKEY
        }&language=en-US&page=${pageIndex}`
      : `/movie/upcoming?api_key=${
          import.meta.env.VITE_API_APIKEY
        }&language=en-US&page=1`;
    return axiosClient.get(url);
  },

  getTopRatedMovies: (pageIndex) => {
    let url = pageIndex
      ? `/movie/top_rated?api_key=${
          import.meta.env.VITE_API_APIKEY
        }&language=en-US&page=${pageIndex}`
      : `/movie/top_rated?api_key=${
          import.meta.env.VITE_API_APIKEY
        }&language=en-US&page=1`;
    return axiosClient.get(url);
  },

  searchContent: (content, pageIndex) => {
    if (content) {
      let url = `/search/movie?api_key=${
        import.meta.env.VITE_API_APIKEY
      }&language=en-US&page=${pageIndex}&query=${content}`;
      return axiosClient.get(url);
    }
    return null;
  },

  getInfo: (id) => {
    let url = `/movie/${id}?api_key=${
      import.meta.env.VITE_API_APIKEY
    }&language=en-US`;
    return axiosClient.get(url);
  },

  getTrailer: (id) => {
    let url = `/movie/${id}/videos?api_key=${
      import.meta.env.VITE_API_APIKEY
    }&language=en-US`;
    return axiosClient.get(url);
  },

  getSimilar: (id) => {
    let url = `/movie/${id}/similar?api_key=${
      import.meta.env.VITE_API_APIKEY
    }&language=en-US&page=1`;
    return axiosClient.get(url);
  },

  getCaster: (id) => {
    let url = `/movie/${id}/credits?api_key=${
      import.meta.env.VITE_API_APIKEY
    }&language=en-US`;
    return axiosClient.get(url);
  },
};

export default moviesAPI;
