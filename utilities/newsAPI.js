import axios from "axios";
import { URL } from "./URL";

export async function FetchAllNews(email){
    const response = axios.post(URL + "getAllNews", {
        email: email
    });
    return response;
}

export async function FetchThisNewsDetail(url){
    const response = axios.post(URL+"getFullNews", {
        url: url,
    });
    return response;
}

export async function 

CheckServer(){
    const response = await axios.get(URL).catch(err=>console.log(err));
    return response;
}

export async function FetchBookmarks(email){
    const response = await axios.post(URL+"fetchBookmark",{
        email:email,
    }).catch(err=>console.log(err));
    return response;
}

export async function GetNewsByID(_id){
    const response = await axios.post(URL + "getNewsById", {
        _id: _id
    });
    return response;
}

export async function SearchNews(text){
    const response = await axios.post(URL+"search", {
        text: text
    });
    return response;
}