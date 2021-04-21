import React, {useEffect, useState} from "react";
import {View, Text, Button} from "react-native";
import { movieApi } from "../api";

export default () => {
const [movies, setMovies] = useState({
        nowPlaying: [],
        popular: [],
        upcoming: [],
        nowPlayingError: null,
        popularError: null,
        upcomingError: null
    });
    const getData = async() => {
        const [nowPlayingResults, nowPlayingError ] = await movieApi.nowPlaying();
        const [popular, popularError] = await movieApi.popular();
			  const [upcoming, upcomingError] = await movieApi.popular();
        setMovies({
            nowPlaying,  
            popular,
            upcoming,
            nowPlayingError, 
            upcomingError
        });
    }
    useEffect(() => {
        getData()
    },[])
    return (
        <View style={{flex:1,backgroundColor:"black"}}> 
            <Text>Movies</Text>
        </View>
     );
}