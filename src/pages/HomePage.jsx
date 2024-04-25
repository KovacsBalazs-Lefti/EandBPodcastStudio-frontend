import { useEffect } from "react";
import Services from "../components/Services";

function HomePage() {
    const apiURL = import.meta.env.VITE_BACKEND_URL + "api";

    useEffect(() => {

    }, []);

    return (<div>

        <h1 className="main-headingtitle3"> PODCAST<span className="ChangeHeadText">/STÚDIÓBÉRLÉS</span></h1>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6 text-end">
                    <p>Engedd, hogy bemutassam a Podcastudio csodálatos világát! Vadonatúj épületünkben lenyűgöző belső terek és letisztult design vár, melyeket a legkiválóbb elektronikai eszközök tesznek tökéletessé. Hangrögzítésre, élő közvetítésre és még a saját eszközeid bevonására is lehetőség van. Itt minden adott a magas minőségű podcastek létrehozásához és megosztásához!
                        Kíváncsi vagy további részletekre? Kattints most, hogy felfedezd, hogyan lehet saját podcastjeidnek otthont adni ebben a lenyűgöző stúdióban! Bérlési lehetőségeinkről és további részletekről itt olvashatsz.</p>
                </div>
                <div className="col-md-6 text-start"
                    style={{ backgroundImage: `url("/images/szolgaltatasok2.jpg")`, backgroundSize: "cover", backgroundPosition: "center", minHeight: "50vh" }}>

                </div>
            </div>
        </div>
        <h1 className="main-headingtitle3"> FOGLALÁSI<span className="ChangeHeadText">/CSOMAGOK</span></h1>
        <div className="container">
            <div className="align-items-center">
                <div className="container">
                    <h3>A stúdió leírása</h3>
                    <p>

                        A podcaststúdiónk egy ízlésesen berendezett jóhangulaú, helyszín, amely tökeletes áthangolódást biztosít mind az előadó, mind a beszélgetőpartner számára. <br />
                        A stúdió helyszínhez egy alapszolgáltatási csomag kapcsolódik, amely kiegészíthető választható extra szolgáltatásokkal.

                        A stúdió bérlése
                        8000 Ft+Áfa/óra

                        HANG- és képi RÖGZÍTÉS, két mikrofonnal, 2 db kamerával rögzítjük. A kész hang- és képanyagot vágatlanul
                        átatdjuk a megrendelőnek, az általa hozott adathordozón.


                        A szolgáltatást 2 db bp40-es podcast mikrofon valamint egy RODE Rodecaster PRO podcast keverőpult biztosítja.
                    </p>
                    <div className="col-sm-12"
                        style={{ backgroundImage: `url("/images/studiorol.jpg")`, backgroundPosition: "center", minHeight: "60vh",  backgroundRepeat: "no-repeat", }}>

                    </div>
                </div>

            </div>
            <div className="container">
                <Services />
            </div>
            <div className="col-lg-6 mx-auto" style={{ fontStyle: "italic", fontWeight: "bold" }}>
            <div>
                <p>A foglalás csak regisztrált/bejelentkezett felhasználók számára elérhető!
                    Kérjük, ha még nem regisztráltál akkor kattints a regisztrációs oldalra.

                    Ha már regisztráltál kérjük hitelesítsd a regisztrációd az postafiókban
                    megjelenő visszaigazoló linkre kattintva.

                    Jelentkezz be hozzánk és máris indíthatod a foglalást!</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <a href="/register" className="btn btn-primary">Regisztráció</a>
                    <a href="/login" className="btn btn-primary">Bejelentkezés</a>
                </div>

            </div>
        </div>
        </div>

        

    </div>);
}

export default HomePage; 