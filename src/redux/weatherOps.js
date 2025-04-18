import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { env } from "../env";

export const weatherApi = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
});

export const getWeatherByCity = createAsyncThunk(
  "weather/fetchByCity",
  async ({ city }, thunkAPI) => {
    try {
      const response = await weatherApi.get(
        `/forecast?q=${city}&appid=${env.API_KEY}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
