import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Header from './componets/Header';
import { GlobalStyle } from './styles';
import Rotas from './Routes';
import Footer from './componets/Footer';
import { store } from './store';
import Cart from './componets/Cart';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <GlobalStyle />
                <div className="Container">
                    <Header />
                </div>
                <Rotas />
                <Footer />
                <Cart />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
