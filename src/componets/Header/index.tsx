import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import * as S from './styles';

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
        <S.HeaderBar>
            <S.HeaderRow>
                <div>
                    <S.Hamburguer onClick={() => setNavMenu(!navMenu)}>
                        <span />
                        <span />
                        <span />
                    </S.Hamburguer>
                    <Link to={'/'}>
                        <h1>
                            <img src={logoHeader} alt="EPLAY" />
                        </h1>
                    </Link>
                    <nav>
                        <S.Links>
                            <S.LinkItem>
                                <Link
                                    title="Clique aqui para acessar a página de cartegorias"
                                    to={'/categories'}
                                >
                                    Categorias
                                </Link>
                            </S.LinkItem>
                            <S.LinkItem>
                                <HashLink
                                    to={'/#coming-soon'}
                                    title="Clique aqui para acessar a página de novidades"
                                >
                                    Novidades
                                </HashLink>
                            </S.LinkItem>
                            <S.LinkItem>
                                <HashLink
                                    to={'/#on-sale'}
                                    title="Clique aqui para acessar a página de categorias"
                                >
                                    Promoções
                                </HashLink>
                            </S.LinkItem>
                        </S.Links>
                    </nav>
                </div>
                <S.LinkCart role="button" onClick={() => dispatch(openCart())}>
                    {itens.length}
                    <span> - Produtos </span>
                    <img src={logoCarrinho} alt="Carrinho icone" />
                </S.LinkCart>
            </S.HeaderRow>
            <S.NavMobile className={navMenu ? 'isOpen' : ''}>
                <S.Links>
                    <S.LinkItem>
                        <Link
                            title="Clique aqui para acessar a página de cartegorias"
                            to={'/categories'}
                            onClick={() => setNavMenu(false)}
                        >
                            Categorias
                        </Link>
                    </S.LinkItem>
                    <S.LinkItem>
                        <HashLink
                            to={'/#coming-soon'}
                            title="Clique aqui para acessar a página de novidades"
                            onClick={() => setNavMenu(false)}
                        >
                            Novidades
                        </HashLink>
                    </S.LinkItem>
                    <S.LinkItem>
                        <HashLink
                            to={'/#on-sale'}
                            title="Clique aqui para acessar a página de categorias"
                            onClick={() => setNavMenu(false)}
                        >
                            Promoções
                        </HashLink>
                    </S.LinkItem>
                </S.Links>
            </S.NavMobile>
        </S.HeaderBar>
    );
};

export default Header;
