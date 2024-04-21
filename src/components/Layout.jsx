import Navbar from "./Navbar";
import { useContext } from "react";
import {Outlet} from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


function Layout() {
    const authContext = useContext(AuthContext);
    //bejelentkezés kijelentkezés navigacio megvalósítása
    const {authToken, logout} = authContext;
    const navbarLeftSide = [];
    const navbarRightSide = [];
    const navbarRightSideOthers = [];

    navbarLeftSide.push({ImgLogo: <img src="/images/logoblack.jpg" alt="Logo" style={{ height: '150px', width: 'auto', maxWidth: '100%' }} />, to: "/"});
    navbarLeftSide.push({to: "/", text: "Rólunk"});

    if (authToken) {
        navbarLeftSide.push({to: "/my-bookings", text: "Foglalásaim"});
        navbarLeftSide.push({to: "/create-bookings", text: "Új Foglalás felvétele"});
        navbarRightSide.push({to: "/user-profile", text: "Profil"});
        navbarRightSideOthers.push(
            <button className="nav-link" onClick={()=> logout()}>Kijelentkezés</button>
        );
        
        
    } else{
        navbarRightSide.push({to: "/login", text: "Bejelentkezés"});
        navbarRightSide.push({to: "/register", text: "Regisztráció"});
    }

    return ( <>
        
        <main className="container mt-2">
        <div className="Header-img">
        <Navbar leftSide={navbarLeftSide} rightSide={navbarRightSide} rightSideOthers={navbarRightSideOthers} />
        </div>
           <Outlet />
        </main>
    </> );
}


export default Layout;