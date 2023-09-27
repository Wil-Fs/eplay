import * as S from './styles';

import Tag from '../Tag';

import Button from '../Button';

import { useGetFeaturedGameQuery } from '../../services/api';
import { parseToBrl } from '../../utils';
import Loader from '../Loader';

const Banner = () => {
    const { data: game } = useGetFeaturedGameQuery();

    if (!game) {
        return <Loader />;
    }

    return (
        <S.Image style={{ backgroundImage: `url(${game?.media.cover})` }}>
            <div className="Container">
                <Tag size={'big'}>Destaque do dia</Tag>
                <div>
                    <S.Title>{game?.name}</S.Title>
                    <S.Price>
                        De <span>{parseToBrl(game?.prices.old)}</span> <br />
                        por apenas {parseToBrl(game?.prices.current)}
                    </S.Price>
                </div>
                <Button
                    type={'link'}
                    to={`/product/${game.id}`}
                    title={'Clique aquie para aproveitar esta oferta'}
                >
                    Aproveitar
                </Button>
            </div>
        </S.Image>
    );
};

export default Banner;
