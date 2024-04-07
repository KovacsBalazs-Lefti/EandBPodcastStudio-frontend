import { useRef } from "react";

function RegisterForm() {
            const apiUrl ="http://localhost:8000/api";
            const nevRef = useRef(null);
            const emailRef = useRef(null);
            const jelszoRef = useRef(null);
            const jelszo_megerositeseRef = useRef(null);
            const telefonszamRef = useRef(null);
            const szemelyiSzamRef = useRef(null);
            const szuletesi_datumRef = useRef(null);
            const cegRef = useRef(null);
            const cegnevRef = useRef(null);
            const cegTipusRef = useRef(null);
            const adoSzamRef = useRef(null);
            const bankszamlaszamRef = useRef(null);
            const orszagRef = useRef(null);
            const iranyitoszamRef = useRef(null);
            const varosRef = useRef(null);
            const utcaRef = useRef(null);
            const utcaJellegeRef = useRef(null);
            const hazszamRef = useRef(null);
            const epuletRef = useRef(null);
            const lepcsohazRef = useRef(null);
            const emeletRef = useRef(null);
            const ajtoRef = useRef(null);
           
            const handleformSubmit = async (event) =>{
                event.preventDefault();

                const newUser = {
                    nev:nevRef.current.value,
                    email:emailRef.current.value,
                    jelszo:jelszoRef.current.value,
                    jelszo_megerositese:jelszo_megerositeseRef.current.value,
                    telefonszam:telefonszamRef.current.value,
                    szemelyi_szam:szemelyiSzamRef.current.value,
                    szuletesi_datum:szuletesi_datumRef.current.value,
                    ceg:cegRef.current.checked,
                    cegnev: cegRef.current.checked ? cegnevRef.current.value : null,
                    ceg_tipus: cegRef.current.checked ? cegTipusRef.current.value : null,
                    ado_szam: cegRef.current.checked ? adoSzamRef.current.value : null,
                    bankszamlaszam: cegRef.current.checked ? bankszamlaszamRef.current.value : null,
                    orszag:orszagRef.current.value,
                    iranyitoszam:iranyitoszamRef .current.value,
                    varos:varosRef.current.value,
                    utca:utcaRef.current.value,
                    utca_jellege:utcaJellegeRef.current.value,
                    hazszam:hazszamRef.current.value,
                    epulet:epuletRef.current.value,
                    lepcsohaz:lepcsohazRef.current.value,
                    emelet:emeletRef.current.value,
                    ajto:ajtoRef.current.value,
            };
            register(newUser)
        }
        //regisztracios függvény ami felhasználói adatokat vár eredményül
        const register = async userData => {
            const url = apiUrl + "/register";
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
                alert("Sikeres regisztráció")
            }else {
                alert(data.message);
            }
        }

    return ( <form onSubmit={handleformSubmit}>
        <div>
            <label htmlFor="nev">Név</label>
            <input type="text" id="nev" placeholder="Név" ref={nevRef} />
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="email" ref={emailRef}  />
        </div>
        <div>
            <label htmlFor="jelszo">Jelszó</label>
            <input type="password" id="jelszo" placeholder="jelszo" ref={jelszoRef}  />
        </div>
        <div>
            <label htmlFor="jelszo_megerositese">Jelszó megerősítése</label>
            <input type="password" id="jelszo_megerositese" placeholder="Jelszó megerősítése" ref={jelszo_megerositeseRef}  />
        </div>
        <div>
            <label htmlFor="telefonszam">Telefonszám</label>
            <input type="text" id="telefonszam" placeholder="Telefonszám" ref={telefonszamRef}  />
        </div>
        <div>
            <label htmlFor="szemelyi_szam">Személyi szám</label>
            <input type="text" id="szemelyi_szam" placeholder="Személyi szám" ref={szemelyiSzamRef}  />
        </div>
        <div>
            <label htmlFor="szuletesi_datum">Születési dátum</label>
            <input type="date" id="szuletesi_datum" placeholder="Születési dátum" ref={szuletesi_datumRef} />
        </div>
        <div>
            <input type="checkbox" id="ceg" placeholder="Céggel regisztrálok" ref={cegRef} />    
            <label htmlFor="ceg">Céggel regisztrálok</label>
        </div>
        <div>
            <label htmlFor="cegnev">Cégnév</label>
            <input type="text" id="cegnev" placeholder="Cégnév" ref={cegnevRef} />
        </div>
        <div>
            <label htmlFor="ceg_tipus">Cég típusa</label>
            <input type="text" id="ceg_tipus" placeholder="Cég típusa" ref={cegTipusRef} />
        </div>
        <div>
            <label htmlFor="ado_szam">Adószám</label>
            <input type="text" id="ado_szam" placeholder="Adószám" ref={adoSzamRef} />
        </div>
        <div>
            <label htmlFor="bankszamlaszam">Bankszámlaszám</label>
            <input type="text" id="bankszamlaszam" placeholder="Bankszámlaszám" ref={bankszamlaszamRef} />
        </div>
        <div>
            <label htmlFor="orszag">Ország</label>
            <input type="text" id="orszag" placeholder="Ország" ref={orszagRef} />
        </div>
        <div>
            <label htmlFor="iranyitoszam">Irányítószám</label>
            <input type="text" id="iranyitoszam" placeholder="Irányítószám" ref={iranyitoszamRef} />
        </div>
        <div>
            <label htmlFor="varos">Város</label>
            <input type="text" id="varos" placeholder="Város" ref={varosRef}/>
        </div>
        <div>
            <label htmlFor="utca">Utca neve</label>
            <input type="text" id="utca" placeholder="utca" ref={utcaRef} />
        </div>
        <div>
            <label htmlFor="utca_jellege">Utca jellege</label>
            <input type="text" id="utca_jellege" placeholder="Utca jellege" ref={utcaJellegeRef} />
        </div>
        <div>
            <label htmlFor="hazszam">Házszám</label>
            <input type="text" id="hazszam" placeholder="Házszám" ref={hazszamRef} />
        </div>
        <div>
            <label htmlFor="epulet">Épület</label>
            <input type="text" id="epulet" placeholder="Épület" ref={epuletRef} />
        </div>
        <div>
            <label htmlFor="lepcsohaz">Lépcsőház</label>
            <input type="text" id="lepcsohaz" placeholder="Lépcsőház" ref={lepcsohazRef}/>
        </div>
        <div>
            <label htmlFor="emelet">Emelet</label>
            <input type="text" id="emelet" placeholder="Emelet" ref={emeletRef} />
        </div>
        <div>
            <label htmlFor="ajto">Ajtó</label>
            <input type="text" id="ajto" placeholder="Ajtó" ref={ajtoRef} />
        </div>
        
        <button type="submit">Regisztráció</button>
    </form> );
}

export default RegisterForm;