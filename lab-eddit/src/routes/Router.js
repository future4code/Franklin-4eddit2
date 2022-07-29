import {BrowserRouter, Routes, Route} from 'react-router-dom';
import FeedComments from '../pages/FeedComments/FeedComments';
import FeedPage from '../pages/FeedPage/FeedPage';
import Home from '../pages/Home/Home';


const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/feed" element={<FeedPage />}/>
                <Route path="/comments/:id" element={<FeedComments />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
