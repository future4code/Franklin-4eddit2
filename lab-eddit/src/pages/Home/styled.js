import styled from "styled-components"

export const Container = styled.div`
height: 100vh;
padding: 0 32px;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;

> p {
    margin-bottom: 106px;
}
`

export const Logo = styled.img`
margin-bottom: 8px;
`
export const Form = styled.form`
margin-bottom: 56px;
`

export const Input = styled.input`
width: 362px;
height: 60px;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
border-radius: 5px;
margin-bottom: 8px;
border: none;
padding-left: 16px;
`

export const Button = styled.button`
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
`

export const Line = styled.hr`
width: 100%;
border: none;
border: 1px solid #FE7E02;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
transform: rotate(0.32deg);
margin: 18px 0;
`

export const Title = styled.h1`
    /* font-family: ;
    font-style: ;
    font-weight: ;
    font-size: ;

    line-height: ;
    color: ;
    font-family: IBM Plex Sans;
font-size: 33px;
font-weight: 700;
line-height: 43px;
letter-spacing: 0em;
text-align: left; */
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