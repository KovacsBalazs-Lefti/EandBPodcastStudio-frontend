import { useRef } from "react";
import propTypes from "prop-types";


function LoginForm(props) {
    const { onSubmit } = props;
    const emailRef = useRef(null);
    const jelszoRef = useRef(null);
   
   
    const handleformSubmit = async (event) =>{
        event.preventDefault();

        const user = {
            email:emailRef.current.value,
            jelszo:jelszoRef.current.value,
    };
    onSubmit(user)
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

LoginForm.propTypes = {
    onSubmit: propTypes.func.isRequired

}

export default LoginForm;