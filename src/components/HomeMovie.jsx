import { useState, useEffect } from "react";

const HomeMovie = () => {

    const apiKey = 'ad6fb9de597140d6888525b8855e22b1'
    const imgApi = 'https://image.tmdb.org/t/p/original'

    const [ homeMovie, setHomeMovie ] = useState([])

    useEffect(() => {
        getHomeMovie()
    }, [])

    const getHomeMovie = () => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.results[3])
            setHomeMovie(data.results[3])
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