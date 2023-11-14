const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    month: [],
    today: [],
}

const dataSlice = createSlice({
    name: 'dataUser',
    initialState,
    extraReducers: (builder) => {


    },
    reducers: {

    }
})

export const dataReducer = dataSlice.reducer;