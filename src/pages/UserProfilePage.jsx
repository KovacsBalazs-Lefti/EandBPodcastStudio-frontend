import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


function UserProfile() {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const { user, authToken, logout, logoutEverywhere } = authContext;

  useEffect(() => {
    if (!authToken) {
      navigate("/login");
    }
  }, [authToken, navigate]);

  return user ? (
    <div className="container">
      <div className="text-center">
        <h2 className="main-headingtitle3"> PROFIL<span className="ChangeHeadText">/OLDALAM</span></h2>
        <h4 style={{ color: "white", padding:"50px" }}>Bejelentkezve: {user.nev}</h4>
      </div>

      <div className="row justify-content-center">
        <div className="col-sm-12 mb-2 text-center">
          <button className="btn btn-primary" type="button" onClick={() => logout()}>Kijelentkezés</button>
        </div>
        <div className="col-sm-6 mb-2 text-center">
          <button className="btn btn-primary" type="button" onClick={() => logoutEverywhere()}>Kijelentkezés mindenhonnan</button>
        </div>

      </div>
    </div>
  ) : (
    <div>
      <h2>Adatok betöltése folyamatban...</h2>
    </div>
  );
}

export default UserProfile;