import {BrowserRouter, Routes, Route} from 'react-router-dom';
import FeedComments from '../pages/FeedComments/FeedComments';
import FeedPage from '../pages/FeedPage/FeedPage';
import Home from '../pages/Home/Home';
import Cadastre from '../pages/SignUp/Cadastre'
import { goToCadastre, goToFeedComments } from "./coordinator";


const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                {/*<Route path="/" element={<Home />}/> */}
                <Route path="/" element={<Home goToCadastre={goToCadastre}/>}/> 
                <Route path="/signup" element={<Cadastre />}/>
                <Route path="/posts" element={<FeedPage onClickComments={goToFeedComments}/>}/>
                <Route path="/comments/:id" element={<FeedComments />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
