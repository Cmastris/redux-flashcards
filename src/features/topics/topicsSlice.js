import { createSlice } from "@reduxjs/toolkit";

export const topics = createSlice({
  name: 'topics',
  initialState: {topics: {}},
  reducers: {
    addTopic(state, action) {
      const { id, name, icon } = action.payload;
      state.topics[id] = {
        id: id,
        name: name,
        icon: icon,
        quizIds: []
      };
    }
  }
});


export const selectTopics = (state) => state.topics.topics;
export const { addTopic } = topics.actions;

export default topics.reducer;
