import Loader from '../../componets/Loader';
import ProductsList from '../../componets/ProductsList';

import {
    useGetActionGamesQuery,
    useGetEsportsGamesQuery,
    useGetFightGamesQuery,
    useGetRPGGamesQuery,
    useGetSimulationGamesQuery
} from '../../services/api';

const Categories = () => {
    const { data: gamesAcao, isLoading: isLoadingAction } =
        useGetActionGamesQuery();
    const { data: gamesEsportes, isLoading: isLoadingSport } =
        useGetEsportsGamesQuery();
    const { data: gamesLuta, isLoading: isLoadingFight } =
        useGetFightGamesQuery();
    const { data: gamesRPG, isLoading: isLoadingRPG } = useGetRPGGamesQuery();
    const { data: gamesSimulacao, isLoading: isLoadingSimulation } =
        useGetSimulationGamesQuery();

    if (gamesAcao && gamesEsportes && gamesLuta && gamesRPG && gamesSimulacao) {
        return (
            <>
                <ProductsList
                    isLoading={isLoadingRPG}
                    games={gamesRPG}
                    title="RPG"
                    background="black"
                    id={'rpg'}
                />
                <ProductsList
                    isLoading={isLoadingAction}
                    games={gamesAcao}
                    title="Ação"
                    background="gray"
                    id={'action'}
                />
                <ProductsList
                    isLoading={isLoadingSport}
                    games={gamesEsportes}
                    title="Esportes"
                    background="black"
                    id={'sports'}
                />
                <ProductsList
                    isLoading={isLoadingFight}
                    games={gamesLuta}
                    title="Luta"
                    background="gray"
                    id={'fight'}
                />
                <ProductsList
                    isLoading={isLoadingSimulation}
                    games={gamesSimulacao}
                    title="Simulação"
                    background="black"
                    id={'simulation'}
                />
            </>
        );
    }

    return <Loader />;
};

export default Categories;
