import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { signUp } from "../../services/user";
import { Container} from "../Home/styled";
import { Title, InputUser, InputEmail, InputPassword, ButtonSignup, Form, Termo, Subtext, Link, InputBlock, InputCheck} from "./styled";
import {Head} from "../../components/Head/Head"
import { Menu } from "../../components/Menu/Menu";

export default function Cadastre () {  
    const navigate = useNavigate();
    const [form, handleInputChange] = useForm({ username:"", email:"", password:"" })
    
   const submitForms = (event) => { 
        event.preventDefault() 
        signUp(form, navigate)   
    };
    console.log(form)

    return(
     <Container>
        <Head/>
        <Menu nome = {"Entrar"}></Menu>
        <Title>Olá, seja bem vindo ao LabEddit</Title>
        <Form onSubmit={submitForms}>
            <InputUser required type = "text" placeholder = "Nome de usuário" value = {form.username} onChange = {handleInputChange}/>
            <InputEmail required type = "email" placeholder = "Email" value = {form.email} onChange = {handleInputChange}/>
            <InputPassword required type = "password" placeholder = "Senha" value = {form.password} onChange = {handleInputChange} />
            <Termo>
                <Subtext>Ao continuar, você concorda com o nosso <Link href = "#"> Contrato de Usuário </Link> e nossa <Link href="#">Política de Privacidade</Link></Subtext>
                {/* <InputBlock type="checkbox"/>  */}
                <InputCheck>Eu concordo em receber emails sobre coisas legais da LabEddit!</InputCheck>
            </Termo>
            <ButtonSignup onClick={ submitForms}> Cadastrar </ButtonSignup>
        </Form>
        </Container>
    )
}
