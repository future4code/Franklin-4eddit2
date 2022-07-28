import React from "react";
import { BASE_URL } from "../../constants/url";
import useRequestData from "../../hooks/useRequestData";
import { BoxStyle } from "../../components/PostCard/styled";
import { useParams } from "react-router-dom";
import CommentCard from "../../components/CommentCard/CommentCard";
import InputCard from "../../components/InputCard/InputCard";
import useForm from "../../hooks/useForm";

const FeedComments = () => {

    const params = useParams()
    console.log(params)

    const [form, handleInputChange, clear] = useForm({ post: ""})

    const comments = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)
    console.log(comments)
    
    const postComments = comments.map((comment) => {
        return(
            <CommentCard
                key={comment.id}
                username={comment.username}
                body={comment.body}
                voteSum={comment.voteSum}
            />
        )
    })

    return (
        <div>
            <h1>FeedComment</h1>
            <InputCard
                value={form.post}
                onChange={handleInputChange}
                placeholder={"Adicionar comentário..."}
                acao={"Responder"}
            />
            {postComments}
        </div>

        
    )
}

export default FeedComments;