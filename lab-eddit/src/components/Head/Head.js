import React from "react";
import horas from "../../assets/images/horas.svg"
import StausIcons from "../../assets/images/StausIcons.svg"
import { useNavigate } from "react-router-dom";
import {Horas} from "styled-components";

export default function Head (){
    return(
        <div>
            <Horas src={horas}></Horas>
        </div>

    )
}