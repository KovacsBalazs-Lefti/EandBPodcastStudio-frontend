import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

/**
 * Regisztrációs oldal felhasználók számára
 * @returns {JSX.element} A regisztrációs űrlapot tartalmazó JSX elem.
 */

function RegisterPage() {
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
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);
    const { register, authToken } = authContext;

    const [isCeg, setIsCeg] = useState(false);

    //bejelentkezéskor a regisztrácios oldal tiltasa
    useEffect(() => {
        if (authToken) {
            navigate("/");
        }
    }, [authToken, navigate]);

    const handleformSubmit = async (event) => {
        event.preventDefault();

        const nev = nevRef.current.value;
        const email = emailRef.current.value;
        const jelszo = jelszoRef.current.value;
        const jelszo_megerositese = jelszo_megerositeseRef.current.value;
        const telefonszam = telefonszamRef.current.value;
        const szemelyi_szam = szemelyiSzamRef.current.value;
        const szuletesi_datum = szuletesi_datumRef.current.value;
        const ceg = cegRef.current.checked;
        const cegnev = cegRef.current.checked ? cegnevRef.current.value : null;
        const ceg_tipus = cegRef.current.checked ? cegTipusRef.current.value : null;
        const ado_szam = cegRef.current.checked ? adoSzamRef.current.value : null;
        const bankszamlaszam = cegRef.current.checked ? bankszamlaszamRef.current.value : null;
        const orszag = orszagRef.current.value;
        const iranyitoszam = iranyitoszamRef.current.value;
        const varos = varosRef.current.value;
        const utca = utcaRef.current.value;
        const utca_jellege = utcaJellegeRef.current.value;
        const hazszam = hazszamRef.current.value;
        const epulet = epuletRef.current.value;
        const lepcsohaz = lepcsohazRef.current.value;
        const emelet = emeletRef.current.value;
        const ajto = ajtoRef.current.value;

        if (await register(nev, email, jelszo, jelszo_megerositese, telefonszam, szemelyi_szam, szuletesi_datum, ceg, cegnev, ceg_tipus, ado_szam, bankszamlaszam, orszag, iranyitoszam, varos, utca, utca_jellege, hazszam, epulet, lepcsohaz, emelet, ajto,)) {
            navigate("/login");
        }
    };

    return (

        <div className="container">
            <h2 className="main-headingtitle3"> PODCAST<span className="ChangeHeadText">/STÚDIÓBÉRLÉS</span></h2>

            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={handleformSubmit}>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="nev">Név</label>
                            <input className="form-control" type="text" id="nev" placeholder="Név" ref={nevRef} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="email">Email</label>
                            <input className="form-control" type="email" id="email" placeholder="email" ref={emailRef} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="jelszo">Jelszó</label>
                            <input className="form-control" type="password" id="jelszo" placeholder="jelszo" ref={jelszoRef} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="jelszo_megerositese" hidden>Jelszó megerősítése</label>
                            <input className="form-control" type="password" id="jelszo_megerositese" placeholder="Jelszó megerősítése" hidden ref={jelszo_megerositeseRef} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="telefonszam">Telefonszám</label>
                            <input className="form-control" type="text" id="telefonszam" placeholder="Telefonszám" ref={telefonszamRef} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="szemelyi_szam">Személyi szám</label>
                            <input className="form-control" type="text" id="szemelyi_szam" placeholder="Személyi szám" ref={szemelyiSzamRef} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="szuletesi_datum">Születési dátum</label>
                            <input className="form-control" type="date" id="szuletesi_datum" placeholder="Születési dátum" ref={szuletesi_datumRef} />
                        </div>
                        <div className="mb-3">
                            <input className="form-check-input" type="checkbox" id="ceg" placeholder="Céggel regisztrálok" checked={isCeg} onChange={() => setIsCeg(!isCeg)} ref={cegRef} />
                            <label className="form-check-label" htmlFor="ceg">Céggel regisztrálok</label>
                        </div>
                        {isCeg && (
                            <>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="cegnev">Cégnév</label>
                                    <input className="form-control" type="text" id="cegnev" placeholder="Cégnév" ref={cegnevRef} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="ceg_tipus">Cég típusa</label>
                                    <input className="form-control" type="text" id="ceg_tipus" placeholder="Cég típusa" ref={cegTipusRef} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="ado_szam">Adószám</label>
                                    <input className="form-control" type="text" id="ado_szam" placeholder="Adószám" ref={adoSzamRef} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="bankszamlaszam">Bankszámlaszám</label>
                                    <input className="form-control" type="text" id="bankszamlaszam" placeholder="Bankszámlaszám" ref={bankszamlaszamRef} />
                                </div>
                            </>
                        )}

                        <div className="mb-3">
                            <label className="form-label" htmlFor="orszag">Ország</label>
                            <input className="form-control" type="text" id="orszag" placeholder="Ország" ref={orszagRef} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="iranyitoszam">Irányítószám</label>
                            <input className="form-control" type="text" id="iranyitoszam" placeholder="Irányítószám" ref={iranyitoszamRef} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="varos">Város</label>
                            <input className="form-control" type="text" id="varos" placeholder="Város" ref={varosRef} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="utca">Utca neve</label>
                            <input className="form-control" type="text" id="utca" placeholder="utca" ref={utcaRef} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="utca_jellege">Utca jellege</label>
                            <input className="form-control" type="text" id="utca_jellege" placeholder="Utca jellege" ref={utcaJellegeRef} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="hazszam">Házszám</label>
                            <input className="form-control" type="text" id="hazszam" placeholder="Házszám" ref={hazszamRef} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="epulet">Épület</label>
                            <input className="form-control" type="text" id="epulet" placeholder="Épület" ref={epuletRef} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="lepcsohaz">Lépcsőház</label>
                            <input className="form-control" type="text" id="lepcsohaz" placeholder="Lépcsőház" ref={lepcsohazRef} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="emelet">Emelet</label>
                            <input className="form-control" type="text" id="emelet" placeholder="Emelet" ref={emeletRef} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="ajto">Ajtó</label>
                            <input className="form-control" type="text" id="ajto" placeholder="Ajtó" ref={ajtoRef} />
                        </div>

                        <button className="btn btn-primary" type="submit">Regisztráció</button>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default RegisterPage;