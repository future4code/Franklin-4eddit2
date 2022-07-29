import styled from "styled-components";

//CSS Cadastre
export const Title = styled.h1`
position: absolute;
width: 364px;
height: 86px;
left: 32px;
top: 123px;

font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 700;
font-size: 33px;
line-height: 43px;

color: #373737;

` 

export const Subtext = styled.h2`
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 19px;

color: #000000;
` 
export const ButtonSignup = styled.button`
width: 100%;
height: 51px;
background: ${props => props.outline ? "#FFFFFF" : "linear-gradient(90deg, #FF6489 0%, #F9B24E 100%)"};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 27px;
border:  ${props => props.outline ? " 1px solid #FE7E02" : "none"};
font-weight: bold;
color: ${props => props.outline ? "#FE7E02" : "#FFFFFF"};
font-size: 18px;
line-height: 25px;

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 13px 133px;
gap: 10px;

position: absolute;
width: 365px;
height: 51px;
left: 32px;
 bottom: 90px;
`

export const Input = styled.input`
box-sizing: border-box;

position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;

background: #FFFFFF;
border: 1px solid #D5D8DE;
border-radius: 4px;
`
export const Form = styled.form`
margin-bottom: 56px;
display: flex;
align-items: center;
flex-direction: column;
font-family: 'Times New Roman', Times, serif;
font-style: normal;
width: 100%;
margin-top: 194px;
`