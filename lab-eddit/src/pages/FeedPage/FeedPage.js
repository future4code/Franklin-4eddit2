import React, { useState } from "react";
import { ContainerTextArea, ButtonPostar, BoxStyle, Line } from "./styled";
import { Container } from "../Home/styled";
import axios from "axios";


const FeedPage = () => {
    const [mensagem, setMensagem] = useState('')

    const handleMensagem = (event) => {
        setMensagem(event.target.value)
    }

    /*const body = {
        title: "Primeiro",
        body: "post"
    }

    axios.post('https://labeddit.herokuapp.com/posts', body, {
        headers: {
            "Content-Type": 'application/json',
            "Authorization": '{{token}}'
        }
    }).then((response) => {
        console.log(response.data)
    }).catch((error) => {
        console.log(error.response.datas)
    })

    const enviarMensagem = () => {
      const novasMensagens = {mensagem: setMensagem }
      const novaMensagem = [...mensagem];
      novaMensagem.push(novasMensagens)
      setMensagem(novaMensagem);
    }

    const mensagensEnviadas = () => { mensagem.map((mensagem) => {
        return <div>
          <h3><p>{mensagem.mensagem}</p></h3>
        </div>
      })}*/

    return(
        <Container>
            <ContainerTextArea value={mensagem} onChange={handleMensagem} id="story" name="story"
            rows="5" cols="33" placeholder="  Escreva seu post..."/>
            <ButtonPostar>Postar</ButtonPostar>
            <Line/>
            
        </Container>
    )
}

export default FeedPage;