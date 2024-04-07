function LoginForm() {
    return (  <form style={{marginTop: "5px", marginBottom: "5px"}}>
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="email" />
        </div>
        <div>
            <label htmlFor="jelszo">Jelszó</label>
            <input type="password" id="jelszo" placeholder="jelszo" />
        </div>
        <button type="submit">Bejelentkezés</button>
    </form>
);
}

export default LoginForm;