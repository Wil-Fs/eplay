import { useDispatch } from 'react-redux';

import Button from '../Button';

import Tag from '../Tag';
import * as S from './styles';
import { add } from '../../store/reducers/cart';
import { parseToBrl } from '../../utils';

export type Props = {
    game: Game;
};

const Hero = ({ game }: Props) => {
    const dispatch = useDispatch();

    return (
        <S.Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
            <div className="Container">
                <div>
                    <Tag>{game.details.category}</Tag>
                    <Tag>{game.details.system}</Tag>
                </div>
                <S.Infos>
                    <h2>{game.name}</h2>
                    {game.prices.current && (
                        <>
                            <p>
                                {game.prices.discount && (
                                    <span>
                                        {' '}
                                        De {parseToBrl(game.prices.old)}
                                    </span>
                                )}
                                Por {parseToBrl(game.prices.current)}
                            </p>
                            <Button
                                onClick={() => dispatch(add(game))}
                                type="button"
                                title="Clicle aqui para adicionar este jogo ao carrinho"
                                variant="primary"
                            >
                                Adicionar ao carrinho
                            </Button>
                        </>
                    )}
                </S.Infos>
            </div>
        </S.Banner>
    );
};

export default Hero;
