import { Link } from "react-router-dom";
function Navbar()
{
    return(
        <div id="header">
            <div id="siteinfo"></div>
            <div id="navbar">
            <Link className="navlink" to="/">Home </Link>
            <Link className="navlink" to="/about">About </Link>
            <Link className="navlink" to="/reg">Register </Link>        
            <Link className="navlink" to="/h1">Home </Link>        
        </div>        
        </div>
    )
}
export default Navbar;