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
                <img src={setaCima} alt=""/>
            </ContainerIconsSetas>
            <ContainerIconComentario>
                <img src={Vector} alt=""/>
            </ContainerIconComentario>
            </Icons>
        </BoxStyle>
    )
}

export default PostCard;