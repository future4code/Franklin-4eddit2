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
    height: 70px;
`

export const Icons = styled.div`
    display: flex;
    flex-direction: row;
    width: 174.33px;
    height: 28px;
    align-items: flex-end;
`

export const ContainerIconsSetas = styled.div`
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 4.66667px;
    gap: 15.92px;
    border: 0.796748px solid #ECECEC;
    border-radius: 28px;
`

export const ContainerIconComentario = styled.button`
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4.66667px;
    gap: 8px;
    margin-left: 10px;

    width: 65.33px;
    height: 28px;


    border: 0.793333px solid #ECECEC;
    border-radius: 28px;
`