import React from "react";
import { Container, Input, Button, Line, Form, Title, Subtext } from "./styled";

export default function Cadastre (){
    return(
        <Container>
            {/* cabeçalho */}
            <Title>Olá, seja bem vindo ao LabEddit :)</Title>
            <Form onSubmit={}>
                <Input required type = "text" placeholder = "Nome de usuário" onChange = {onChange()} value = {form.username}/>
                <Input required type = "email" placeholder = "Email" onChange = {onChange()} value = {form.email}/>
                <Input required type = "password" placeholder = "Senha" onChange = {onChange()} value = {form.password}/>
            
                <Subtext>Ao continuar, você concorda com o nosso <link href="###">Contrato de Usuário</link> e a nossa <link href="###">Política de Privacidade</link></Subtext>

                <p>
                    <Input type="checkbox"> <Subtext>Eu concordo em receber emails sobre coisas legais da LabEddit!</Subtext> </Input>
                </p>
                <Button onClick={}> Cadastrar </Button>
            </Form>
            <Line/>
        </Container>
    )
}