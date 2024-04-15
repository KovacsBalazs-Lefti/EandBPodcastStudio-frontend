import { useContext, useEffect } from "react";
import Navbar from "./Navbar";
import {Outlet} from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Layout() {
    const authContext = useContext(AuthContext);
    //bejelentkezés kijelentkezés navigacio megvalósítása
    const {authToken} = authContext;
    const navbarLeftSide = [];
    const navbarRightSide = [];

    navbarLeftSide.push({to: "/", text: "Rólunk"});
    if (authToken) {
        navbarLeftSide.push({to: "/my-bookings", text: "Foglalásaim"});
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


export default Layout;