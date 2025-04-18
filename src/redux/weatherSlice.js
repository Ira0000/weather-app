import { createSlice } from "@reduxjs/toolkit";
import { getWeatherByCity } from "./weatherOps";

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const slice = createSlice({
  name: "weather",
  initialState: {
    city: null,
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWeatherByCity.pending, handlePending)
      .addCase(getWeatherByCity.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload.list;
      })
      .addCase(getWeatherByCity.rejected, handleRejected);
  },
});

export const selectWeatherByCity = (state) => state.weather.items;
export const selectLoading = (state) => state.weather.loading;
export const selectError = (state) => state.weather.error;

export const weatherSlice = slice.reducer;
