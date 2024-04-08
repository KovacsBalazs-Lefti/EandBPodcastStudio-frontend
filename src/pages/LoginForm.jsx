import { useRef } from "react";


function LoginForm() {
    const apiUrl = "http://localhost:8000/api";
    const emailRef = useRef(null);
    const jelszoRef = useRef(null);


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
        <div>
            <label htmlFor="loginemail">Email</label>
            <input type="email" id="loginemail" placeholder="email" ref={emailRef} />
        </div>
        <div>
            <label htmlFor="loginjelszo">Jelszó</label>
            <input type="password" id="loginjelszo" placeholder="jelszo" ref={jelszoRef}/>
        </div>
        <button type="submit">Bejelentkezés</button>
    </form>);
}

export default LoginForm;