import { useEffect } from "react";
import Navbar from "./Navbar";
import {Outlet} from "react-router-dom";
import PropTypes from "prop-types"

function Layout(props) {

    //bejelentkezés kijelentkezés navigacio megvalósítása
    const {token} = props;
    const navbarLeftSide = [];
    const navbarRightSide = [];

    navbarLeftSide.push({to: "/", text: "Rólunk"});
    if (token) {
        navbarRightSide.push({to: "/user-profile", text: "Profil"});
    } else{
        navbarRightSide.push({to: "/login", text: "Bejelentkezés"});
        navbarRightSide.push({to: "/register", text: "Regisztráció"});

    }

    return ( <>
        <Navbar leftSide={navbarLeftSide} rightSide={navbarRightSide} />
        <main className="container">
           <Outlet />
        </main>
    </> );
}

Layout.propTypes = {
    token: PropTypes.string
}
export default Layout;