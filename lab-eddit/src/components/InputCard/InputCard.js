import React from "react";
import { Button, ContainerTextArea, Line } from "./styled";

const InputCard = (props) => {


    return(
        <div>
            <ContainerTextArea 
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                id="story"
                rows="5"
                cols="33"
                placeholder={props.placeholder}
            />
            <Button type={"submit"}>{props.acao}</Button>
            <Line />
        </div> 
    )
}

export default InputCard;
