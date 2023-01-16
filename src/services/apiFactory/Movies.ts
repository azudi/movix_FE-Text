import { BASE_URL, server } from "utils/axios-utils";
import { appendQueryParams } from "utils/queryParams";

export const movies = {
  $_movie: {
    getHeaderMovies: () => {
      return server.get(`${BASE_URL}/trending/all/day${appendQueryParams()}`);
    },
    getTopRatedMovies: () => {
        return server.get(`${BASE_URL}/movie/top_rated${appendQueryParams()}`);
      },
    getNewArrival: () => {
        return server.get(`${BASE_URL}/movie/popular${appendQueryParams()}`);
      },
    getExclusiveVideos: () => {
        return server.get(`${BASE_URL}/movie/upcoming${appendQueryParams()}`);
      },
    getFeaturedCast: () => {
        return server.get(`${BASE_URL}/person/popular${appendQueryParams()}`);
      },
     
  },
};
