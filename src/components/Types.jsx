import { NavLink } from 'react-router-dom'
import { MdHome } from 'react-icons/md'


const Types = () => {
    return (
        <>
            <div className="genres">
                <NavLink to={'/'}> <MdHome /> </NavLink>
                <h2>Genres</h2>
                <h4>Interesting</h4>
                <NavLink to={'/genre/'+28} className="genreIcon" > Action</NavLink>
                <NavLink to={'/genre/'+12} className="genreIcon" > Adventure</NavLink>
                <NavLink to={'/genre/'+16} className="genreIcon" > Animation</NavLink>
                <NavLink to={'/genre/'+35} className="genreIcon" > Comedy</NavLink>
                <NavLink to={'/genre/'+80} className="genreIcon" > Crime</NavLink>
                <h4>Intriguing</h4>
                <NavLink to={'/genre/'+99} className="genreIcon" > Documentary</NavLink>
                <NavLink to={'/genre/'+18} className="genreIcon" > Drama</NavLink>
                <NavLink to={'/genre/'+10751} className="genreIcon" > Family</NavLink>
                <NavLink to={'/genre/'+14} className="genreIcon" > Fantasy</NavLink>
                <NavLink to={'/genre/'+36} className="genreIcon" > History</NavLink>
                <NavLink to={'/genre/'+27} className="genreIcon" > Horror</NavLink>
                <h4>Inspiring</h4>
                <NavLink to={'/genre/'+10402} className="genreIcon" > Music</NavLink>
                <NavLink to={'/genre/'+9648} className="genreIcon" > Mystery</NavLink>
                <NavLink to={'/genre/'+10749} className="genreIcon" > Romance</NavLink>
                <NavLink to={'/genre/'+878} className="genreIcon" > Science Fiction</NavLink>
                <NavLink to={'/genre/'+10770} className="genreIcon" > TV Movie</NavLink>
                <NavLink to={'/genre/'+53} className="genreIcon" > Thriller</NavLink>
                <NavLink to={'/genre/'+10752} className="genreIcon" > War</NavLink>
                <NavLink to={'/genre/'+37} className="genreIcon" > Western</NavLink>
            </div>
        </>
    )
}

export default Types;