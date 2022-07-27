import axios from "axios";
import { BASE_URL } from "../constants/url";

export const createPost = (form) => {
    axios.post(`${BASE_URL}/posts`, form)
}