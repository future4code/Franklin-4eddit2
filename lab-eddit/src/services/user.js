import axios from "axios";
import { BASE_URL } from "../constants/url";
import {goToFeedPage} from '../routes/coordinator'

export const signup = (body, navigate, clear) => {
        axios.post(`${BASE_URL}/users/login`, body)
        .then((response) => {
            localStorage.setItem('token', response.data.token)
            goToFeedPage(navigate)
        }).catch((error) => {
            alert("Falha ao logar, verifique suas credenciais !!")
            clear()
            
        })
    }