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
    const [form, handleInputChange, clear] = useForm({ title: "grupo2", body: ""})

    const posts = useRequestData([], `${BASE_URL}/posts`)

    const navigate = useNavigate()

    const createPost = () => {
        axios.post(`${BASE_URL}/posts`, form, {
            headers: {
                Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTdmOWJlLTAxZTYtNDc5NC1hNjgxLWJlNjVlYTRhMWM0MyIsInJvbGUiOiJHVUVTVCIsImlhdCI6MTY1OTA1NjkzMSwiZXhwIjoxNjU5MTAwMTMxfQ.ik6Jz6I80yuIGJXRTdT2siAowGcQrRZ4ECpLUlc_1OY"
            }
        }).then((response) => {
            alert(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        createPost()
    }

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
        <form onSubmit={onSubmitForm} >
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
            name={"body"}
            value={form.body}
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