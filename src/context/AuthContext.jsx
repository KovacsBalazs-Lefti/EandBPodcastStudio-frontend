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
    const [error, setError] = useState(null);

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
            const url = apiUrl + "/user";
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer " + authToken,
                },
            });
            const data = await response.json();
            if (response.ok) {
                setUser(data);
            } else if (response.status == 401) {
                localStorage.removeItem("token");
                setauthToken(null);
            }
        };

        if (authToken) {
            loadUserData();
        } else {
            setUser(null);
        }
    }, [authToken]);

    const authObj = {
        authToken: authToken,
        user: user,
        error: error,
        register: async () => { },
        login: async (email, jelszo) => {
            const url = apiUrl + "/login";
            const loginDTO = {
                email: email,
                jelszo: jelszo
            };
            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify(loginDTO),
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            console.log(data);
            if (response.ok) {
                const token = data.token;
                localStorage.setItem("token", token);
                setauthToken(token)
                alert("Sikeres bejelentkezés")
            } else {
                console.error(data);
                setError(data.message);
            }

        },
        logout: async () => {
            const url = apiUrl + "/logout";
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer " + authToken
                }
            });
            if (response.ok || response.status == 401) {
                localStorage.removeItem("token");
                setauthToken(null);
            }
            else {
                const data = await response.json();
                console.error(data);
                setError(data.message);
            }
        },
        logoutEverywhere: async () => {
            const url = apiUrl + "/logout-logoutEverywhere";
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer " + authToken
                }
            });
            if (response.ok || response.status == 401) {
                localStorage.removeItem("token");
                setauthToken(null);
            }
            else {
                const data = await response.json();
                console.error(data);
                setError(data.message);
            }
        },
    };

    return <AuthContext.Provider value={authObj}>
        {children}
    </AuthContext.Provider>
}

AuthProvider.propTypes = {
    children: PropTypes.node
}

