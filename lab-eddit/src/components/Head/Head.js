import React from "react";
import horas from "../../assets/images/horas.svg"
import StatusIcons from "../../assets/images/StatusIcons.svg"
import {Horas, Icones} from "../Head/styled";

export function Head (){
    return(
        <div>
            <Horas src={horas}></Horas>
            <Icones src={StatusIcons}></Icones>
        </div>

    )
}