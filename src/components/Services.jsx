function Services() {
    return (
        <div className="card-group">
            <div className="card" data-bs-theme="dark" style={{ width: '18rem' }}>
                <img className="card-img-top img-fluid" src="/images/szolgaltatasok1.jpg" alt="Card image cap" />
                <div className="card-body text-center">
                    <h2 className="card-title">Basic Csomag</h2>
                    <br />
                    <p className="card-text" style={{ whiteSpace: 'pre-wrap', textAlign: 'left' }}>Alapfelszerelés: mikrofonok, fejhallgatók stb.
                        Segítség a felvétel indításához és leállításához
                        Alapvető hangmérnöki támogatás
                        Vágatlan anyag átadása adathordozón és felhőszolgáltatáson
                    </p>
                    <h3>Ár: 18 000 Ft/óra</h3>
                    <a href="#" className="btn btn-primary">Tovább a foglaláshoz</a>
                </div>
            </div>
            <div className="card" data-bs-theme="dark" style={{ width: '18rem' }}>
                <img className="card-img-top img-fluid" src="/images/szolgaltatasok1.jpg" alt="Card image cap" />
                <div className="card-body text-center">
                    <h2 className="card-title">Basic Csomag Plusz</h2>
                    <br />
                    <p className="card-text" style={{ whiteSpace: 'pre-wrap', textAlign: 'left' }}>Alapfelszerelés: mikrofonok, fejhallgatók stb.
                        Segítség a felvétel indításához és leállításához
                        Alapvető hangmérnöki támogatás
                    </p>
                    <h3>Ár: 12 000 Ft/óra</h3>
                    <a href="#" className="btn btn-primary">Tovább a foglaláshoz</a>
                </div>
            </div>
            <div className="card" data-bs-theme="dark" style={{ width: '18rem' }}>
                <img className="card-img-top img-fluid" src="/images/szolgaltatasok1.jpg" alt="Card image cap" />
                <div className="card-body text-center">
                    <h2 className="card-title">Business Csomag</h2>
                    <br />
                    <p className="card-text" style={{ whiteSpace: 'pre-wrap', textAlign: 'left' }}>Egyéni hangmérnök és producerek rendelkezésre állása
                        Testreszabott podcast tervezés és tartalomfejlesztés
                        Kiterjesztett utómunka szolgáltatások: zenei betétek, hanghatások, grafikai dizájn stb.
                        Felhőalapú anyag tárolás és letöltés
                        Vágás és utómunka
                        Social media megjelenési opciók
                        Arculattervezés
                    </p>
                    <h3>Ár: 12 000 Ft/óra</h3>
                    <a href="#" className="btn btn-primary">Tovább a foglaláshoz</a>
                </div>
            </div>
        </div>
    );
}

export default Services;