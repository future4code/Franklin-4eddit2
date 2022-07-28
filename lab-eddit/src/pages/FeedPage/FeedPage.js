import React, { useEffect, useState } from "react";
import { ContainerTextArea, ButtonPostar, Line, ContainerCards } from "./styled";
import axios from "axios";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/url";
import PostCard from "../../components/PostCard/PostCard";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { goToFeedComments } from "../../routes/coordinator";
import InputCard from "../../components/InputCard/InputCard";



const FeedPage = () => {
    const [form, handleInputChange, clear] = useForm({ post: ""})

    const posts = useRequestData([], `${BASE_URL}/posts`)

    const navigate = useNavigate()

    const onClickComments = (id) => {
        goToFeedComments(navigate, id)
    }

    const postCards = posts.map((post) => {
        return(
            <PostCard 
                key={post.id}
                username={post.username}
                body={post.body}
                commentCount={post.commentCount}
                voteSum={post.voteSum}
                onClick={() => onClickComments(post.id)}
            />
        )
    })


    return(
        <form >
        {/* <ContainerTextArea 
            value={form.post} 
            onChange={handleInputChange} 
            id="story" 
            name="story"
            rows="5" 
            cols="33" 
            placeholder="  Escreva seu post..."
        />
        <ButtonPostar
            type={"submit"}    
        >Postar</ButtonPostar>
            <Line/> */}
        <InputCard
            value={form.post}
            onChange={handleInputChange}
            placeholder={"Escreva seu post..."}
            acao={"Postar"}
        />
        <ContainerCards>
            {postCards}
        </ContainerCards>
        </form>
    )
}

export default FeedPage;