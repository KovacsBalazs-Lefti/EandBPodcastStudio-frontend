import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

//createContextel fog értéket kapni 
export const AuthContext = createContext();

//komponones létrehozása, amit az appban felhasznalok majd
export function AuthProvider(props) {
    const apiUrl = "http://localhost:8000/api";
    const { children } = props;
    const [authToken, setauthToken] = useState(null);
    const [user, setUser] = useState(null);

    //érteket adok a tokennek
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setauthToken(token);
        }
    }, []);

    //token megváltozik, abba betöltöm a felhasználoi adatokat


    useEffect(() => {
        const loadUserData = async () => {
            const url = apiUrl + "/user"
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Authorization": "Bearer " + authToken,
                },
            });
            const data = await response.json();
            if (response.ok) {
                setUser(data);
            } else if(response.status == 401) {
                localStorage.removeItem("token");
                setauthToken(null);
            }
        };

        if (authToken) {
            loadUserData();
        } else {
            setUser(null);
        }
    }, [authToken])

    const authObj = {
        authToken: authToken,
        user: user
    };

    return <AuthContext.Provider value={authObj}>
        {children}
    </AuthContext.Provider>
}

AuthProvider.propTypes = {
    children: PropTypes.node
}

