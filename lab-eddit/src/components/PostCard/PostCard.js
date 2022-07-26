import React from "react";
import { BoxStyle, PostBody, PostUsername, Icons, ContainerIconsSetas, ContainerIconComentario } from "./styled";
import setaBaixo from "../../assets/images/setaBaixo.svg";
import setaCima from "../../assets/images/setaCima.svg";
import Vector from "../../assets/images/Vector.svg";


const PostCard = (props) => {


    return (
        <BoxStyle>
            <PostUsername>{props.username}</PostUsername>
            <PostBody>{props.body}</PostBody>
            <Icons>
            <ContainerIconsSetas>
                <img src={setaBaixo} alt=""/>
                <p>{props.voteSum}</p>
                <img src={setaCima} alt=""/>
            </ContainerIconsSetas>
            <ContainerIconComentario onClick={props.onClick}>
                <p>{props.commentCount}</p>
                <img src={Vector} alt="ícone de comentário"/>
            </ContainerIconComentario>
            </Icons>
        </BoxStyle>
    )
}

export default PostCard;
