import styled from "styled-components";

export const ContainerTextArea =  styled.textarea`
    position: absolute;
    width: 364px;
    height: 131px;
    left: 30px;
    top: 124px;
    padding: 15px 0px 17px 12px;
    background: #EDEDED;
    border-radius: 12px;
    border: #EDEDED none;
    
`

export const ButtonPostar = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 145px;

    position: absolute;
    width: 359px;
    height: 47px;
    left: 33px;
    top: 267px;

    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%), #4088CB;
    border-radius: 12px;
    border:  ${props => props.outline ? " 1px solid #FE7E02" : "none"};
    color: #FFF;
`

export const Line = styled.hr`
    position: absolute;
    width: 363.01px;
    height: 0px;
    left: 31px;
    top: 326px;
    border: 1px solid #FE7E02;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transform: rotate(0.32deg);
`