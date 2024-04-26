
import { AuthContext } from "../context/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";

function UpdateBookingPage() {
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
    //ebből kérdezem le milyen paraméterek vannak az url-be
    const params = useParams();
    const user_felhasznaloid = params.user_felhasznaloid;

    //betöltése az űrlapadoknak, amikor az id-értéke valtozik
    useEffect(() => {
        const loadBookingsData = async () => {
            const response = await fetch(apiUrl + "/foglalas/" + user_felhasznaloid, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer " + authToken
                }
            });
            if (response.status == 403) {
                navigate("/my-bookings");
            } else if (response.ok) {
                const data = await response.json();
                szolgaltatasnevRef.current.value = data.szolgaltatasnev;
                letszamRef.current.value = data.letszam;
                foglalaskezdeteRef.current.value = data.foglalaskezdete;
                foglalashosszaRef.current.value = data.foglalashossza;
                megjegyzesRef.current.value = data.megjegyzes;
            }
        }
        loadBookingsData();

    }, [user_felhasznaloid, apiUrl, authToken, navigate])

    useEffect(() => {
        if (!authToken) {
            navigate("/");
        } else {
            fetchSzolgaltatasok();
        }
    }, [authToken, navigate]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const szolgaltatasnev = szolgaltatasnevRef.current.value;
        const letszam = letszamRef.current.value;
        const foglalaskezdete = foglalaskezdeteRef.current.value;
        const foglalashossza = foglalashosszaRef.current.value;
        const megjegyzes = megjegyzesRef.current.value;
        await updateBookings(szolgaltatasnev, letszam, foglalaskezdete, foglalashossza, megjegyzes);
        fetchSzolgaltatasok(); // Frissítsd a szolgáltatásokat a foglalás létrehozása után
    };

    const handleSelectChange = (event) => {
        setSelectedService(data.szolgaltatasnev); // Állapot beállítása a meglévő szolgáltatásnévre
        letszamRef.current.value = data.letszam;
        foglalaskezdeteRef.current.value = data.foglalaskezdete;
        foglalashosszaRef.current.value = data.foglalashossza;
        megjegyzesRef.current.value = data.megjegyzes;
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
        } catch (error) {
            console.error(error);
        }
    };

    const updateBookings = async (szolgaltatasnev, letszam, foglalaskezdete, foglalashossza, megjegyzes) => {
        try {
            const url = apiUrl + "/foglalas/" + user_felhasznaloid;
            const bookingsDTO = {
                szolgaltatasnev: szolgaltatasnev,
                letszam: letszam,
                foglalaskezdete: foglalaskezdete,
                foglalashossza: foglalashossza,
                megjegyzes: megjegyzes,
            }
            const response = await fetch(url, {
                method: "PATCH",
                body: JSON.stringify(bookingsDTO),
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + authToken,
                },
            });
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message);
            } else {
                alert("Sikeres módosítás");
                navigate("/my-bookings");
            }
        } catch (error) {
            console.error(error);
            alert("Hiba történt a foglalás létrehozása során.");
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center" style={{ padding: 100 }}>
                <form onSubmit={handleSubmit}>
                <h1 className="main-headingtitle3"> FOGLALÁS<span className="ChangeHeadText">/MÓDOSÍTÁS</span></h1>
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
                        <input className="form-control" type="text" id="foglalashossza" placeholder="Foglalás hossza" ref={foglalashosszaRef} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="megjegyzes">Megjegyzés</label>
                        <textarea className="form-control" name="megjegyzes" id="megjegyzes" cols="30" rows="10" ref={megjegyzesRef}></textarea>
                    </div>
                    <div className="d-grid">
                        <button className="btn btn-outline-danger">Módosítás</button>
                    </div>
                    <br />
                    <div className="d-grid">
                        <a href="/my-bookings" className="btn btn-outline-primary">Mégse</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UpdateBookingPage;