import React from "react";
import { Container, Logo, Input, Button, Line, Form } from "./styled";
import logo from "../../assets/images/logo.png";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../services/user"
import { Head } from "../../components/Head/Head";

function HomePage({goToCadastre}) {
  const navigate = useNavigate()
  const [form, onChange, clear] = useForm({email:'', password:''})

  const onSubmitLogin = async (event) => {
    event.preventDefault()
  signIn(form, navigate, clear)
  }
 

  return (
    <Container>
      <Head/>
      <Logo src={logo} alt="Logo contendo o nome LabEddit" />
      <p>O projeto de rede social da Labenu</p>
      <Form>
        <Input
          name={'email'}
          onChange={onChange}
          placeholder="Nome"
          required
          value={form.nome}
        />
        <Input
          name={'password'}
          onChange={onChange}
          placeholder="Senha"
          type={"password"}
          value={form.password}
          required
        />
      </Form>
      <Button type={"submit"} onClick={onSubmitLogin}>Continuar</Button>
      <Line />
      <Button onClick={() => goToCadastre(navigate)} outline={true}>Crie uma conta!</Button>
    </Container>
  );
}

export default HomePage;
