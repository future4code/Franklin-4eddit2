import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
// import { act } from 'react-dom/test-utils';
import { BASE_URL } from '../../constants/url'
import Cadastre from './Cadastre';

jest.mock('axios')

jest.mock('react-router-dom', () => ({
    __esModule: true, //ES6 module
    useNavigate: jest.fn()
}))

describe('Na Tela de SignUp', () => {
    test("API de cadastro é requisitada com os dados corretos", async () => {
        render(<Cadastre />)
        const emailInput = screen.getByPlaceholderText("Email")
        const senhaInput = screen.getByPlaceholderText("Senha")
        const nomeInput = screen.getByPlaceholderText("Nome de usuário")

        const button = screen.getByText(/Cadastrar/i)

        const usuario = {
            username: 'Developers',
            email: 'grupo2@labenu.com',
            password: 'dev.girls'
        }

           axios.post.mockResolvedValue({
               data:{
                   token: 'soalegrianessajornadadev'
               }
           })
       
        await userEvent.type(emailInput, usuario.email)
        await userEvent.type(senhaInput, usuario.password)
        await userEvent.type(nomeInput, usuario.username)


        userEvent.click(button)

        expect(axios.post).toHaveBeenCalledTimes(1)
        expect(axios.post).toHaveBeenCalledWith(`${BASE_URL}/users/signup`, usuario)


    })

 });