import Section from '../Section';

import * as S from './styles';

import iconPlay from '../../assets/images/play.png';
import iconZoom from '../../assets/images/zoom.png';
import iconClose from '../../assets/images/fechar.png';
import { useState } from 'react';
import { GalleryItem } from '../../pages/Home';

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
                <S.Items>
                    {itens.map((item, index) => (
                        <S.Item
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
                            <S.Action>
                                <img
                                    src={getMediaIcon(item)}
                                    alt="Clique para maximizar a imagem"
                                />
                            </S.Action>
                        </S.Item>
                    ))}
                </S.Items>
            </Section>
            <S.Modal className={!modal.isVisible ? '' : 'visible'}>
                <S.ModalContent className={'Container'}>
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
                </S.ModalContent>
                <div className="overlay" onClick={() => closeModal()}></div>
            </S.Modal>
        </>
    );
};

export default Gallery;
