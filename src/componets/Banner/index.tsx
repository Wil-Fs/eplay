import { Imagem, Titulo, Preco } from './styles';

import Tag from '../Tag';

import Button from '../Button';

import { formatPrice } from '../ProductsList';

import { useGetFeaturedGameQuery } from '../../services/api';

const Banner = () => {
    const { data: game, isLoading } = useGetFeaturedGameQuery();

    if (!game) {
        return <h3>Carregando...</h3>;
    }

    return (
        <Imagem style={{ backgroundImage: `url(${game?.media.cover})` }}>
            <div className="Container">
                <Tag size={'big'}>Destaque do dia</Tag>
                <div>
                    <Titulo>{game?.name}</Titulo>
                    <Preco>
                        De <span>{formatPrice(game?.prices.old)}</span> <br />
                        por apenas {formatPrice(game?.prices.current)}
                    </Preco>
                </div>
                <Button
                    type={'link'}
                    to={`/product/${game.id}`}
                    title={'Clique aquie para aproveitar esta oferta'}
                >
                    Aproveitar
                </Button>
            </div>
        </Imagem>
    );
};

export default Banner;
