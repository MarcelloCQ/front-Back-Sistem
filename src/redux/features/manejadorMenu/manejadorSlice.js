import { createSlice } from "@reduxjs/toolkit";

export const manejadorSlice = createSlice({
  name: 'manejadorMenu',
  initialState: {manejador: "inactive"},
  reducers: {
    manejadorTrue: (state, action) => {
      state.manejador = action.payload
    }
  }
})

export const { manejadorTrue } = manejadorSlice.actions;

export default manejadorSlice.reducer;