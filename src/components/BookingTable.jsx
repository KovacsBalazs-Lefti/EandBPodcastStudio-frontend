import PropTypes from "prop-types";
function BookingTable(props) {
    const { booking } = props;

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Szolgáltatás neve</th>
                    <th scope="col">Szolgáltatás kezdete</th>
                    <th scope="col">Foglalás hossza</th>
                    <th scope="col">Megjegyzés</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{booking.szolgaltatasnev}</td>
                    <td>{booking.foglalaskezdete}</td>
                    <td>{booking.foglalashossza}</td>
                    <td>{booking.megjegyzes}</td>
                </tr>
            </tbody>
        </table>
    );
}

BookingTable.propTypes = {
    booking: PropTypes.object.isRequired
}
export default BookingTable;