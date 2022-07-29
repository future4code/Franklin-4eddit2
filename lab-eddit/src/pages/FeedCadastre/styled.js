import styled from "styled-components";

//CSS Cadastre
export const Form = styled.form`
margin-bottom: 56px;
/* display: flex; */
/* align-items: center; */
/* flex-direction: column; */
/* font-family: 'Times New Roman', Times, serif; */
/* font-style: normal; */
/* width: 100%; */
/* margin-top: 194px; */
`

export const Title = styled.h1`
position: absolute;
width: 364px;
/* height: 86px; */
left: 32px;
top: 123px;

/* font-family: 'IBM Plex Sans'; */
/* font-style: normal; */
/* font-weight: 700; */
font-size: 33px;
/* line-height: 43px; */

color: #373737;
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
top: 785px;
bottom: 90px;
`

export const InputUser = styled.input`
width: 22.69rem;
height: 3.75rem;
left: 1.625rem;
top: 25.19rem;
box-sizing: border-box;
background: #FFFFFF;
border: 1px solid #D5D8DE;
border-radius: 0.25rem;
position: absolute;
bottom: 30%;
font-family: 'Noto Sans';
font-size: 18px;
opacity: 0.8;
padding: 10px;
`
export const InputEmail = styled.input`
width: 22.69rem;
height: 3.75rem;
left: 1.625rem;
top: 29.43rem;
box-sizing: border-box;
background: #FFFFFF;
border: 1px solid #D5D8DE;
border-radius: 0.25rem;
position: absolute;
bottom: 30%;
font-family: 'Noto Sans';
font-size: 18px;
opacity: 0.8;
padding: 10px;
`

export const InputPassword = styled.input`
width: 22.69rem;
height: 3.75rem;
left: 1.625rem;
top: 33.69rem;
box-sizing: border-box;
background: #FFFFFF;
border: 1px solid #D5D8DE;
border-radius: 0.25rem;
position: absolute;
bottom: 30%;
font-family: 'Noto Sans';
font-size: 18px;
opacity: 0.8;
padding: 10px;
`
export const Subtext = styled.p`
width: 90%;
font-family: 'IBM Plex Sans', sans-serif;
font-size: 14px;
line-height: 19px;
text-align: left
`
