import Banner from './componets/Banner';
import Header from './componets/Header';
import { GlobalStyle } from './styles';

function App() {
    return (
        <>
            <GlobalStyle />
            <div className="Container">
                <Header />
            </div>
            <Banner />
        </>
    );
}

export default App;
