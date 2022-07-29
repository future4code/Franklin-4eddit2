import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { goToCadastre } from "../../routes/coordinator";
import { BASE_URL } from "../../constants/url";
import useForm from "../../hooks/useForm";
import { Container} from "../Home/styled";
import { Title, InputUser, InputEmail, InputPassword, ButtonSignup, Form } from "../FeedComments/styled";



export default function Cadastre (){
    const submitForms = (event) => { event.preventDefault() };

    const navigate = useNavigate();
    const [form, onChange, clear] = useForm({ username:"", email:"", password:"" })

    const goCadastre = () => {
        axios
            .post(`${BASE_URL}/users/Cadastre`, form)
            .then(response => {localStorage.setItem('token', response.data.token);
                alert ("Realizado o Cadastro do Usuário");
                clear();
                goToCadastre (navigate);
            })
            .catch(erro => console.erro(erro))
    }


    return(
        <Container>
            {/* cabeçalho */}
            {/* <Title>Olá, seja bem vindo ao LabEddit</Title> */}
            {/* <Form onSubmit={submitForms}> */}
                {/* <InputUser required type = "text" placeholder = "Nome de usuário" value = {form.username}/> */}
                {/* <Input required type = "text" placeholder = "Nome de usuário" onChange = {onChange(onChange)} value = {form.username}/> */}
                {/* <InputEmail required type = "email" placeholder = "Email" value = {form.email}/> */}
                {/* <InputPassword required type = "password" placeholder = "Senha" value = {form.password}/> */}
            
                {/* <Subtext>Ao continuar, você concorda com o nosso <link href="###">Contrato de Usuário</link> e a nossa <link href="###">Política de Privacidade</link></Subtext> */}
{/* 
                <p> 
                    <Input type="checkbox"> <Subtext>Eu concordo em receber emails sobre coisas legais da LabEddit!</Subtext> </Input>
                </p> */}
                {/* <ButtonSignup onClick={ goCadastre}> Cadastrar </ButtonSignup> */}
            {/* </Form> */}
        </Container>
    )
}

