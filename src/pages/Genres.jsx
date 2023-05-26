import React, { useState, useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'

function Genres() {

  const [ genre, setGenre ] = useState([])
  const params = useParams()
  const apiKey = 'apikey'
  const imgApi = 'https://image.tmdb.org/t/p/original'


  useEffect(() => {
    getGenre(params.id)
  }, [params.id])

  const getGenre = (name) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${name}`)
    .then(resp => resp.json())
    .then(data => {
      // console.log(data.results)
      setGenre(data.results)
    })
  }
  

  return (
    <>
      <div className="gens">
        {genre.map((movie) => {
          return (
            <div key={movie.id} className="movieGenre">
              <NavLink to={'/details/'+movie.id}>
                { movie.poster_path ? (
                  <img src={imgApi + movie.poster_path} alt={movie.title} />
                ): (
                  <img src="/src/assets/defaultImg.webp" alt="default image" />
                ) }
              </NavLink>
              <div className="movieT" >
                <h3> {movie.title} </h3>
                <h4> {movie.vote_average} </h4>
              </div>
              {/* <h5> {movie.release_date} </h5> */}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Genres
