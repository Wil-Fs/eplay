import { BrowserRouter } from 'react-router-dom';

import Header from './componets/Header';
import { GlobalStyle } from './styles';
import Rotas from './Routes';
import Footer from './componets/Footer';

function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <div className="Container">
                <Header />
            </div>
            <Rotas />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
