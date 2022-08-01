import React from "react";
import { BoxStyle, PostBody, PostUsername, Icons, ContainerIconsSetas, ContainerIconComentario } from "./styled";
import setaBaixo from "../../assets/images/setaBaixo.svg";
import setaCima from "../../assets/images/setaCima.svg";

const CommentCard = (props) => {


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
            </Icons>
        </BoxStyle>
    )
}

export default CommentCard;
