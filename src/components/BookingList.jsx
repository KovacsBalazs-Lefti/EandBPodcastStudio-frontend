import PropTypes from "prop-types";
import BookingTable from "./BookingTable";

function BookingList(props) {
    const { bookings } = props;

    return (<table className="table">
        <thead>
            <tr>
                <th scope="col">Szolgáltatás neve</th>
                <th scope="col">Szolgáltatás kezdete</th>
                <th scope="col">Foglalás hossza</th>
                <th scope="col">Megjegyzés</th>
            </tr>
        </thead>
        <tbody>
            {bookings.map(booking => <BookingTable key={booking.foglalasid} booking={booking} />)};
        </tbody>

    </table>);

}

BookingList.propTypes = {
    bookings: PropTypes.array,
}

BookingList.defaultProps = {
    bookings: []
}


export default BookingList;