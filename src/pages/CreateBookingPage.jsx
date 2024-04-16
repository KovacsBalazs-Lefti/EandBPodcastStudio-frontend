import { useRef } from "react";

function CreateBookingPage() {
    const apiUrl = "http://localhost:8000/"
    const szolgaltatasnevRef = useRef(null);
    const letszamRef = useRef(null);
    const foglalaskezdeteRef = useRef(null);
    const foglalashosszaRef = useRef(null);
    const megjegyzesRef = useRef(null);


    const handleSubmit = event => {
        event.preventDefault();
        const szolgaltatasnev = szolgaltatasnevRef.current.value;
        const letszam = letszamRef.current.value;
        const foglalaskezdete = letszamRef.current.value;
        const foglalashossza = foglalashosszaRef.current.value;
        const megjegyzes = megjegyzesRef.current.value;
        createBookings(szolgaltatasnev, letszam, foglalaskezdete, foglalashossza, megjegyzes)

    }

    //függvény a küldésre
    const createBookings = async (szolgaltatasnev, letszam, foglalaskezdete, foglalashossza, megjegyzes) => {
        const url = apiUrl + "/foglalas";
        const bookingDTO = {
            szolgaltatasnev: szolgaltatasnev,
            letszam: letszam,
            foglalaskezdete: foglalaskezdete,
            foglalashossza: foglalashossza,
            megjegyzes: megjegyzes,
        }
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(bookingDTO),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        });
        if (response.ok) {
            alert("Sikeres felvétel")
        } else {
            const data = await response.json();
            console.error(data);
            alert(data.message);

        }
    }
    //adatok kiürítése
    const clearForm = () => {
        szolgaltatasnevRef.current.value = "";
        letszamRef.current.value = "";
        letszamRef.current.value = "";
        foglalashosszaRef.current.value = "";
        megjegyzesRef.current.value = "";
    }

    return (<form on onSubmit={handleSubmit}>
        <h2>Új Foglalás felvétele</h2>
        <div className="mb-3">
            <label htmlFor=""></label>
        </div>
        <div className="mb-3">
            <label className="form-label" htmlFor="szolgaltatasnev">Szolgáltatás neve</label>
            <input className="form-control" type="text" id="szolgaltatasnev" placeholder="Szolgáltatás neve" ref={szolgaltatasnevRef} />
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
            <label htmlFor="megjegyzés">Megjegyzés</label>
            <textarea className="form-control" name="megjegyzes" id="megjegyzes" cols="30" rows="10" ref={megjegyzesRef}></textarea>
        </div>

        <div className="d-grid">
            <button className="btn btn-primary">Kijelentkezés</button>
        </div>

    </form>);
}

export default CreateBookingPage;