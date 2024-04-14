import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";


function LoginPage(props) {
    const {refreshToken} = props;
    const apiUrl = "http://localhost:8000/api";
    const emailRef = useRef(null);
    const jelszoRef = useRef(null);
    const navigate = useNavigate();


    const login = async FormData => {
        const url = apiUrl + "/login";
        const response = await fetch(url, {
          method: "POST",
          body: JSON.stringify(FormData),
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          }
        });
        const data = await response.json();
        console.log(data);
        if (response.ok) {
          localStorage.setItem("token", data.token);
          refreshToken();
          navigate("/user-profile");
          alert("Sikeres bejelentkezés")
        } else {
          alert(data.message);
        }
    
      };
   
   
    const handleformSubmit = async (event) =>{
        event.preventDefault();

        const user = {
            email:emailRef.current.value,
            jelszo:jelszoRef.current.value,
    };
    login(user)
}


    return (  <form style={{marginTop: "5px", marginBottom: "5px"}} onSubmit={handleformSubmit}>
        <h2>Bejelentkezés</h2>
        <div className="mb-3">
            <label className="form-label" htmlFor="loginemail">Email</label>
            <input className="form-control" type="email" id="loginemail" placeholder="email" ref={emailRef} />
        </div>
        <div className="mb-3">
            <label className="form-label" htmlFor="loginjelszo">Jelszó</label>
            <input className="form-control" type="password" id="loginjelszo" placeholder="jelszo" ref={jelszoRef}/>
        </div>
        <button className="btn btn-primary" type="submit">Bejelentkezés</button>
    </form>);
}
LoginPage.propTypes = {
  refreshToken: PropTypes.func.isRequired
}

export default LoginPage;