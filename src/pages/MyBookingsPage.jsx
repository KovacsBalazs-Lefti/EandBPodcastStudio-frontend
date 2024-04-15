import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function MyBookingsPage() {
    const apiUrl = "http://localhost:8000/api";
    const navigate = useNavigate();
    const [bookings, setBookings] = useState([]);
    const authContext = useContext(AuthContext);
    const {authToken, logout} = authContext;


    useEffect(() => {
        const loadBookings = async () => {
            const response = await fetch(apiUrl + "/foglalas", {
                headers: {
                    Authorization: "Bearer " + authToken
                }
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setBookings(data);
            }else if (response.status == 401) {
            logout();
            }
        };
        if (authToken) {
         loadBookings();
        } else {
          navigate("/login");
        }
      }, [authToken, logout, navigate]);


    return  <div className="row">
        {bookings.map((bookings) => (<div key={bookings.foglalasid} className="col">
        <h4>{bookings.szolgaltatasnev}</h4>
        <h5> Foglalas kezdete: {bookings.foglalaskezdete}</h5>
        <h5> Foglalas hossza: {bookings.foglalashossza} óra</h5>
        </div>))}
    </div>;
}

export default MyBookingsPage ;