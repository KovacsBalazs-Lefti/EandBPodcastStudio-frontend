import Navbar from "./Navbar";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


function Layout() {
    const authContext = useContext(AuthContext);
    //bejelentkezés kijelentkezés navigacio megvalósítása
    const { authToken, logout } = authContext;
    const navbarLeftSide = [];
    const navbarRightSide = [];
    const navbarRightSideOthers = [];

    navbarLeftSide.push({ ImgLogo: <img src="/images/logoblack.png" alt="Logo"  style={{ height: '150px', width: 'auto', maxWidth: '100%' }} />,
     to: "/", key:"Logo" });
    navbarLeftSide.push({ to: "/", key: "Aboutus", text: "Rólunk" });

    if (authToken) {
        navbarLeftSide.push({ to: "/my-bookings", text: "Foglalásaim" });
        navbarLeftSide.push({ to: "/create-bookings", text: "Új Foglalás felvétele" });
        navbarRightSide.push({ to: "/user-profile", text: "Profil" });
        navbarRightSideOthers.push(
            <button className="nav-link" onClick={() => logout()}>Kijelentkezés</button>
        );


    } else {
        navbarRightSide.push({ to: "/login", text: "Bejelentkezés" });
        navbarRightSide.push({ to: "/register", text: "Regisztráció" });
    }

    return (

        <main className="container-fluid main">
            <div className="Header-img">
                <Navbar leftSide={navbarLeftSide} rightSide={navbarRightSide} rightSideOthers={navbarRightSideOthers} />
                <div>
                    <h1 className="main-headingtitle">A <span className="ChangeHeadText"> NEKED </span> SZÓLÓ <br /> ÉLMÉNY</h1>
                    <h2 className="main-headingtitle2"> PODCAST<span className="ChangeHeadText">/STÚDIÓBÉRLÉS</span></h2>
                    <h2 className="main-headingtitle2">TEL: 06 30 337 9962</h2>
                </div>
            </div>
            <Outlet />
        </main>
    );
}


export default Layout;