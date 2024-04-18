import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import BookingList from "../components/BookingList";

function MyBookingsPage() {
    const apiUrl = import.meta.env.VITE_BACKEND_URL + "api";
    const navigate = useNavigate();
    const [bookings, setBookings] = useState(null);
    const authContext = useContext(AuthContext);
    const { authToken, logout } = useContext(AuthContext);

 


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
            } else if (response.status == 401) {
                logout();
            }
        };
        if (authToken) {
            loadBookings();
        } else {
            navigate("/login");
        }
    }, [authToken, logout, navigate]);


    return (

        <div>

            {bookings ? (
                <>
                    <h2>Foglalásaim</h2>
                    {bookings.length == 0 ? (
                        <p>Még nincs felvéve hirdetés</p>
                    ) : (
                       <BookingList bookings={bookings}/>
                    )}
                </>
            ) : (
                <h2 className="text-center">Adatok betöltése folyamatban...</h2>
            )}
        </div>
    );

}
export default MyBookingsPage;