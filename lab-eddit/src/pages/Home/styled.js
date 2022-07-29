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
display: flex;
align-items: center;
flex-direction: column;
font-family: 'Times New Roman', Times, serif;
font-style: normal;
width: 100%;
margin-top: 194px;
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