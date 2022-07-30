import React from "react";
import IconLogo from "../../assets/images/group3.svg"
import { Logo, BlocoCinza, Entrar } from "./styled";


export function Menu (props){
    
    return(
        <div>
            <BlocoCinza></BlocoCinza>
            <Logo src={IconLogo}></Logo>
            {/* <Entrar nome={'Sasir'}></Entrar> */}
            <Entrar>{props.nome}</Entrar>
        </div>

    )
}