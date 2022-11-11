import axios from "axios";
import { URL } from "./URL";

export async function FetchAllNews(){
    const response = axios.post(URL + "getAllNews", {});
    return response;
}

export async function FetchThisNewsDetail(url){
    const response = axios.post(URL+"getFullNews", {
        url: url,
    });
    return response;
}