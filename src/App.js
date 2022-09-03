import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components/common";
import { Home, Login, Signup } from "./pages";
import { Provider } from 'react-redux';
import store from './redux/Store';
import reducers from './redux/Reducer';

const App = () => {
    return (
        <>
        <Provider store={store(reducers)}>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
            <Footer />           
        </BrowserRouter>
        </Provider>
        </>
    );
}

export default App;
