import Banner from '../../componets/Banner';

import ProductsList from '../../componets/ProductsList';

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api';

const Home = () => {
    const { data: onSaleGames, isLoading: isLoadingSale } = useGetOnSaleQuery();
    const { data: soonGames, isLoading: isLoadingSoon } = useGetSoonQuery();

    return (
        <>
            <Banner />
            <ProductsList
                isLoading={isLoadingSale}
                games={onSaleGames}
                title="Promoções"
                background="gray"
                id={'on-sale'}
            />
            <ProductsList
                isLoading={isLoadingSoon}
                games={soonGames}
                title="Em breve"
                background="black"
                id={'coming-soon'}
            />
        </>
    );
};

export default Home;
