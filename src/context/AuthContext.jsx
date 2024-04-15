import { createContext } from "react";
import PropTypes from "prop-types";

//createContextel fog értéket kapni 
export const AuthContext = createContext();

//komponones létrehozása, amit az appban felhasznalok majd
export function AuthProvider(props){
    const {children} = props;

    const authObj = {

    };

    return <AuthContext.Provider value={authObj}>
        {children}
    </AuthContext.Provider>
}

AuthProvider.propTypes = {
    children:PropTypes.node
}

