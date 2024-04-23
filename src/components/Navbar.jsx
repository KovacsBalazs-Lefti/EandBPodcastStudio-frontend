import { Link } from "react-router-dom";
import PropTypes from "prop-types";


function Navbar(props) {
    const { leftSide, rightSide, rightSideOthers } = props;
    return (
        <div className="container-fluid navbar-container">
            <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
                <div className="container-fluid"style={{ padding: "10px"}}>
                    <button
                        className="navbar-toggler"style={{ padding: "10px"}}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        >
                        <span className="navbar-toggler-icon " ></span>
                    </button>
                    <ul className="navbar-nav me-auto mb2 mb-lg-0">
                            {leftSide.map((navItem) => (<li key={navItem.key} className="nav-item">
                                <Link className="nav-link" to={navItem.to}>
                                    {navItem.ImgLogo}
                                </Link>
                            </li>
                            ))}
                        </ul>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ padding: "10px"}} >

                        <ul className="navbar-nav me-auto mb2 mb-lg-0">
                            {leftSide.map((navItem) => (<li key={navItem.key} className="nav-item">
                                <Link className="nav-link" to={navItem.to}>
                                    {navItem.text}
                                </Link>
                            </li>))}
                        </ul>
                       
                        <ul className="navbar-nav">
                            {rightSide.map((navItem) => (<li key={navItem.to} className="nav-item">
                                <Link className="nav-link" to={navItem.to}>
                                    {navItem.text}
                                </Link>
                            </li>))}
                            {
                                rightSideOthers.map(item => (
                                    <li
                                        key={item} className="nav-item">
                                        {item}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
Navbar.propTypes = {
    leftSide: PropTypes.array.isRequired,
    rightSide: PropTypes.array.isRequired,
    rightSideOthers: PropTypes.array,
}
Navbar.DefaultProps = {
    rightSideOthers: []
}

export default Navbar;