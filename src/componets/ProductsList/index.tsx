import Game from '../../models/Game';
import Product from '../Product';

import { List } from './styles';
import { Container } from '../Section/styles';

export type Props = {
    title: string;
    background: 'gray' | 'black';
    games: Game[];
};

const ProductsList = ({ title, background, games }: Props) => (
    <Container background={background}>
        <div className="Container">
            <h2>{title}</h2>
            <List>
                {games.map((game) => (
                    <Product
                        key={game.id}
                        category={game.category}
                        description={game.description}
                        image={game.image}
                        infos={game.infos}
                        system={game.system}
                        title={game.title}
                    />
                ))}
            </List>
        </div>
    </Container>
);

export default ProductsList;
