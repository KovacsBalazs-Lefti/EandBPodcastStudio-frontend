import { useEffect } from "react";
function HomePage() {
    const apiURL = import.meta.env.VITE_BACKEND_URL+"api";

    useEffect(() => {
      
    }, []);     
    return ( <>
    <h1>Bemutatkozás</h1>
    </> );
}

export default HomePage; 