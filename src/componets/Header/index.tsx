import { HeaderBar, Links, LinkItem, LinkCart } from './styles';

import logoHeader from '../../assets/images/logo.svg';
import logoCarrinho from '../../assets/images/carrinho.svg';

const Header = () => (
    <HeaderBar>
        <div>
            <img src={logoHeader} alt="Logo EPLAY" />
            <nav>
                <Links>
                    <LinkItem>
                        <a href="#">Categorias</a>
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
        <LinkCart href="#">
            0 - Produtos <img src={logoCarrinho} alt="Carrinho icone" />
        </LinkCart>
    </HeaderBar>
);

export default Header;
