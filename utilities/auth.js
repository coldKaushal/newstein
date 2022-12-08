import axios from "axios";
import errorFunction from "./errorFunction";

const API_KEY = "AIzaSyClKsDQTaiAXveA6kpekkwL5P5wbI4fz_M"

async function authenticate(mode, email, password){
    const url = 'https://identitytoolkit.googleapis.com/v1/accounts:'+mode+'?key='+API_KEY;
    const response = await axios.post(url, {
        email: email,
        password: password,
        returnSecureToken: true
        }).catch(error => errorFunction(error));

    return response.data.idToken;
    
}
export function createUser(email, password){
   return  authenticate('signUp', email, password);
}

export function login(email, password){
    return authenticate('signInWithPassword', email, password);
}




