import React from "react";
import { BASE_URL } from "../../constants/url";
import useRequestData from "../../hooks/useRequestData";
import { BoxStyle } from "../../components/PostCard/styled";
import { useParams } from "react-router-dom";
import CommentCard from "../../components/CommentCard/CommentCard";
import InputCard from "../../components/InputCard/InputCard";
import useForm from "../../hooks/useForm";
import axios from "axios";

const FeedComments = () => {

    const params = useParams()
    // console.log(params)

    const [form, handleInputChange, clear] = useForm({ body: ""})

    const comments = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)
    // console.log(comments)



    const createComment = () => {
        axios.post(`${BASE_URL}/posts/${params.id}/comments`, form, {
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
        createComment()
    }
    
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
        <form onSubmit={onSubmitForm}>
            <h1>FeedComment</h1>
            <InputCard
                name={"body"}
                value={form.body}
                onChange={handleInputChange}
                placeholder={"Adicionar comentário..."}
                acao={"Responder"}
            />
            {postComments}
        </form>

        
    )
}

export default FeedComments;
