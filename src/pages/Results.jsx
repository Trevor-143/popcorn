import React, { useState, useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'


function Results() {

  const params = useParams()

  useEffect(() => {
    getResults(params.text)
  }, [params.text])

  const [results, setResults] = useState([])

  const apiKey = 'apikey'
  const imgApi = 'https://image.tmdb.org/t/p/original'



  const getResults = (name) => {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${name}&api_key=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      // console.log(data)
      setResults(data.results)
    })
  }

  return (
    <>
      <div className="gensR">
        {results.map((movie) => {
          return (
            <NavLink to={'/details/'+movie.id} key={movie.id} >
              <div className="movieResults">
                { movie.poster_path ? (
                  <img src={imgApi + movie.poster_path} alt={movie.title} />
                ):(
                  <img src="/src/assets/defaultImg.webp" alt="default image" />
                )}
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

export default Results
