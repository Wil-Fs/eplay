import ProductsList from '../../componets/ProductsList';

import {
    useGetActionGamesQuery,
    useGetEsportsGamesQuery,
    useGetFightGamesQuery,
    useGetRPGGamesQuery,
    useGetSimulationGamesQuery
} from '../../services/api';

const Categories = () => {
    const { data: gamesAcao } = useGetActionGamesQuery();
    const { data: gamesEsportes } = useGetEsportsGamesQuery();
    const { data: gamesLuta } = useGetFightGamesQuery();
    const { data: gamesRPG } = useGetRPGGamesQuery();
    const { data: gamesSimulacao } = useGetSimulationGamesQuery();

    if (gamesAcao && gamesEsportes && gamesLuta && gamesRPG && gamesSimulacao) {
        return (
            <>
                <ProductsList games={gamesRPG} title="RPG" background="black" />
                <ProductsList
                    games={gamesAcao}
                    title="Ação"
                    background="gray"
                />
                <ProductsList
                    games={gamesEsportes}
                    title="Esportes"
                    background="black"
                />
                <ProductsList
                    games={gamesLuta}
                    title="Luta"
                    background="gray"
                />
                <ProductsList
                    games={gamesSimulacao}
                    title="Simulação"
                    background="black"
                />
            </>
        );
    }

    return <h3>Carregando...</h3>;
};

export default Categories;
