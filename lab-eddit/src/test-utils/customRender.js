import { render } from "@testing-library/react";

const AllTheProviders = ({ children }) => {

    return (

        { children }
    )
}
const customRender = (options) => {
    render({ wrapper: AllTheProviders, ...options })
}

export * from '@testing-library/react'

export { customRender as render } 