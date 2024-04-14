import { Link } from "react-router-dom";
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="container-fluid">

                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb2 mb-lg-0">

                            <li className="nav-item">
                                <Link className="nav-link" to="/">Rólunk</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Regisztráció</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Bejelentkezés</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/user-profile">Profil</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </nav>);
}

export default Navbar;