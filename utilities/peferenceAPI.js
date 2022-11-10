import axios from "axios";
import { URL } from "./URL";

export async function UpdateCategories(email, categories){
    const data={
        email: email,
        categories: categories,
    }
    const response = await axios.post(URL+"updateCategories", data);
    return response;
    
}

export async function GetCategories(email){
    const repsonse = await axios.post(URL+"GetCategories", {email: email});
    return repsonse;
}