import { useContext, useEffect, useState,  } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { AuthContext } from "../context/AuthContext";


function UserProfile(props) {
    const {refreshToken} = props;
    const apiUrl = "http://localhost:8000/api";
    const navigate = useNavigate();
    const authContext = useContext (AuthContext);
    const {user, authToken} = authContext;
    console.log(authContext);

    useEffect(() => {
        if (authToken) {
          /* empty */
        } else {
          navigate("/login");
  
        }
      }, [authToken, navigate]);

    const logout = async () => {
        const url = apiUrl + "/logout";
        const response = await fetch(url, {
          method: "POST",
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + authToken
          }
        });
        
        if (response.ok) {
          localStorage.removeItem("token");
          refreshToken();
          navigate("/login");
        } else {
          const data = await response.json();
          alert(data.message);
        }
      };
    
      const logoutEverywhere = async () => {
        const url = apiUrl + "/logout-logoutEverywhere";
        const response = await fetch(url, {
          method: "POST",
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + authToken
          }
        })
        if (response.ok) {
          localStorage.removeItem("token");
          refreshToken();
          navigate("/login");
        } else {
          const data = await response.json();
          alert(data.message);
        }
      };


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
UserProfile.propTypes = {
  refreshToken: PropTypes.func.isRequired
}


export default UserProfile;