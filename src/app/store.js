import { configureStore } from "@reduxjs/toolkit";

import cardsReducer from "./../features/cards/cardsSlice";
import topicsReducer from "./../features/topics/topicsSlice";
import quizzesReducer from "./../features/quizzes/quizzesSlice";

export default configureStore({
  reducer: {
    cards: cardsReducer,
    topics: topicsReducer,
    quizzes: quizzesReducer
  },
});
