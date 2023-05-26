import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/cinema.png"
import { useState } from "react";
import styled from "styled-components";
import Types from "./Types";



const Search = () => {




    const [ text, setText ] = useState('')
    const [ menuOn, setMenuOn ] = useState(false)

    const navigate = useNavigate()

    const find = (e) => {
        e.preventDefault()
        // console.log(text)
        navigate('/results/'+text)
        
    }

    return (
        <>
            <div className="first">
                <Glogo onClick={() => setMenuOn(!menuOn)} >
                    <img src="/src/assets/menu.svg" alt="Get the genres" />
                </Glogo>
                { menuOn && 
                <Gmenu  onClick={() => setMenuOn(!menuOn)}>
                    <Types />
                </Gmenu> }
                <form onSubmit={find}>
                    <input type="text" placeholder="Find a movie..." onChange={(e) => setText(e.target.value)} />
                    <button>Search</button>
                </form>
                <div className="logo">
                    <NavLink to={'/'}> <img src={Logo} alt="Popcorn logo" /> <h3>Popcorn</h3> </NavLink>
                </div>
            </div>
        </>
    )
}

const Glogo = styled.div `
    display: none;

    @media (max-width:700px) {
        min-width: 40px;
        min-height: 40px;
        border-radius: 50%;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 1rem;
    }
    img {
        width: 20px;
    }
`
const Gmenu = styled.div `
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background: #000;

    @media (min-width:700px) {
        display: none;
    }
`


export default Search;