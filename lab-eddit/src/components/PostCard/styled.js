import styled from "styled-components";

export const BoxStyle = styled.div`
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 9px 10px;
    gap: 18px;
    margin: 50px 0 0 0;

    width: 364px;
    height: 167px;

    background: #FBFBFB;
    border: 1px solid #E0E0E0;
    border-radius: 12px;

    flex: none;
    order: 0;
    flex-grow: 0;
`

export const PostUsername = styled.p`
    color: gray;
    font-size: 12px;
`

export const PostBody = styled.p`
    font-size: 18px;
`
