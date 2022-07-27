import React, { useEffect, useState } from "react";
import { ContainerTextArea, ButtonPostar, BoxStyle, Line } from "./styled";
import { Container } from "../Home/styled";
import axios from "axios";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/url";
import PostCard from "../../components/PostCard/PostCard";


const FeedPage = () => {
    const [mensagem, setMensagem] = useState('')

    const handleMensagem = (event) => {
        setMensagem(event.target.value)
    }

    const posts = useRequestData([], `${BASE_URL}/posts`)

    const postCards = posts.map((post) => {
        return(
            <PostCard 
                key={post.id}
                username={post.username}
                body={post.body}
            />
        )
    })

    /*

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
      })}
      
      */

    return(
        <div>
        <Container>
            <ContainerTextArea value={mensagem} onChange={handleMensagem} id="story" name="story"
            rows="5" cols="33" placeholder="  Escreva seu post..."/>
            <ButtonPostar>Postar</ButtonPostar>
            <Line/>
        </Container>
        {postCards}
        </div>
    )
}

export default FeedPage;