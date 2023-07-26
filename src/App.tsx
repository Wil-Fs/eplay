import { BrowserRouter } from 'react-router-dom';

import Header from './componets/Header';
import { GlobalStyle } from './styles';
import Rotas from './Routes';

function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <div className="Container">
                <Header />
            </div>
            <Rotas />
        </BrowserRouter>
    );
}

export default App;
