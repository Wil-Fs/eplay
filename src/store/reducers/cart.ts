import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Game } from '../../pages/Home';

type CartState = {
    itens: Game[];
    isOpen: boolean;
};

const initialState: CartState = {
    itens: [],
    isOpen: false
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Game>) => {
            const game = state.itens.find(
                (item) => item.id === action.payload.id
            );

            !game
                ? state.itens.push(action.payload)
                : alert('O jogo já foi adicionado ao carrinho');
        },
        remove: (state, action: PayloadAction<number>) => {
            state.itens = state.itens.filter(
                (item) => item.id !== action.payload
            );
        },
        openCart: (state) => {
            state.isOpen = true;
        },
        closeCart: (state) => {
            state.isOpen = false;
        }
    }
});

export const { add, openCart, closeCart, remove } = cartSlice.actions;
export default cartSlice.reducer;
