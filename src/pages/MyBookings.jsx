import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function MyBookings(props) {
    const {refreshToken} = props;
    const apiUrl = "http://localhost:8000/api";
    const navigate = useNavigate();
    const [bookings, setBookings] = useState([]);

    const loadBookings = async () => {
        const token = localStorage.getItem("token");
        const response = await fetch(apiUrl + "/foglalas", {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            setBookings(data);
        }else if (response.status == 401) {
            localStorage.removeItem("token");
            refreshToken();
            navigate("/login");
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
         loadBookings();
        } else {
          navigate("/login");
        }
      }, []);


    return  <div className="row">
        {bookings.map((bookings) => (<div key={bookings.foglalas} className="col">
        <h4>{bookings.szolgaltatasnev}</h4>
        <h5> Foglalas kezdete: {bookings.foglalaskezdete}</h5>
        <h5> Foglalas hossza: {bookings.foglalashossza} óra</h5>
        </div>))}
    </div>;
}

MyBookings.propTypes = {
  refreshToken: PropTypes.func.isRequired
}
export default MyBookings ;