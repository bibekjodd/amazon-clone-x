import { createSlice } from '@reduxjs/toolkit'

export const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        items: []
    },
    reducers: {
        addToBasket: (state, action) => {
            state.items = [
                ...state.items,
                action.payload
            ];
            localStorage.setItem('amazon', JSON.stringify(state.items));
        },
        removeFromBasket: (state, action) => {
            const index = state.items.findIndex(basketItem => basketItem.id === action.payload.id)
            let newBasket = [...state.items];
            if (index >= 0) {
                newBasket.splice(index, 1);
            }
            else {
                console.warn(
                    `Can't remove product (id: ${action.payload.id}) as it is not in basket`
                )
            }
            state.items = [
                ...newBasket
            ];
            localStorage.setItem('amazon', JSON.stringify(state.items));
        },

    }

});

export const { addToBasket, removeFromBasket } = basketSlice.actions;
export const selectItems = (state) => state.basket.items
export const selectTotal = (state) => state.basket.items.reduce((total, item) => total + item.price, 0)
export default basketSlice.reducer;