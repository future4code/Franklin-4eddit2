import React from "react";
import { BASE_URL } from "../../constants/url";
import useRequestData from "../../hooks/useRequestData";
import { BoxStyle } from "../../components/PostCard/styled";

const FeedComments = () => {

    const comments = useRequestData([], `${BASE_URL}/posts/53a81747-d99c-4f38-a7f3-8675ee9391b1/comments`)

    const postComments = comments.map((comment) => {
        return(
            <>
                <p>{comment.username}</p>
                <p>{comment.body}</p>
            </>
        )
    })

    return (
        <BoxStyle>
            {postComments}
        </BoxStyle>
    )
}

export default FeedComments;