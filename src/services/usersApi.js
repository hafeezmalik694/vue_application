import axios from "axios";
import { authHeader } from "./headers";

export async function getUserList() {

    const response = await axios
        .get(`http://localhost:3000/api/users`, {headers: authHeader()})
    return response.data;

}

export async function login(rcv_data) {
    const response = await axios
        .post(`http://localhost:3000/api/authenticate`, rcv_data, {headers: authHeader()})
    return response.data;

}
export async function userSignUp(rcv_data) {
    console.log('data is.....',rcv_data)
    const response = await axios
        .post(`http://localhost:3000/api/users`, {rcv_data},{headers: authHeader()})
    return response.data;

}

export async function userUpdate(id, rcv_data) {
    const response = await axios
        .put(`http://localhost:3000/api/users/${id}`, rcv_data, {headers: authHeader()})
    return response.data;

}
export async function userDelete(id) {
    const response = await axios
        .delete(`/sign-up/${id}`, {headers: authHeader()})
    return response.data;

}