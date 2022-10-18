import axios from "axios";
import { authHeader } from "./headers";
   
export async function getTaskList() {
  const response = await axios.get(
    `http://localhost:3000/api/todos`,{headers: authHeader()}
  );
  return response.data;
}

export async function createTask(rec_data) {
  const response = await axios.post(
    "http://localhost:3000/api/todos",
    rec_data,
    {headers: authHeader()}
  );
  return response.data;
}

export async function updateTask(rec_data) {
  const response = await axios.put(
    `http://localhost:3000/api/todos/${rec_data.id}`,
    rec_data,
    {headers: authHeader()}
  );
  return response.data;
}

export async function deleteTask(id) {
  const response = await axios.delete(
    `http://localhost:3000/api/todos/${id}`,{headers: authHeader()}
  );
  return response.data;
}
