import { useParams } from 'react-router-dom';
import Hero from '../../componets/Hero';
import Section from '../../componets/Section';
import Gallery from '../../componets/Gallery';

import { useGetGameQuery } from '../../services/api';
import Loader from '../../componets/Loader';

type GameParams = {
    id: string;
};

const Product = () => {
    const { id } = useParams() as GameParams;

    const { data: game } = useGetGameQuery(id);

    if (!game) {
        return <Loader />;
    }

    return (
        <>
            <Hero game={game} />
            <Section title="Sobre o jogo" background="black">
                <p>{game.description}</p>
            </Section>
            <Section title="Mais detalhes" background="gray">
                <p>
                    <b>Plataforma:</b> {game.details.system} <br />
                    <b>Desenvolvedor:</b> {game.details.developer} <br />
                    <b>Editora:</b> {game.details.publisher} <br />
                    <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas,
                    incluindo {game.details.languages.join(', ')}, entre outros.
                    As opções de áudio e legendas podem ser ajustadas nas
                    configurações do jogo.
                </p>
            </Section>
            <Gallery
                name={game.name}
                defaultCover={game.media.cover}
                itens={game.media.gallery}
            />
        </>
    );
};

export default Product;
