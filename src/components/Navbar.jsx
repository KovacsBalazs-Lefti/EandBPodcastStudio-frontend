import {Link} from "react-router-dom";
function Navbar() {
    return (  
    <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
            <div className="collapse navbar-collapse">
                <ul>
                    <li>
                        <Link to="/">Rólunk</Link>
                    </li>
                
                    <li>
                        <Link to="/register">Regisztráció</Link>
                    </li>
                    <li>
                        <Link to="/login">Bejelentkezés</Link>
                    </li>
                    <li>
                        <Link to="/user-profile">Profil</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>);
}

export default Navbar;