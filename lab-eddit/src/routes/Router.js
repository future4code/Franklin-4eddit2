import {BrowserRouter, Routes, Route} from 'react-router-dom';
import FeedPage from '../pages/FeedPage/FeedPage';
import Home from '../pages/Home/Home';


const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/feed" element={<FeedPage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;