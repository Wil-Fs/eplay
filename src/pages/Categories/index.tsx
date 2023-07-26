import Game from '../../models/Game';
import ProductsList from '../../componets/ProductsList';

import resident from '../../assets/images/resident.png';
import diablo from '../../assets/images/diablo.png';
import zelda from '../../assets/images/zelda.png';
import starWars from '../../assets/images/star_wars.png';

const promocoes: Game[] = [
    {
        id: 1,
        category: 'Ação',
        description:
            'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
        title: 'Resident Evil 4',
        system: 'Windows',
        infos: ['10%', 'R$ 250,00'],
        image: resident
    },
    {
        id: 2,
        category: 'Ação',
        description:
            'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
        title: 'Diablo 4',
        system: 'PS5',
        infos: ['5%', 'R$ 290,00'],
        image: diablo
    },
    {
        id: 3,
        category: 'Ação',
        description:
            'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
        title: 'Zelda',
        system: 'Windows',
        infos: ['10%', 'R$ 250,00'],
        image: zelda
    },
    {
        id: 4,
        category: 'Ação',
        description:
            'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
        title: 'Star Wars',
        system: 'Windows',
        infos: ['10%', 'R$ 250,00'],
        image: starWars
    }
];

const emBreve: Game[] = [
    {
        id: 1,
        category: 'Ação',
        description:
            'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
        title: 'Resident Evil 4',
        system: 'Windows',
        infos: ['17/05'],
        image: resident
    },
    {
        id: 2,
        category: 'Ação',
        description:
            'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
        title: 'Diablo 4',
        system: 'PS5',
        infos: ['17/05'],
        image: diablo
    },
    {
        id: 3,
        category: 'Ação',
        description:
            'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
        title: 'Zelda',
        system: 'Windows',
        infos: ['17/05'],
        image: zelda
    },
    {
        id: 4,
        category: 'Ação',
        description:
            'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
        title: 'Star Wars',
        system: 'Windows',
        infos: ['17/05'],
        image: starWars
    }
];

const Categories = () => (
    <>
        <ProductsList games={promocoes} title="RPG" background="gray" />
        <ProductsList games={emBreve} title="Ação" background="black" />
        <ProductsList games={promocoes} title="Aventura" background="gray" />
        <ProductsList games={emBreve} title="FPS" background="black" />
    </>
);

export default Categories;
