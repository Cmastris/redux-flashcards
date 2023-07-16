import { createSlice } from "@reduxjs/toolkit";

export const cards = createSlice({
  name: 'cards',
  initialState: {cards: {}},
  reducers: {
    addCard(state, action) {
      const { id, front, back } = action.payload;
      state.cards[id] = {
        id: id,
        front: front,
        back: back
      };
    }
  }
});


export const selectCards = (state) => state.cards.cards;
export const { addCard } = cards.actions;

export default cards.reducer;
