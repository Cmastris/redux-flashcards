import { createSlice } from "@reduxjs/toolkit";

import { addQuizId } from "../topics/topicsSlice";

export const quizzes = createSlice({
  name: 'quizzes',
  initialState: {quizzes: {}},
  reducers: {
    addQuiz(state, action) {
      const { id, topicId, name, cardIds } = action.payload;
      state.quizzes[id] = {
        id: id,
        topicId: topicId,
        name: name,
        cardIds: cardIds
      };
    }
  }
});

export const createQuiz = payload => {
  return (dispatch) => {
    const { id, topicId, name, cardIds} = payload;
    dispatch(addQuiz({
      id: id,
      topicId: topicId,
      name: name,
      cardIds: cardIds
    }));
    
    dispatch(addQuizId({
      quizId: id,
      topicId: topicId
    }));
  }
};

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzes.actions;

export default quizzes.reducer;
