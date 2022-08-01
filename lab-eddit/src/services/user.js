import axios from "axios";
import { BASE_URL } from "../constants/url";
import {goToFeedPage, goToCadastre} from '../routes/coordinator'

export const signIn = (body, navigate, clear) => {
        axios.post(`${BASE_URL}/users/login`, body)
        .then((response) => {
            localStorage.setItem('token', response.data.token)
            goToFeedPage(navigate)
        }).catch((error) => {
            //  alert("Falha ao logar, verifique suas credenciais !!")
            // clear()    
        })
    }

    export const signUp = (body, navigate) => { 
        axios
        .post(`${BASE_URL}/users/signup`, body)
        .then(response => {
                localStorage.setItem('token', response.data.token);
                //  alert ("Realizado o Cadastro do Usuário");
                goToCadastre(navigate)
            })
            .catch((erro) => {
                console.log(erro)
            })
           
        }