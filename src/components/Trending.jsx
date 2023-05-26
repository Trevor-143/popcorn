import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Trending = () => {

    const apiKey = 'apikey'
    const imgApi = 'https://image.tmdb.org/t/p/original'

    const [ trending, setTrending ] = useState([])

    useEffect(() => {
        getTrending()
    }, [])

    const getTrending = () => {
        fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setTrending(data.results)
        })
    }
    
    return (
        <>
            <div className="popularList">
                {trending.map((movie) => {
                    return (
                        <NavLink to={'/details/'+movie.id} key={movie.id} >
                            <div className="movie">
                                { movie.poster_path ? (
                                    <img src={imgApi + movie.poster_path} alt={movie.title} />
                                ): (
                                    <img src="/src/assets/defaultImg.webp" alt="default image" />
                                ) }
                                <div className="movieT" >
                                    <h3> {movie.title} </h3>
                                    <h4> {movie.vote_average} </h4>
                                </div>
                                {/* <h5> {movie.release_date} </h5> */}
                            </div>
                        </NavLink>
                    )
                })}
            </div>
        </>
    )

}

export default Trending;
