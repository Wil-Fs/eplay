export const parseToBrl = (amount = 0) =>
    new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(amount);

export const getTotalPrice = (itens: Game[]) => {
    let totalPrice = 0;

    itens.map((price) => (totalPrice += Number(price.prices.current)));

    return totalPrice;
};
