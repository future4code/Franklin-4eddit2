import React from "react";
import { Button, ContainerTextArea, Line } from "./styled";

const InputCard = (props) => {


    return(
        <div>
            <ContainerTextArea 
                value={props.value}
                onChange={props.onChange}
                id="story"
                name="story"
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