import { Imagem, Titulo, Preco } from './styles';

import bannerImg from '../../assets/images/banner-homem-aranha.png';
import Tag from '../Tag';

import Button from '../Button';

const Banner = () => (
    <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
        <div className="Container">
            <Tag size={'big'}>Destaque do dia</Tag>
            <Titulo>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Titulo>
            <Preco>
                De <span>R$ 250,00</span> <br />
                por apenas R$ 99,90
            </Preco>
            <Button
                type={'link'}
                to={'/produto'}
                title={'Clique aquie para aproveitar esta oferta'}
            >
                Aproveitar
            </Button>
        </div>
    </Imagem>
);

export default Banner;
