import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchQuote } from "../API/quoteAPI";

export const fetchQuotes = createAsyncThunk(
    "quote/fetchQuote",
    async function (_, { rejectWithValue, dispatch }) {
        try {
            const response = await fetchQuote();
            // dispatch(changeQuote())
            return response;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

const  quoteSlice = createSlice({
    name: 'quote',
    initialState : {
        quote: '',
        author: '',
        lastQuotes: [],
        status: null,
        error: null,
    },
    reducers: {
      },
    extraReducers: {
        [fetchQuotes.pending]: (state) => {
            // state.quote = '';
            state.status = "loading";
            state.error = null;
        },
        [fetchQuotes.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.quote = action.payload.content;
            state.author = action.payload.author;
            state.lastQuotes.push(action.payload.content);
        },
        [fetchQuotes.rejected]: (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
            console.log(action.payload);
        },
    }
})
export const {changeQuote} = quoteSlice.actions;
export default  quoteSlice.reducer;