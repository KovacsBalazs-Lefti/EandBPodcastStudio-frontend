import PropTypes from "prop-types";
import BookingTable from "./BookingTable";

function BookingList(props) {
    const { bookings, mybookings } = props;

    return (<table className="table-responsive table-dark">
        <thead>
            <tr>
                <th scope="col">Szolgáltatás neve</th>
                <th scope="col">Szolgáltatás kezdete</th>
                <th scope="col">Foglalás hossza</th>
                <th scope="col">Megjegyzés</th>
                <th scope="col">Módosítás</th>
                <th scope="col">Törlés</th>
                </tr>
        </thead>
        <tbody>    
            { bookings.map(booking => (<BookingTable key={booking.foglalasid} booking={booking} />
            ))}
        </tbody>
    </table>
    );
            }
            
    BookingList.propTypes = {
    bookings: PropTypes.array.isRequired,
    mybookings: PropTypes.bool
};

    BookingList.defaultProps = {
    mybookings: false
};


export default BookingList;