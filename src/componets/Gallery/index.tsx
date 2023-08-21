import Section from '../Section';

import { Items, Item, Action, Modal, ModalContent } from './styles';

import zelda from '../../assets/images/zelda.png';
import resident from '../../assets/images/banner-homem-aranha.png';

import iconPlay from '../../assets/images/play.png';
import iconZoom from '../../assets/images/zoom.png';
import iconClose from '../../assets/images/fechar.png';

type GalleryItem = {
    type: 'image' | 'video';
    url: string;
};

const mock: GalleryItem[] = [
    {
        type: 'image',
        url: zelda
    },
    {
        type: 'image',
        url: resident
    },
    {
        type: 'video',
        url: 'https://www.youtube.com/embed/C_IdgsdHwAo'
    }
];

type Props = {
    defaultCover: string;
    name: string;
};

const Gallery = ({ defaultCover, name }: Props) => {
    const getMediaCover = (item: GalleryItem) =>
        item.type === 'image' ? item.url : defaultCover;

    const getMediaIcon = (item: GalleryItem) =>
        item.type === 'image' ? iconZoom : iconPlay;

    return (
        <>
            <Section title="Galeria" background="black">
                <Items>
                    {mock.map((item, index) => (
                        <Item key={item.url}>
                            <img
                                src={getMediaCover(item)}
                                alt={`Mídia ${index + 1} de ${name}`}
                            />
                            <Action>
                                <img
                                    src={getMediaIcon(item)}
                                    alt="Clique para maximizar a imagem"
                                />
                            </Action>
                        </Item>
                    ))}
                </Items>
            </Section>
            <Modal>
                <ModalContent className={'Container'}>
                    <header>
                        <h4>{name}</h4>
                        <img src={iconClose} alt="Ícone fechar" />
                    </header>
                    <img src={resident} />
                </ModalContent>
                <div className="overlay"></div>
            </Modal>
        </>
    );
};

export default Gallery;
