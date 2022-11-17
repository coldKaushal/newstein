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