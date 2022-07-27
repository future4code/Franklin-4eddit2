import React, { useEffect, useState } from "react";
import { ContainerTextArea, ButtonPostar, Line, ContainerCards } from "./styled";
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


    return(
        <>
        <ContainerTextArea 
            value={mensagem} 
            onChange={handleMensagem} 
            id="story" 
            name="story"
            rows="5" 
            cols="33" 
            placeholder="  Escreva seu post..."
        />
        <ButtonPostar>Postar</ButtonPostar>
            <Line/>
        <ContainerCards>
            {postCards}
        </ContainerCards>
        </>
    )
}

export default FeedPage;