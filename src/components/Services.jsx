function Services() {


    return (
        <div className="card-group">
            <div className="card" data-bs-theme="dark">
                <img className="card-img-top" src="/images/szolgaltatasok1.jpg" alt="Card image cap" />
                <div className="card-body text-center">
                    <h2 className="card-title">Basic Csomag</h2>
                    <br />
                    <p className="card-text">
                        <h4>A csomag tartalma</h4>
                        <ul className="list-unstyled mt-3 mb mb-4">
                            <li>mikrofonok</li>
                            <li>2 db tablet</li>
                            <li>2 db go pro kamera</li>
                            <li>fejhallgatók</li>
                            <li>Segítség a felvétel indításához és leállításához</li>
                            <li>Alapvető hangmérnöki támogatás</li>
                            <li>Utómunka</li>
                            <li>Vágatlan anyag átadása hozott adathordozón</li>
                            <li style={{fontStyle:'italic', color: '#297CA4'}}>Egyedi elképzelését, ha van, kérjük jelezze felénk!</li>
                        </ul>
                    </p>
                    <div className="card-footer">
                        <h3>Ár: 50 000 Ft</h3>
                        <p>Stúdióbérlés: 8000 Ft/óra</p>
                        <a href="/login"className="btn btn-primary">Tovább a foglaláshoz</a>
                    </div>
                </div>
            </div>
            <div className="card" data-bs-theme="dark">
                <img className="card-img-top" src="/images/szolgaltatasok3.jpg" alt="Card image cap" />
                <div className="card-body text-center">
                    <h2 className="card-title">Basic Csomag Plusz</h2>
                    <br />
                    <p className="card-text">
                        <h4>A csomag tartalma</h4>
                        <ul className="list-unstyled mt-3 mb mb-4">
                            <li>mikrofonok</li>
                            <li>2 db go pro kamera</li>
                            <li>2 db tablet</li>
                            <li>fejhallgatók</li>
                            <li>Segítség a felvétel indításához és leállításához</li>
                            <li>Hangmérnök bérlése</li>
                            <li>Felvétel professzionális kamarákkal (2db)</li>
                            <li> Vágás,utómunka</li>
                            <li>Podcast műsor arculat tervezés</li>
                            <li>Vágatlan anyag átadása adathordozón és felhőszolgáltatáson keresztül</li>
                            <li style={{fontStyle:'italic', color: '#297CA4'}}>Egyedi elképzelését, ha van, kérjük jelezze felénk!</li>
                        </ul>
                    </p>
                    <div className="card-footer">
                        <h3>Ár: 180 000 Ft/alkalom</h3>
                        <p>Stúdióbérlés: 8000 Ft/óra</p>
                        <a href="/login" className="btn btn-primary">Tovább a foglaláshoz</a>
                    </div>
                </div>
            </div>
            <div className="card" data-bs-theme="dark">
                <img className="card-img-top img-fluid" src="/images/szolgaltatasok4.jpg" alt="Card image cap" />
                <div className="card-body text-center">
                    <h2 className="card-title">Business Csomag</h2>
                    <br />
                    <p className="card-text">
                        <h4>A csomag tartalma</h4>
                        <ul className="list-unstyled mt-3 mb mb-4">
                            <li>mikrofonok</li>
                            <li>2 db go pro kamera</li>
                            <li>2 db tablet</li>
                            <li>fejhallgatók</li>
                            <li>Segítség a felvétel indításához és leállításához</li>
                            <li>Hangmérnök bérlése</li>
                            <li>Felvétel professzionális kamarákkal (2db)</li>
                            <li>Podcast műsor arculat tervezés</li>
                            <li>Live streaming, YouTube, Facebook felületekre</li>
                            <li>Élőben vágás</li>
                            <li>Vágatlan anyag átadása adathordozón és felhőszolgáltatáson keresztül</li>
                            <li style={{fontStyle:'italic', color: '#297CA4'}}>Egyedi elképzelését, ha van, kérjük jelezze felénk!</li>
                        </ul>
                    </p>
                    <div className="card-footer">
                        <h3>Ár: 180 000 Ft/alkalom</h3>
                        <p>Stúdióbérlés: 8000 Ft/óra</p>
                        <a href="/login"className="btn btn-primary">Tovább a foglaláshoz</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;