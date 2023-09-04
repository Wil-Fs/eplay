import { Link } from 'react-router-dom';

import { HeaderBar, Links, LinkItem, LinkCart } from './styles';

import logoHeader from '../../assets/images/logo.svg';
import logoCarrinho from '../../assets/images/carrinho.svg';
import { openCart } from '../../store/reducers/cart';

import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../store';

const Header = () => {
    const dispatch = useDispatch();
    const { itens } = useSelector((state: RootReducer) => state.cart);

    return (
        <HeaderBar>
            <div>
                <Link to={'/'}>
                    <img src={logoHeader} alt="Logo EPLAY" />
                </Link>
                <nav>
                    <Links>
                        <LinkItem>
                            <Link to={'/categories'}>Categorias</Link>
                        </LinkItem>
                        <LinkItem>
                            <a href="#">Novidades</a>
                        </LinkItem>
                        <LinkItem>
                            <a href="#">Promoções</a>
                        </LinkItem>
                    </Links>
                </nav>
            </div>
            <LinkCart onClick={() => dispatch(openCart())}>
                {itens.length} - Produtos{' '}
                <img src={logoCarrinho} alt="Carrinho icone" />
            </LinkCart>
        </HeaderBar>
    );
};

export default Header;
