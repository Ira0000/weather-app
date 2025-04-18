import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { env } from "../env";

export const weatherApi = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
});

const resultLimitation = 8;

export const getWeatherByCity = createAsyncThunk(
  "weather/fetchByCity",
  async ({ city }, thunkAPI) => {
    try {
      const response = await weatherApi.get(
        `/forecast?q=${city}&cnt=${resultLimitation}&appid=${env.API_KEY}&units=metric`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
