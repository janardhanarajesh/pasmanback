import { Link } from "react-router-dom";

function Menu()
{
    return(
        <div id="mainmenu">
            <center>
        <div id="submenu">
    <div className="submenu">
            <Link to="/">HOME</Link>
            </div>
            <div className="submenu">
            <Link to="/signup">Sign UP</Link>
            </div>
            </div>
</center>
        </div>
        
    )
}
export default Menu