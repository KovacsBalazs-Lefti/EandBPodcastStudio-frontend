import PropTypes from "prop-types";
function BookingTable(props) {
    const { booking } = props;

    return (
                <tr>
                    <td>{booking.szolgaltatasnev}</td>
                    <td>{booking.foglalaskezdete}</td>
                    <td>{booking.foglalashossza}</td>
                    <td>{booking.megjegyzes}</td>
                </tr>
    );
}

BookingTable.propTypes = {
    booking: PropTypes.object.isRequired
}
export default BookingTable;