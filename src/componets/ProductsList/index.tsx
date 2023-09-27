import Product from '../Product';
import Loader from '../Loader';
import { List } from './styles';
import { Container } from '../Section/styles';

import { parseToBrl } from '../../utils';

export type Props = {
    title: string;
    background: 'gray' | 'black';
    games?: Game[];
    id?: string;
    isLoading: boolean;
};

const ProductsList = ({ title, background, games, id, isLoading }: Props) => {
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

    if (isLoading) return <Loader />;

    return (
        <Container id={id} background={background}>
            <div className="Container">
                <h2>{title}</h2>
                <List>
                    {games &&
                        games.map((game) => (
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
