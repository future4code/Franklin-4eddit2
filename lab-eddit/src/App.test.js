import { render } from '@testing-library/react';
import App from './App';

describe("Na página de login", () => {
  test("o input nome é renderizado sem valor prévio", () => {
    const { getByPlaceholderText } = render(<App />)
    const nome = getByPlaceholderText(/nome/i)
    expect(nome.textContent).toBe("")

  })
  test("o input senha é renderizado sem valor prévio", () => {
    const { getByPlaceholderText } = render(<App />)
    const senha = getByPlaceholderText(/senha/i)
    expect(senha.value).toBe('')

  })
});
