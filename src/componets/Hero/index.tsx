import Button from '../Button';
import Tag from '../Tag';
import * as S from './styles';

const Hero = () => (
    <S.Banner>
        <div className="Container">
            <div>
                <Tag>RPG</Tag>
                <Tag>PS5</Tag>
            </div>
            <S.Infos>
                <h2>Hogwarts Legacy</h2>
                <p>
                    <span> De R$ 250,00</span>
                    Por R$ 190,00
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
