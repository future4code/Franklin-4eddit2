import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import FeedPage from './FeedPage';
import { BASE_URL } from '../../constants/url'
import PostCard from '../../components/PostCard/PostCard';

jest.mock('axios')

jest.mock('react-router-dom', () => ({
    __esModule: true, 
   useNavigate: jest.fn()
})) 

describe("Na página de Feed", () => {
    test("Tela deve mostrar listagem de posts", async () => {
       await axios.get.mockResolvedValue({
          data: [{
            id: '001',
            username:'Joely',
            body:'Mensagem',
            commentCount:'0',
            voteSum:'0'
          },{
            id: '002',
            username:'Camila',
            body:'Mensagem',
            commentCount:'0',
            voteSum:'0'
          },

              ]
      })
      render(<FeedPage />)

      const listPosts = await screen.findAllByText(/mensagem/i)
      expect(axios.get).toHaveBeenCalledTimes(1)
    //  expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/posts`)
     expect(listPosts).toHaveLength(2)
    });
    test('Ao clicar no ícone comentário, a rota para feed do comentário é chamada', async () => {
    const mockRota = jest.fn()
    render(<PostCard onClick={mockRota} />)
    const button = screen.getByAltText(/ícone de comentário/i)
    userEvent.click(button)
    expect(mockRota).toHaveBeenCalledTimes(1)
     })
})