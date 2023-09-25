import Product from '../Product';

import { List } from './styles';
import { Container } from '../Section/styles';
import { Game } from '../../pages/Home';
import { parseToBrl } from '../../utils';

export type Props = {
    title: string;
    background: 'gray' | 'black';
    games: Game[];
    id?: string;
};

const ProductsList = ({ title, background, games, id }: Props) => {
    const getGameTags = (game: Game) => {
        const tags = [];

        if (game.release_date) {
            tags.push(game.release_date);
        }

        if (game.prices.discount) {
            tags.push(`${game.prices.discount}%`);
        }

        if (game.prices.current) {
            tags.push(parseToBrl(game.prices.current));
        }

        return tags;
    };

    return (
        <Container id={id} background={background}>
            <div className="Container">
                <h2>{title}</h2>
                <List>
                    {games.map((game) => (
                        <Product
                            key={game.id}
                            id={game.id}
                            category={game.details.category}
                            description={game.description}
                            image={game.media.thumbnail}
                            infos={getGameTags(game)}
                            system={game.details.system}
                            title={game.name}
                        />
                    ))}
                </List>
            </div>
        </Container>
    );
};

export default ProductsList;
