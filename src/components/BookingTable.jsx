import PropTypes from "prop-types";
function BookingTable(props) {
    const { booking } = props;

    return (
                <tr>
                    <td>{booking.szolgaltatasnev}</td>
                    <td>{booking.foglalaskezdete}</td>
                    <td>{booking.foglalashossza}</td>
                    <td>{booking.megjegyzes}</td>
                    <td className="d-grid gap-2 d-md-block">
                        <button className="btn btn-primary" type="button">módosítá</button>
                        <button className="btn btn-primary" type="button">módosítá</button>
                    </td>
                </tr>
    );
}

BookingTable.propTypes = {
    booking: PropTypes.object.isRequired
}
export default BookingTable;