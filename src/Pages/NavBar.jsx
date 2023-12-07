import { Link } from "react-router-dom"


export function Navbar() {
    return(
        <>
    <Link to="/"><button >Intro</button></Link>
    <Link to="/About"><button>About</button></Link>
    <Link to="/Projects"><button>Projects</button></Link>
        </>
    )
}
