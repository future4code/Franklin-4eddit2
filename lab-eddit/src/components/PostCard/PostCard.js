import React from "react";
import { BoxStyle, PostBody, PostUsername } from "./styled";

const PostCard = (props) => {


    return (
        <BoxStyle>
            <PostUsername>{props.username}</PostUsername>
            <PostBody>{props.body}</PostBody>
            <img></img>
        </BoxStyle>
    )
}

export default PostCard;