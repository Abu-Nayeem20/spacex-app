import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


// Fetch API
export const fetchLaunches = createAsyncThunk(
    'launches/fetchLaunches',
    async () => {
      const response = await fetch('https://api.spacexdata.com/v3/launches')
      .then(res=> res.json())
      return response
    }
);

const launchesSlice = createSlice({
    name: 'launches',
    initialState: {
        launches: [],
        status: 'idle'
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchLaunches.fulfilled, (state, action) => {
          state.launches = action.payload;
          state.status = 'success'
        })
        builder.addCase(fetchLaunches.pending, (state, action) => {
            state.status = 'pending';
        })
    },
    
});

export default launchesSlice.reducer;