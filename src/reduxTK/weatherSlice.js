import { SportsTennisOutlined } from "@material-ui/icons";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../API/API";

export const fetchWether = createAsyncThunk(
    'weather/fetchWether',
    async  function (url)  {
        const response = await fetchData(url);
        console.log(response);
        return response;
    }
);

const weatherSlise = createSlice({
    name: 'weather',
    initialState: {
        location: 'Mogilev',
        temperature: '',
        wind: '',
        humidity: '',
        pressure: '',
        description: '',
        status: null,
        error: null,
    },
    reducers: {
        changeLocation(state, action) {
            state.location = action.payload

        }

    } ,
    extraReducers: {
        [fetchWether.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchWether.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.temperature = action.payload.main.temp;
            state.wind = action.payload.wind.speed;
            state.humidity = action.payload.main.humidity; 
            state.pressure = action.payload.main.pressure; 
            state.description = action.payload.weather[0].description; 
        },
        [fetchWether.rejected]: (state, action) => {},
    }

});

const {} = weatherSlise.actions;

export default weatherSlise.reducer