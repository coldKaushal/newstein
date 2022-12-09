import axios from "axios";
import { URL } from "./URL";

export async function AddBookmark(email, data){
    console.log(email);
    const response = axios.post(URL + "addBookmark", {
        email: email,
        bookmark: data,
    });
    return response;
}

export async function Like(email, _id){
    const response = axios.post(URL + "like", {
        email: email,
        _id: _id
    });
    return response;
}   

export async function Dislike(email, _id){
    const response = axios.post(URL + "dislike", {
        email: email,
        _id: _id
    });
    return response;
}   