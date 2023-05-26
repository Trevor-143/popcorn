import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Upcoming = () => {

    const apiKey = 'apikey'
    const imgApi = 'https://image.tmdb.org/t/p/original'

    const [ upcoming, setUpcoming ] = useState([])

    useEffect(() => {
        getUpcoming()
    }, [])

    const getUpcoming = () => {
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setUpcoming(data.results)
        })
    }
    
    return (
        <>
            <div className="popularList">
                {upcoming.map((movie) => {
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

export default Upcoming;
