import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import FeedPage from './FeedPage';
import { BASE_URL } from '../../constants/url'

jest.mock('axios')

jest.mock('react-router-dom', () => ({
    __esModule: true, 
   useNavigate: jest.fn()
})) 

describe("Na página de Feed", () => {
    test("Tela deve mostrar listagem de posts", async () => {
       axios.get.mockResolvedValue({
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
      const { findAllByText} = render(<FeedPage />)

      const listPosts = await findAllByText(/mensagem/i)
      expect(axios.get).toHaveBeenCalledTimes(1)
    //  expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/posts`)
     expect(listPosts).toHaveLength(2)
    });
})