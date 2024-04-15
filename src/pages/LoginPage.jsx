import {useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


function LoginPage() {
  const emailRef = useRef(null);
  const jelszoRef = useRef(null);
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const { login, authToken} = authContext;


  const handleformSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const jelszo = jelszoRef.current.value;
    login(email, jelszo);
  };
  useEffect(() => {
    if (authToken){
      navigate("/user-profile")
    }
  }, [authToken,navigate]);

  return (<form style={{ marginTop: "5px", marginBottom: "5px" }} onSubmit={handleformSubmit}>
    <h2>Bejelentkezés</h2>
    <div className="mb-3">
      <label className="form-label" htmlFor="loginemail">Email</label>
      <input className="form-control" type="email" id="loginemail" placeholder="email" ref={emailRef} />
    </div>
    <div className="mb-3">
      <label className="form-label" htmlFor="loginjelszo">Jelszó</label>
      <input className="form-control" type="password" id="loginjelszo" placeholder="jelszo" ref={jelszoRef} />
    </div>
    <button className="btn btn-primary" type="submit">Bejelentkezés</button>
  </form>);
};

export default LoginPage;