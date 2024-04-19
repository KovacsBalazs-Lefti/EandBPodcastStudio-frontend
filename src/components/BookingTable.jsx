import PropTypes from "prop-types";
import { Link, Navigate } from "react-router-dom";
import { AuthContext} from "../context/AuthContext";
import { useContext } from "react";


function BookingTable(props) {
    const { booking} = props;
    const apiUrl = import.meta.env.VITE_BACKEND_URL+"api";
    const { authToken } = useContext(AuthContext);

    const handleDelete = () => {
        if (window.confirm("Biztosan törölni szeretné ezt a foglalást")) {
            if (booking) {
                deleteBookingdatas();
                window.location.reload();
        
            } else {
                console.log("A foglalás nem található");
            }
        }
    };

    const deleteBookingdatas = async () => {
        try {
            const url = apiUrl + "/foglalas/" + booking.foglalasid;
            const response = await fetch(url, {
                method: "DELETE",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + authToken
                }
            });
            if (!response.ok) {
                console.log("Hiba a törlés során");
                return;
            } 
        } catch (error) {
            console.error("Váratlan hiba törlés során", error);
            return;
        }
    };

    
    return (
        <tr>
            <td>{booking.szolgaltatasnev}</td>
            <td>{booking.letszam}</td>
            <td>{booking.foglalaskezdete}</td>
            <td>{booking.foglalashossza}</td>
            <td>{booking.megjegyzes}</td>
            <td>
                <Link className="btn btn-outline-secondary" type="button" to={"/update-bookings/" + booking.foglalasid}>Módosítás</Link>
            </td>
            <td>
                <button className="btn btn-outline-danger" onClick={handleDelete} type="button">Törlés</button>
            </td>
        </tr>
    );
}

BookingTable.propTypes = {
    booking: PropTypes.object.isRequired,
};
export default BookingTable;