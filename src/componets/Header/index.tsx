import { Link } from 'react-router-dom';

import {
    HeaderBar,
    Links,
    LinkItem,
    LinkCart,
    Hamburguer,
    HeaderRow,
    NavMobile
} from './styles';

import logoHeader from '../../assets/images/logo.svg';
import logoCarrinho from '../../assets/images/carrinho.svg';
import { openCart } from '../../store/reducers/cart';

import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../store';
import { useState } from 'react';

const Header = () => {
    const dispatch = useDispatch();
    const { itens } = useSelector((state: RootReducer) => state.cart);

    const [navMenu, setNavMenu] = useState(false);

    return (
        <HeaderBar>
            <HeaderRow>
                <div>
                    <Hamburguer onClick={() => setNavMenu(!navMenu)}>
                        <span />
                        <span />
                        <span />
                    </Hamburguer>
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
                    {itens.length}
                    <span> - Produtos </span>
                    <img src={logoCarrinho} alt="Carrinho icone" />
                </LinkCart>
            </HeaderRow>
            <NavMobile className={navMenu ? 'isOpen' : ''}>
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
            </NavMobile>
        </HeaderBar>
    );
};

export default Header;
