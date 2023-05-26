import { useState, useEffect } from "react";

const HomeMovie = () => {

    const apiKey = 'apiKey'
    const imgApi = 'https://image.tmdb.org/t/p/original'

    const [ homeMovie, setHomeMovie ] = useState([])

    useEffect(() => {
        getHomeMovie()
    }, [])

    const getHomeMovie = () => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data.results[0])
            setHomeMovie(data.results[13])
        })
    }
    
    return (
        <>
            <div className="hMovie">
                <img src={imgApi+homeMovie.backdrop_path} alt={homeMovie.title} />
                <div className="hMovieInfo">
                    <h3> {homeMovie.title} </h3>
                    <p> {homeMovie.overview} </p>
                    <div className="hMovieTags">
                        <div> {homeMovie.release_date} </div>
                        <div> {homeMovie.vote_count} votes </div>
                        <div> {homeMovie.vote_average}  </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default HomeMovie;
