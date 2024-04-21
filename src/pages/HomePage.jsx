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
                    <h3>Engedd, hogy bemutassam a Podcastudio csodálatos világát! Vadonatúj épületünkben lenyűgöző belső terek és letisztult design vár, melyeket a legkiválóbb elektronikai eszközök tesznek tökéletessé. Hangrögzítésre, élő közvetítésre és még a saját eszközeid bevonására is lehetőség van. Itt minden adott a magas minőségű podcastek létrehozásához és megosztásához!
                        Kíváncsi vagy további részletekre? Kattints most, hogy felfedezd, hogyan lehet saját podcastjeidnek otthont adni ebben a lenyűgöző stúdióban! Bérlési lehetőségeinkről és további részletekről itt olvashatsz.</h3>
                </div>
                <div className="col-md-6 text-start"
                    style={{ backgroundImage: `url("/images/szolgaltatasok2.jpg")`, backgroundSize: "cover", backgroundPosition: "center", minHeight: "50vh" }}>

                </div>
            </div>
        </div>
        <div className="container">
            <Services />
        </div>

    </div>);
}

export default HomePage; 