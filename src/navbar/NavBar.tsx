//import { Link } from 'react-router-dom';
import "../css/NavBar.css";

function NavBar(){
    return (
     <nav className="navbar">
         <div className="navbar-brand">
             {/* <Link to="/">Movie App</Link> */}
             <p>MoveApp</p>
         </div>
         <div className="navbar-links">
             {/* <Link to="/">Home</Link> */}
             {/* <Link to="/movies">Movies</Link> */}
             <p>Home</p>
             <p>Favourites</p>
         </div>
     </nav>
    );
}
export default NavBar;