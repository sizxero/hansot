import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components/common";
import { Home, Login, SignupStep1, SignupStep2, Menu, MenuDetail, MyPage, SearchStore } from "./pages";
import { Provider } from 'react-redux';
import store from './redux/Store';
import rootReducer from './redux/RootReducer';

const App = () => {
    return (
        <>
        <Provider store={store(rootReducer)}>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignupStep1 />} />
                <Route path='/signup2' element={<SignupStep2 />} />
                <Route path='/menudetail' element={<MenuDetail />} />
                <Route path='/menu' element={<Menu />} />
                <Route path='/mypage' element={<MyPage />} />
                <Route path='/store' element={<SearchStore />} />
            </Routes>
            <Footer />           
        </BrowserRouter>
        </Provider>
        </>
    );
}

export default App;
