import React from "react";
import { Container, Logo, Input, Button, Line, Form } from "./styled";
import logo from "../../assets/images/logo.png";

function HomePage() {
  return (
    <Container>
      <Logo src={logo} alt="Logo contendo o nome LabEddit" />
      <p>O projeto de rede social da Labenu</p>
      <Form>
        <Input placeholder="Nome" required />
        <Input placeholder="Senha" type={"password"} required />
      </Form>
      <Button>Continuar</Button>
      <Line />
      <Button outline={true}>Crie uma conta!</Button>
    </Container>
  );
}

export default HomePage;
