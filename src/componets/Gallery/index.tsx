import Section from '../Section';

import { Items, Item, Action, Modal, ModalContent } from './styles';

import zelda from '../../assets/images/zelda.png';
import resident from '../../assets/images/banner-homem-aranha.png';

import iconPlay from '../../assets/images/play.png';
import iconZoom from '../../assets/images/zoom.png';
import iconClose from '../../assets/images/fechar.png';
import { useState } from 'react';
import { GalleryItem } from '../../pages/Home';

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
    itens: GalleryItem[];
};

interface ModalState extends GalleryItem {
    isVisible: boolean;
}

const Gallery = ({ defaultCover, name, itens }: Props) => {
    const [modal, setModal] = useState<ModalState>({
        isVisible: false,
        type: 'image',
        url: ''
    });

    const getMediaCover = (item: GalleryItem) =>
        item.type === 'image' ? item.url : defaultCover;

    const getMediaIcon = (item: GalleryItem) =>
        item.type === 'image' ? iconZoom : iconPlay;

    const closeModal = () =>
        setModal({
            isVisible: false,
            type: 'image',
            url: ''
        });

    return (
        <>
            <Section title="Galeria" background="black">
                <Items>
                    {itens.map((item, index) => (
                        <Item
                            onClick={() => {
                                setModal({
                                    isVisible: true,
                                    type: item.type,
                                    url: item.url
                                });
                            }}
                            key={item.url}
                        >
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
            <Modal className={!modal.isVisible ? '' : 'visible'}>
                <ModalContent className={'Container'}>
                    <header>
                        <h4>{name}</h4>
                        <img
                            onClick={() => closeModal()}
                            src={iconClose}
                            alt="Ícone fechar"
                        />
                    </header>{' '}
                    {modal.type === 'image' ? (
                        <img src={modal.url} />
                    ) : (
                        <iframe frameBorder={0} src={modal.url} />
                    )}
                </ModalContent>
                <div className="overlay" onClick={() => closeModal()}></div>
            </Modal>
        </>
    );
};

export default Gallery;
