import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import  BookingList from "../components/BookingList";

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
        if (authToken===null) {
            navigate("/login");
            
        }else if(authToken==undefined){

        }
         else {
            loadBookings();
        }
    }, [apiUrl, authToken, logout, navigate]);


    return (

        <div>

            {bookings ? (
                <>
                    <h1 className="main-headingtitle3"> PODCASTSÚDIÓ<span className="ChangeHeadText">/FOGLALÁSAIM</span></h1>
                    
                    {bookings.length == 0 ? (
                        <p>Még nincs felvéve hirdetés</p>
                    ) : (
                        <div className="container">
                        <BookingList bookings={bookings} mybookings={true} />
                        </div>
                    )}
                </>
            ) : (
                <h2 className="text-center">Adatok betöltése folyamatban...</h2>
            )}
        </div>
    );

}
export default MyBookingsPage;