import { render, screen } from '@testing-library/react';
import Home from './Home';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
import { BASE_URL } from '../../constants/url'

jest.mock('axios')

jest.mock('react-router-dom', () => ({
    __esModule: true, //ES6 module
    useNavigate: jest.fn()
}))

describe('Na HomePage', () => {
    test('O botão Crie uma conta redireciona a rota para a página SignUp', async () => {
        const mockRota = jest.fn()
        render(<Home goToCadastre={mockRota} />)
        const criarConta = screen.getByText(/crie uma conta/i)
        userEvent.click(criarConta)
        expect(mockRota).toHaveBeenCalledTimes(1)
    })
    test("API de login é chamada com os dados corretos", async () => {
         render(<Home />)
         const emailInput = screen.getByPlaceholderText("Nome")
         const senhaInput = screen.getByPlaceholderText("Senha")
         const button = screen.getByText(/Continuar/i)
 
         const usuario = {
             email: 'grupo2@labenu.com',
             password: 'dev.girls'
         }
         act(() => {
            axios.post.mockResolvedValue({
                data:{
                    token: 'soalegrianessajornadadev'
                }
            })
         });
        
         await userEvent.type(emailInput, usuario.email)
         await userEvent.type(senhaInput, usuario.password)
 
         userEvent.click(button)
 
         expect(axios.post).toHaveBeenCalledTimes(1)
         expect(axios.post).toHaveBeenCalledWith(`${BASE_URL}/users/login`, usuario)
 
 
     })
})