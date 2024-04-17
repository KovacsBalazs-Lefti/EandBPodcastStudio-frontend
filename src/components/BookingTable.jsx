import PropTypes from "prop-types";
function  BookingTable(props) {
    const {bookings} = props;
    return ( 
        <tr>
            <td>

            </td>
        </tr>
    );
}

BookingTable.propTypes = {
    bookings: PropTypes.object.isRequired
}
export default BookingTable ;