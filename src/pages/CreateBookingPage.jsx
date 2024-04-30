import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";

/**
 * 
 *  Oldal a foglalas létrehozásához
 * @component
 */


function CreateBookingPage() {
    const apiUrl = import.meta.env.VITE_BACKEND_URL + "api";
    const szolgaltatasnevRef = useRef(null);
    const letszamRef = useRef(null);
    const foglalaskezdeteRef = useRef(null);
    const foglalashosszaRef = useRef(null);
    const megjegyzesRef = useRef(null);
    const { authToken } = useContext(AuthContext);
    const navigate = useNavigate();
    const [szolgaltatasok, setSzolgaltatasok] = useState([]);
    const [selectedService, setSelectedService] = useState('');
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        if (authToken ===null) {
            navigate("/my-bookings");
        } else if (authToken===undefined) {
           
        }else {
            fetchSzolgaltatasok();
        }
    }, [authToken, navigate]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!selectedService) {
            alert("Válassz szolgáltatást!");
            return; // Ne folytassuk a kérést, ha nincs kiválasztva szolgáltatás
        }

        const szolgaltatasnev = selectedService;
        const letszam = letszamRef.current.value;
        const foglalaskezdete = foglalaskezdeteRef.current.value;
        const foglalashossza = foglalashosszaRef.current.value;
        const megjegyzes = megjegyzesRef.current.value;
        await createBookings(szolgaltatasnev, letszam, foglalaskezdete, foglalashossza, megjegyzes);
        fetchSzolgaltatasok(); // Frissítsd a szolgáltatásokat a foglalás létrehozása után
    };

   

    const handleSelectChange = (event) => {
        setSelectedService(event.target.value);
    };

    const fetchSzolgaltatasok = async () => {
        try {
            const response = await fetch(apiUrl + "/szolgaltatasok", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + authToken,
                },
            });
            if (response.ok) {
                const data = await response.json();
                setSzolgaltatasok(data);
            } else {
                throw new Error("Nem sikerült betölteni a szolgáltatásokat!");
            }
        } catch(error){
            console.error(error);
            alert("Válassz szolgáltatást!");
        }
    };

    const createBookings = async (szolgaltatasnev, letszam, foglalaskezdete, foglalashossza, megjegyzes) => {
        try {
            const response = await fetch(apiUrl + "/foglalas", {
                method: "POST",
                body: JSON.stringify({
                    szolgaltatasnev,
                    letszam,
                    foglalaskezdete,
                    foglalashossza,
                    megjegyzes,
                }),
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + authToken,
                },
            });
            if (!response.ok) {
                const data = await response.json();
                setErrorMessage(data.message);
                throw new Error(data.message);
            } else {
                alert("Sikeres felvétel");
                clearForm();
                navigate("/my-bookings");
            }
        } catch (error) {
            console.error(error);
            alert("Hiba történt: " + error.message);
        }
    };

    const clearForm = () => {
        szolgaltatasnevRef.current.value = "";
        letszamRef.current.value = "";
        foglalaskezdeteRef.current.value = "";
        foglalashosszaRef.current.value = "";
        megjegyzesRef.current.value = "";
    };

    return (
        <div className="container">
            <h2 className="main-headingtitle3"> ÚJ FOGLALÁS<span className="ChangeHeadText">/FELVÉTELE</span></h2>
            <div className="row justify-content-center" style={{ padding: 100 }}>
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="szolgaltatasnev">Szolgáltatás neve</label>
                            <select className="form-control" id="szolgaltatasnev" ref={szolgaltatasnevRef} onChange={handleSelectChange}>
                                <option value="">Válassz...</option>
                                {szolgaltatasok.map(szolgaltatas => (
                                    <option key={szolgaltatas.szolgaltatasid} value={szolgaltatas.szolgaltatasnev}>{szolgaltatas.szolgaltatasnev}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="letszam">Létszám</label>
                            <input className="form-control" type="number" id="letszam" placeholder="Adja meg hány fő érkezik" ref={letszamRef} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="foglalaskezdete">Foglalás kezdete</label>
                            <input className="form-control" type="datetime-local" id="foglalaskezdete" placeholder="Foglalás kezdete" ref={foglalaskezdeteRef} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="foglalashossza">Foglalás hossza</label>
                            <input className="form-control" type="number" id="foglalashossza" placeholder="Foglalás hossza" ref={foglalashosszaRef} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="megjegyzes">Megjegyzés</label>
                            <textarea className="form-control" name="megjegyzes" id="megjegyzes" cols="30" rows="10" ref={megjegyzesRef}></textarea>
                        </div>
                        <div className="d-grid">
                            <button className="btn btn-primary">Felvétel</button>
                        </div>
                    </form>
                    <br />
                    <div className="text-center">
                        <a href="/" style={{color: "white"}}>vissza</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateBookingPage;