import { useEffect } from "react";
import Services from "../components/Services";

function HomePage() {
    const apiURL = import.meta.env.VITE_BACKEND_URL+"api";

    useEffect(() => {
      
    }, []);   

    return ( <div>
    <h1>Bemutatkozás</h1>
    <Services />
    </div> );
}

export default HomePage; 