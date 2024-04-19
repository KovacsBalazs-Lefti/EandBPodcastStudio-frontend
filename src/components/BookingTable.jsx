import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function BookingTable(props) {
    const { booking } = props;

    return (
                <tr>
                    <td>{booking.szolgaltatasnev}</td>
                    <td>{booking.foglalaskezdete}</td>
                    <td>{booking.foglalashossza}</td>
                    <td>{booking.megjegyzes}</td>
                    <td>
                        <Link className="btn btn-outline-secondary" type="button" to={"/update-bookings/" + booking.foglalasid}>Módosítás</Link> 
                    </td>
                    <td>
                        <button className="btn btn-outline-danger" type="button">törlés</button>
                    </td>
                </tr>
    );
}

BookingTable.propTypes = {
    booking: PropTypes.object.isRequired
}
export default BookingTable;