import PropTypes from "prop-types";
import BookingTable from "./BookingTable";

function BookingList(props) {
    const { bookings } = props;

    return (<div className="container">
        {bookings.map(booking => <BookingTable key={booking.foglalasid} booking={booking} />)};
    </div>);

}

BookingList.propTypes = {
    bookings: PropTypes.array,
}

BookingList.defaultProps = {
    bookings: []
}


export default BookingList;