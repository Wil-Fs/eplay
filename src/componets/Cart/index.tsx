import Button from '../Button';
import * as S from './styles';

import Tag from '../Tag';
import { useSelector, useDispatch } from 'react-redux';
import { RootReducer } from '../../store';
import { closeCart, remove } from '../../store/reducers/cart';
import { parseToBrl } from '../../utils';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { isOpen, itens } = useSelector((state: RootReducer) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getTotalPrice = () => {
        let totalPrice = 0;

        itens.map((price) => (totalPrice += Number(price.prices.current)));

        return totalPrice;
    };

    const gotToCheckout = () => {
        dispatch(closeCart());
        navigate('/checkout');
    };

    return (
        <S.CartContainer className={!isOpen ? '' : 'isOpen'}>
            <S.Overlay onClick={() => dispatch(closeCart())} />
            <S.SideBar>
                <S.ProducList>
                    {itens.map((game) => (
                        <S.Item key={game.id}>
                            <img
                                className={'game'}
                                src={game.media.thumbnail}
                            />
                            <div>
                                <h3>{game.name}</h3>
                                <Tag>{game.details.system}</Tag>
                                <Tag>{game.details.category}</Tag>
                                <span>{parseToBrl(game.prices.current)}</span>
                            </div>
                            <button
                                onClick={() => dispatch(remove(game.id))}
                                className={'iconClose'}
                            />
                        </S.Item>
                    ))}
                </S.ProducList>
                <S.Quantity>{itens.length} jogos(s) no carrinho</S.Quantity>
                <S.Prices>
                    Total de {parseToBrl(getTotalPrice())}{' '}
                    <span>Em até 6x sem juros</span>
                </S.Prices>
                <Button
                    title="clique aqui para continar com a compra"
                    type="button"
                    onClick={gotToCheckout}
                >
                    Continuar com a compra
                </Button>
            </S.SideBar>
        </S.CartContainer>
    );
};

export default Cart;
