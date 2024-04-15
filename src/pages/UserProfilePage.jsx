import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


function UserProfile() {
    const navigate = useNavigate();
    const authContext = useContext (AuthContext);
    const {user, authToken, logout, logoutEverywhere} = authContext;

    useEffect(() => {
        if (!authToken) {
          navigate("/login");
        } 
      }, [authToken, navigate]);

    return user ? ( 
        <div>
        <h2>Profil</h2>
        <h4>Bejelentkezve: {user.nev}</h4>
       <div className="d-grid gap-2">
         <button className="btn btn-primary" type="button" onClick={() => logout()}>Kijelentkezés</button>
         <button className="btn btn-primary" type="button"onClick={() => logoutEverywhere()}>Kijelentkezés mindenhonnan</button>  
       </div>
        </div> 
    ) : (
    <div>
      <h2>Adatok betöltése folyamatban...</h2>
    </div>
    );
}

export default UserProfile;