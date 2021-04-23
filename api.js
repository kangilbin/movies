import axios from "axios";

const TMDB_KEY="154d88b6b5816f24fd5dcbb5af5916f8";

const makeRequest = (path, params) =>
axios.get(`https://api.themoviedb.org/3${path}`, {
    params: {   
        ...params,            
        api_key: TMDB_KEY
    }
});
const getAnything = async(path, params = {}) => {
    try {
        const {
            data:{results}
        } = await makeRequest(path, params);
        return [results, null]
    } catch (e) {
        return [null, e]
    }
}
export const movieApi = {
    nowPlaying: () => getAnything("/movie/now_playing"),
    popular: () => getAnything("/movie/popular"),
    upcoming: () => getAnything("/movie/upcoming",{region:"ko"}),
    search: (query) => getAnything("/search/movie",{query}),
    movie: (id) => getAnything(`/movie/${id}`),
    discover: () => getAnything("/discover/movie")
}
export const tvApi = {
    today: () => getAnything("/tv/airing_today"),
    thisWeek: () => getAnything("/tv /on_the_air"),
    topRated: () => getAnything("/tv/top_rated"),
    popular: () => getAnything("/tv/popular"),
    search: (word) => getAnything("/search/tv",{query}),
    show: (id) => getAnything(`/tv/${tv_id}`)
}

export const apiImage = (path) => `https://image.tmdb.org/t/p/w500/${path}`;