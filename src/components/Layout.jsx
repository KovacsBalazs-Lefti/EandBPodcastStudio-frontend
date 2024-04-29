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

    navbarLeftSide.push({
        ImgLogo: <img src="/images/logoblack.png" alt="Logo" style={{ height: '150px', width: 'auto', maxWidth: '100%' }} />,
        to: "/", key: "Logo"
    });
    navbarLeftSide.push({ to: "/", key: "Aboutus", text: "Rólunk" });

    if (authToken) {
        navbarLeftSide.push({ to: "/my-bookings", key: "Bookings", text: "Foglalásaim" });
        navbarLeftSide.push({ to: "/create-bookings", key: "CreateBookings", text: "Új Foglalás felvétele" });
        navbarRightSide.push({ to: "/user-profile", key: "UserPofile", text: "Profil" });
        navbarRightSideOthers.push(
            <button className="nav-link" onClick={() => logout()}>Kijelentkezés</button>
        );


    } else {
        navbarRightSide.push({ to: "/login", key: "Loginto", text: "Bejelentkezés" });
        navbarRightSide.push({ to: "/register", key: "RegisterTo", text: "Regisztráció" });
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
            <footer className="container-fluid" style={{backgroundColor: "black", borderTop: "2px solid #297CA4"}}>
                <div className="row">
                    <div className="col-12 col-md-6 text-white text-lef d-flex align-items-center" style={{padding: "50px"}}>
                    <h1 className="main-headingtitle">A <span className="ChangeHeadText"> NEKED </span> SZÓLÓ <br /> ÉLMÉNY</h1>
                    </div>
                    <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                        <img src="/images/logoblack.png" alt="" className="img-fluid" style={{ maxWidth: "150px", maxHeight:"150px"}} />
                    </div>
                </div>
            </footer>
        </main>
    );
}


export default Layout;