import { createContext, useEffect } from "react";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { defaultPreference } from "./defaultPreference";
export const AuthContext = createContext({
    token: '',
    email: '',
    name: '',
    preference: defaultPreference,
    isAuthenticated: false,
    item: '',
    setItem: (item)=> {},
    authenticate: (token,email, name, preference) => {},
    logout: () => {}
});


export default function AuthContextProvider({children}){

    const [authToken, setAuthToken] = useState();
    const [preference, setPreference] = useState(defaultPreference);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [item, updateItem] = useState();


    function setItem(item){
        updateItem(item);
    }
    function authenticate(token,email,name, preference){
        console.log(name);
        setAuthToken(token);
        setName(name);
        setEmail(email);
        setPreference(preference);
        AsyncStorage.setItem('token', token);
        AsyncStorage.setItem('email', email);
    }

    function logout(){
        setAuthToken(null);
        setName(null);
        setEmail(null);
        setItem(null);
        setPreference(defaultPreference);
        AsyncStorage.removeItem('token');
        AsyncStorage.removeItem('email');
    }
    const value={
        token: authToken,
        name: name,
        email: email,
        preference: preference,
        item: item,
        setItem: setItem,
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        logout: logout
    }

    return <AuthContext.Provider value={value} >{children}</AuthContext.Provider>
}