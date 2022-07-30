import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { signUp } from "../../services/user";
import { Container} from "../Home/styled";
import { Title, InputUser, InputEmail, InputPassword, ButtonSignup, Form, Subtext, Link, InputBlock, InputCheck} from "./styled";


export default function Cadastre () {  
    const navigate = useNavigate();
    const [form, onChange] = useForm({ username:"", email:"", password:"" })
    
   const submitForms = (event) => { 
        event.preventDefault() 
        signUp(form, navigate)
       
    };
 console.log(form)
    return(
     <Container>
            {/* <Head/> */}
            <Title>Olá, seja bem vindo ao LabEddit</Title>
            <Form onSubmit={submitForms}>
                <InputUser required type = "text" placeholder = "Nome de usuário" value = {form.username} onChange = {onChange}/>
                <InputEmail required type = "email" placeholder = "Email" value = {form.email} onChange = {onChange}/>
                <InputPassword required type = "password" placeholder = "Senha" value = {form.password} onChange = {onChange} />
            
                <Subtext>
                    <p>Ao continuar, você concorda com o nosso { " " } <Link href = "#"> Contrato de Usuário </Link> e nossa <Link href="#">Política de Privacidade</Link></p>
                    <InputBlock type="checkbox"/> <InputCheck>Eu concordo em receber emails sobre coisas legais da LabEddit!</InputCheck>
                </Subtext>
                <ButtonSignup onClick={ submitForms}> Cadastrar </ButtonSignup>
            </Form>
        </Container>
    )
}