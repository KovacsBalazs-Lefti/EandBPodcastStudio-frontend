import PropTypes from "prop-types";
function ServiceCard1(props) {

    const { szolgaltatas } = props;
    return (
        <div className="card-group">
            <div className="card" data-bs-theme="dark">
                <img className="card-img-top" src="/images/szolgaltatasok1.jpg" alt="Card image cap" />
                <div className="card-body text-center">
                    <h2 className="card-title">{szolgaltatas.szolgaltatasnev}</h2>
                    <br />
                    <p className="card-text">
                        <h4>A csomag tartalma</h4>
                        <ul className="list-unstyled mt-3 mb mb-4">
                            <li>{szolgaltatas.leiras}</li>
                            
                            <li style={{fontStyle:'italic', color: '#297CA4'}}>Egyedi elképzelését, ha van, kérjük jelezze felénk!</li>
                        </ul>
                    </p>
                    <div className="card-footer">
                        <h3>{szolgaltatas.ar} Ft</h3>
                        <p>+Stúdióbérlés: 8000 Ft/óra</p>
                        <a href="/create-bookings"className="btn btn-primary">Tovább a foglaláshoz</a>
                    </div>
                </div>
            </div>   
        </div>
    );
}

ServiceCard1.propTypes = {
    szolgaltatas: PropTypes.object.isRequired
}


export default ServiceCard1;