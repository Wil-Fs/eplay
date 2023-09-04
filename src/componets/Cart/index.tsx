import Button from '../Button';
import {
    Overlay,
    CartContainer,
    SideBar,
    ProducList,
    Prices,
    Quantity,
    Item
} from './styles';

import Tag from '../Tag';
import { useSelector, useDispatch } from 'react-redux';
import { RootReducer } from '../../store';
import { closeCart, remove } from '../../store/reducers/cart';
import { formatPrice } from '../ProductsList';

const Cart = () => {
    const { isOpen, itens } = useSelector((state: RootReducer) => state.cart);
    const dispatch = useDispatch();

    const getTotalPrice = () => {
        let totalPrice = 0;

        itens.map((price) => (totalPrice += Number(price.prices.current)));

        return totalPrice;
    };

    return (
        <CartContainer className={!isOpen ? '' : 'isOpen'}>
            <Overlay onClick={() => dispatch(closeCart())} />
            <SideBar>
                <ProducList>
                    {itens.map((game) => (
                        <Item key={game.id}>
                            <img
                                className={'game'}
                                src={game.media.thumbnail}
                            />
                            <div>
                                <h3>{game.name}</h3>
                                <Tag>{game.details.system}</Tag>
                                <Tag>{game.details.category}</Tag>
                                <span>{formatPrice(game.prices.current)}</span>
                            </div>
                            <button
                                onClick={() => dispatch(remove(game.id))}
                                className={'iconClose'}
                            />
                        </Item>
                    ))}
                </ProducList>
                <Quantity>{itens.length} jogos(s) no carrinho</Quantity>
                <Prices>
                    Total de {formatPrice(getTotalPrice())}{' '}
                    <span>Em até 6x sem juros</span>
                </Prices>
                <Button
                    title="clique aqui para continar com a compra"
                    type="button"
                >
                    Continuar com a compra
                </Button>
            </SideBar>
        </CartContainer>
    );
};

export default Cart;
