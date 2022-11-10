import axios from "axios";
import { defaultPreference } from "../store/defaultPreference";
import errorFunction from "./errorFunction";
import { URL } from "./URL";

export async function AddUser(name, email){

    const data = {
        name: name,
        email: email,
        preference: defaultPreference,
    }
    console.log(data);
    const response  = await axios.post(URL+"addUser", data).catch(err=> errorFunction(err));
    return response;
      
}

export async function GetUserProfile(email){
    const response = await axios.post(URL+"getUser", {email: email}).catch(err=> errorFunction(err));
    return response;
}

export async function UpdateUserProfile(data){
    const response = await axios.post(URL+"updateUser", data).catch(err=> errorFunction(err));
    return response;
}