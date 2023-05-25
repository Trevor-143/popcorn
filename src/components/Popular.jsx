import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Popular = () => {

    const apiKey = 'ad6fb9de597140d6888525b8855e22b1'
    const imgApi = 'https://image.tmdb.org/t/p/original'

    const [ popular, setPopular ] = useState([])

    useEffect(() => {
        getPopular()
    }, [])

    const getPopular = () => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setPopular(data.results)
        })
    }
    
    return (
        <>
            <div className="popularList">
                {popular.map((movie) => {
                    return (
                        <NavLink to={'/details/'+movie.id}>
                            <div key={movie.id} className="movie">
                                <img src={imgApi + movie.poster_path} alt={movie.title} />
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

export default Popular;