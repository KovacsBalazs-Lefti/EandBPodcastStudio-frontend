import { useRef } from "react";


function LoginForm() {
    const apiUrl ="http://localhost:8000/api";
    const emailRef = useRef(null);
    const jelszoRef = useRef(null);
   
   
    const handleformSubmit = async (event) =>{
        event.preventDefault();

        const user = {
            email:emailRef.current.value,
            jelszo:jelszoRef.current.value,
    };
    login(user)
}
//regisztracios függvény ami felhasználói adatokat vár eredményül
const login = async userData => {
    const url = apiUrl + "/login";
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    });
    const data = await response.json();
    console.log(data);
    if  (response.ok) {
        alert("Sikeres bejelentkezés")
    }else {
        alert(data.message);
    }

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