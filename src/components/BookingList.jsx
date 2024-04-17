import propTypes from "prop-types";
import BookingTable from "./BookingTable";

function BookingList(props) {
    const { bookings } = props;

    return 
    (<div className="table">
        {bookings.map(booking => <BookingTable key={bookings.foglalasid} bookings =  {bookings}/>)};
    </div>);

}

BookingList.propTypes = {
    bookings: Proptypes.array
}

BookingList.defaultProps = {
    bookings: []
}


export default BookingList;