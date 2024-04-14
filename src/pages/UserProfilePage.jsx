import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function UserProfile() {
    const apiUrl = "http://localhost:8000/api";
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
          loadUserData();
        } else {
          navigate("/login");
          setUser(null);
        }
      }, []);

      
  const loadUserData = async () => {

    const token = localStorage.getItem("token");
    const url = apiUrl + "/user"
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Authorization": "Bearer " + token,
      },
    });
    const data = await response.json();
    if (response.ok) {
      setUser(data);
    } else {
      localStorage.removeItem("token");
      navigate("/login");
    }
  };

    const logout = async () => {

        const token = localStorage.getItem("token");
        const url = apiUrl + "/logout";
        const response = await fetch(url, {
          method: "POST",
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + token
          }
        });
        
        if (response.ok) {
          localStorage.removeItem("token");
          navigate("/login");
        } else {
          const data = await response.json();
          alert(data.message);
        }
      };
    
      const logoutEverywhere = async () => {
        
        const token = localStorage.removeItem("token");
        const url = apiUrl + "/logout-logoutEverywhere";
        const response = await fetch(url, {
          method: "POST",
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + token
          }
        })
        if (response.ok) {
          localStorage.removeItem("token");
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

export default UserProfile;