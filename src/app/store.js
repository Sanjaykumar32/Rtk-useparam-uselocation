import { configureStore } from "@reduxjs/toolkit";
import DetailsSlice from "../features/counter/DetailsSlice";

export const store = configureStore({
  reducer: {
    details: DetailsSlice,
  },
});
