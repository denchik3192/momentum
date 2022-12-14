import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchQuote } from "../API/quoteAPI";

export const fetchQuotes = createAsyncThunk(
    "quote/fetchQuote",
    async function (_, { rejectWithValue, dispatch }) {
        try {
            console.log('1');
            const response = await fetchQuote();
            console.log(response);
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
        status: null,
        error: null,
    },
    reducers: {
        // changeQuote(state, action) {
        //     state.quote = action.payload;
        // },
      },
    extraReducers: {
        [fetchQuotes.pending]: (state) => {
            state.quote = '';
            state.status = "loading";
            state.error = null;
        },
        [fetchQuotes.fulfilled]: (state, action) => {
            console.log('2');
            state.status = "resolved";
            state.quote = action.payload.content;
            state.author = action.payload.author;
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