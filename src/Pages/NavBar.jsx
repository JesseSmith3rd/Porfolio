import { Link } from "react-router-dom"
import "./Style.css";



export function Navbar() {
    return (
        <div className="navbar">
            <Link to="/"><button className="navbutton" >Intro</button></Link>
            <Link to="/About"><button className="navbutton">About</button></Link>
            <Link to="/Projects"><button className="navbutton">Projects</button></Link>
        </div>
    )
}
