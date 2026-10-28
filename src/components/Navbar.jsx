import { Link, NavLink } from "react-router"

function Navbar(){
 return(
    <div>
        <Link to="/">Logo</Link>

        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
    </div>
 )
}

export default Navbar