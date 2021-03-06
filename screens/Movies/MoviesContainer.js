import React, {useEffect, useState} from "react";
import MoviesPresenter from "./MoviesPresenter";
import { movieApi } from "../../api";

export default () => {
const [movies, setMovies] = useState({
        loading: true,
        nowPlaying: [],
        popular: [],
        upcoming: [],
        nowPlayingError: null,
        popularError: null,
        upcomingError: null
    });
    const getData = async() => {
        const [nowPlaying, nowPlayingError ] = await movieApi.nowPlaying();
        const [popular, popularError] = await movieApi.popular();
		const [upcoming, upcomingError] = await movieApi.upcoming();
        setMovies({
            loading:false,
            nowPlaying,  
            popular,
            upcoming,
            nowPlayingError, 
            popularError,
            upcomingError
        });
    };
    useEffect(() => {
        getData();
    },[]);
    return <MoviesPresenter {...movies} />;
};