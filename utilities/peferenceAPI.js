import axios from "axios";

//home wifi
const URL = "http://192.168.0.107:8000/";
//kaushal hotspot
// const URL= "http://192.168.43.238:8000/";

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