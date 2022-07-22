import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import {GlobalState} from "../global/GlobalState"
import {GlobalStateContext} from "../global/GlobalStateContext"
import React from "react";

const AllTheProviders = ({ children }) => {
return(
    <GlobalState>
        <MemoryRouter>
            <GlobalStateContext>
            {children}
            </GlobalStateContext>
        </MemoryRouter>
    </GlobalState>
)

}




const customRender = (options) => {

render({ wrapper: AllTheProviders, ...options })}




export * from '@testing-library/react'




export { customRender as render} 