import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../API/API";

export const fetchWether = createAsyncThunk(
  "weather/fetchWether",
  async function (url, { rejectWithValue, dispatch }) {
    try {
      const response = await fetchData(url);
      if (response.cod !== 200) {
        throw new Error("Server Error!");
      }
      dispatch(changeLocation(url))
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const weatherSlise = createSlice({
  name: "weather",
  initialState: {
    location: "Mogilev",
    temperature: "",
    wind: "",
    humidity: "",
    pressure: "",
    description: "",
    status: null,
    error: null,
  },
  reducers: {
    changeLocation(state, action) {
      state.location = action.payload;
    },
  },
  extraReducers: {
    [fetchWether.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchWether.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.temperature = Math.round(action.payload.main.temp);//?
      state.wind = action.payload.wind.speed;
      state.humidity = action.payload.main.humidity;
      state.pressure = action.payload.main.pressure;
      state.description = action.payload.weather[0].description;
      state.location = action.payload.name;
    },
    [fetchWether.rejected]: (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
    },
  },
});

export const {changeLocation} = weatherSlise.actions;

export default weatherSlise.reducer;
