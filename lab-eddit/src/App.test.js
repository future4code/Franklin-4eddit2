import React from "react";
import App from "./App";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// import { render } from "../src/test-utils/customRender.js"

describe("Na página de login", () => {
  test("o input nome é renderizado", () => {
  const { getByPlaceholderText } = render(<App />)
  const nome = getByPlaceholderText(/nome/i)
  expect(nome).toBeInTheDocument()

})
test("o input senha é renderizado", () => {
  const { getByPlaceholderText } = render(<App />)
  const senha = getByPlaceholderText(/senha/i)
  expect(senha).toBeInTheDocument()

})
test.skip("o botão 'Crie uma conta' leva para a página de cadastro", async () => {
  const mockNavegacao = jest.fn()
  const { getByText } = render(<App />)
  const criarConta = getByText(/crie uma conta/i)
  await userEvent.click(criarConta)
  expect(mockNavegacao).toHaveBeenCalled(1)
})
});