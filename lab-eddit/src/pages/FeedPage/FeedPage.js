import React, { useEffect, useState } from "react";
import {
  ContainerTextArea,
  ButtonPostar,
  Line,
  ContainerCards,
} from "./styled";
import axios from "axios";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/url";
import PostCard from "../../components/PostCard/PostCard";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { goToFeedComments } from "../../routes/coordinator";
import InputCard from "../../components/InputCard/InputCard";
import useProtected from "../../hooks/useProtected";
import { Head } from "../../components/Head/Head";
import { Menu } from "../../components/Menu/Menu";


const FeedPage = () => {
  const navigate = useNavigate();
  useProtected();
  const [form, handleInputChange, clear] = useForm({
    title: "grupo2",
    body: "",
  });

  const posts = useRequestData([], `${BASE_URL}/posts`);

  const createPost = () => {
    axios
      .post(`${BASE_URL}/posts`, form, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        alert(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    createPost();
  };

  const onClickComments = (id) => {
    goToFeedComments(navigate, id);
  };
  const postCards = posts.map((post) => {
    return (
      <PostCard
        key={post.id}
        username={post.username}
        body={post.body}
        commentCount={post.commentCount}
        voteSum={post.voteSum}
        onClick={() => onClickComments(post.id)}
      />
    );
  });

    // useEffect((createPost), [])
    return(
        <form onSubmit={onSubmitForm} >
            <Head/>
            <Menu nome = {"Logout"}></Menu>
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
