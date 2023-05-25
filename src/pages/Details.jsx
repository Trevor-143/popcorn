import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Details() {

  const [ movieDetails, setMovieDetails ] = useState([])
  const [ companies, setCompanies ] = useState([])

  const apiKey = 'ad6fb9de597140d6888525b8855e22b1'
  const imgApi = 'https://image.tmdb.org/t/p/original'
  const params = useParams()

  useEffect(() => {
    getDetails(params.id)
  }, [params.id])
  
  const getDetails = (id) => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setMovieDetails(data)
      setCompanies(data.production_companies)
    })
  }

  return (
    <>
      <div className="hMovie">
        <img src={imgApi+movieDetails.backdrop_path} alt={movieDetails.title} />
        <div className="hMovieInfo miniInfo">
          <h3> {movieDetails.title} </h3>
          <h5> {movieDetails.tagline} </h5>
          <div className="hMovieTags">
            <div> {movieDetails.release_date} </div>
            <div> {movieDetails.vote_count} votes </div>
            <div> {movieDetails.vote_average}  </div>
            <div> {movieDetails.runtime} minutes </div>
          </div>
        </div>
      </div>
      <div className='next'>
        <div className='over'>
          <h2>Overview</h2>
          <p> {movieDetails.overview} </p>
        </div>
        <h3>$$$$$$$</h3>
        {movieDetails.budget && movieDetails.revenue ? 
          <p> {movieDetails.title} had a budget of {movieDetails.budget.toLocaleString()} USD and recieved a revenue of {movieDetails.revenue.toLocaleString()} USD. </p>
        : <p>Money Issues are complicated.</p>}
      </div>
      <div className="companies">
        <h3>Production Companies.</h3>
        <div className='compList'>
          {companies.map((item) => {
            return (
              <div className='company' key={item.id}>
                <img src={imgApi+item.logo_path} alt={item.name} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Details