import { createSlice } from "@reduxjs/toolkit";

const InitialState = {
  data: {},
};

const addUser = createSlice({
  name: "user",
  initialState: InitialState,
  reducers: {
    setFetchStatus(state, action) {
      return {
        ...state,
        data: {
          ...state.data,
          status: action.payload,
        },
      };
    },
    setUser(state, action) {
      return {
        ...state,
        data: {
          ...state.data,
          user: action.payload,
        },
      };
    },
  },
});

export const { setFetchStatus, setUser } = addUser.actions;
export default addUser.reducer;
