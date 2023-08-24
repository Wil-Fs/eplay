import { Imagem, Titulo, Preco } from './styles';

import Tag from '../Tag';

import Button from '../Button';
import { useEffect, useState } from 'react';
import { Game } from '../../pages/Home';

import { formatPrice } from '../ProductsList';

const Banner = () => {
    const [game, setGame] = useState<Game>();

    useEffect(() => {
        fetch('https://fake-api-tau.vercel.app/api/eplay/destaque')
            .then((res) => res.json())
            .then((res) => setGame(res));
    }, []);

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
