import { render, screen } from '@testing-library/react';
import Home from './Home';
import userEvent from '@testing-library/user-event';


jest.mock('react-router-dom', () => ({
    __esModule: true, //ES6 module
   useNavigate: jest.fn()
})) 
// jest.mock('react-router-dom', () => ({
//       navigate: jest.fn(),
// }));

describe('Na HomePage', () => {
    test('o botão Crie uma conta redireciona a rota para a página SignUp', async () => {
       const mockRota = jest.fn()
         render(<Home goToCadastre={mockRota}/>)
        const criarConta = screen.getByText(/crie uma conta/i)
        userEvent.click(criarConta)
         expect(mockRota).toHaveBeenCalledTimes(1)
    })
})