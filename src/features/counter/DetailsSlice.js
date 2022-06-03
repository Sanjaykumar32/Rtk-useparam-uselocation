import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const detailsSlice = createSlice({
  name: "details",
  initialState,

  reducers: {
    addValue: (state, action) => {
      state.data.push(action.payload);
    },
    editValue: (state, action) => {
      const { id, name, amount } = action.payload;
      // console.log(action.payload, "edit dispatch data");
      state.data.filter((el) => {
        if (el.id === action?.payload?.id) {
          el.name = action?.payload?.name;
          el.amount = action?.payload?.amount;
        }
      });
      // console.log(state.data, " state.data-=-=-=-=");
    },
    deleteitem: (state, action) => {
      const { id } = action.payload;
      // console.log("delete item id", id);
      state.data = state.data.filter((value) => value.id !== id);
    },
  },
});

export const { addValue, editValue, deleteitem } = detailsSlice.actions;

export default detailsSlice.reducer;
