import PropTypes from "prop-types";
import BookingTable from "./BookingTable";

function BookingList(props) {
    const { bookings, mybookings} = props;

    return (<table className="table table-dark">
        <thead>
            <tr>
                <th scope="col">Szolgáltatás neve</th>
                <th scope="col">Szolgáltatás kezdete</th>
                <th scope="col">Foglalás hossza</th>
                <th scope="col">Megjegyzés</th>
            </tr>
        </thead>
        <tbody>
            {bookings.map(booking => (
                mybookings ?
            <BookingTable 
            key={booking.foglalasid} 
            booking={booking} />
            :
            <BookingTable 
            key={booking.foglalasid} 
            booking={booking} />
            ))};
        </tbody>

    </table>);

}

BookingList.propTypes = {
    bookings: PropTypes.array,
    mybookings: PropTypes.bool
}

BookingList.defaultProps = {
    bookings: [],
    mybookings: false
}


export default BookingList;