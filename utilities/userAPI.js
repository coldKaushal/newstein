import axios from "axios";
import { defaultPreference } from "../store/defaultPreference";
import errorFunction from "./errorFunction";
//home wifi
const URL = "http://192.168.0.107:8000/";
//kaushal hotspot
// const URL= "http://192.168.43.238:8000/";

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