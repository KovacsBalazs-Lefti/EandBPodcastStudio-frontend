import { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

/**
 * Bejelentkezési oldal a stúdió bérléshez
 * 
 */


function LoginPage() {
  const emailRef = useRef(null);
  const jelszoRef = useRef(null);
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const { login, authToken } = authContext;


  const handleformSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const jelszo = jelszoRef.current.value;
    login(email, jelszo);
  };
  useEffect(() => {
    if (authToken) {
      navigate("/user-profile")
    }
  }, [authToken, navigate]);

  return (
    <div className="container">
      <h2 className="main-headingtitle3"> BEJELENTKEZÉS<span className="ChangeHeadText">/STÚDIÓBÉRLÉSRE</span></h2>
      <div className="row justify-content-center" style={{padding:100}}>
        <div className="col-md-6">
          <form onSubmit={handleformSubmit}>
            <div className="mb-3">
              <label className="form-label" htmlFor="loginemail">Email</label>
              <input className="form-control" type="email" id="loginemail" placeholder="email" ref={emailRef} />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="loginjelszo">Jelszó</label>
              <input className="form-control" type="password" id="loginjelszo" placeholder="jelszo" ref={jelszoRef} />
            </div >     
            <div style={{textAlign:"center", padding:"5px"}}>
            <button className="btn btn-primary" type="submit">Bejelentkezés</button>
            </div>
            <div style={{textAlign:"center"}}>
            <p>Ha még nem reigsztráltál, megteheted <a href="/register">itt</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
  
};

export default LoginPage;