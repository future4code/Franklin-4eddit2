import React, { useState } from "react";
import { Container, Logo, Input, Button, Line, Form } from "./styled";
import logo from "../../assets/images/logo.png";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const salvaLogin = (event) => {
    setLogin(event.target.value);
  };

  const salvaPassword = (event) => {
    setPassword(event.target.value);
  };

  const signup = () => {
    const body = {
      email: login,
      password: password,
    };
    axios
      .post(`${BASE_URL}/users/login`, body)
      .then((response) => {
        localStorage.setItem("token", response.data.token)
        navigate("/feed")
      })
      .catch((error) => {
        alert("Falha ao logar, verifique suas credenciais !!")
      });
  };

  const cadastro = () => {
    navigate("/signup")
  }
  return (
    <Container>
      <Logo src={logo} alt="Logo contendo o nome LabEddit" />
      <p>O projeto de rede social da Labenu</p>
      <Form>
        <Input
          onChange={salvaLogin}
          placeholder="Nome"
          required
          value={login}
        />
        <Input
          onChange={salvaPassword}
          placeholder="Senha"
          type={"password"}
          value={password}
          required
        />
      </Form>
      <Button onClick={signup}>Continuar</Button>
      <Line />
      <Button onClick={cadastro} outline={true}>Crie uma conta!</Button>
    </Container>
  );
}

export default HomePage;
