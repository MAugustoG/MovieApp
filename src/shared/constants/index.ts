export const API_KEY: string = import.meta.env.VITE_TMDB_KEY;
export const BASE_URL: string = import.meta.env.VITE_TMDB_BASE_URL;
export const IMAGE_URL: string = import.meta.env.VITE_TMDB_IMAGE_URL;

export const MOVIE_VIDEOS_CACHE_KEY = 'MOVIE_VIDEOS';
export const MOVIE_CREDITS_CACHE_KEY = 'MOVIE_CREDITS';
export const MOVIE_DETAILS_CACHE_KEY = 'MOVIE_DETAILS';
export const MOVIE_SEARCHED_CACHE_KEY = 'MOVIE_SEARCHED';
export const TOP_RATED_MOVIES_CACHE_KEY = 'TOP_RATED_MOVIES';
export const YOUTUBE_VIDEO_BASE_URL = 'https://www.youtube.com/embed/';

// 1000 * 2 = 2 SECONDS
export const TIME_TO_PREFETCH_MOVIE = 1000 * 2;

// 1000 * 60 * 2 = 2 MINUTES
export const TIME_TO_KEEP_IN_CACHE = 1000 * 60 * 2;
