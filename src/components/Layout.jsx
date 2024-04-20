import Navbar from "./Navbar";
import Header from "./Header";
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
        <Navbar leftSide={navbarLeftSide} rightSide={navbarRightSide} rightSideOthers={navbarRightSideOthers} />
        <Header />
        <main className="container mt-2">
            
           <Outlet />
        </main>
    </> );
}


export default Layout;