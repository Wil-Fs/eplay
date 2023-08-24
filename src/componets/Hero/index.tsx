import { Game } from '../../pages/Home';
import Button from '../Button';
import { formatPrice } from '../ProductsList';
import Tag from '../Tag';
import * as S from './styles';

export type Props = {
    game: Game;
};

const Hero = ({ game }: Props) => (
    <S.Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
        <div className="Container">
            <div>
                <Tag>{game.details.category}</Tag>
                <Tag>{game.details.system}</Tag>
            </div>
            <S.Infos>
                <h2>{game.name}</h2>
                <p>
                    <span> De {formatPrice(game.prices.old)}</span>
                    Por {formatPrice(game.prices.current)}
                </p>
                <Button
                    type="button"
                    title="Clicle aqui para adicionar este jogo ao carrinho"
                    variant="primary"
                >
                    Adicionar ao carrinho
                </Button>
            </S.Infos>
        </div>
    </S.Banner>
);

export default Hero;
