import {createSlice} from '@reduxjs/toolkit';

export const plantSlice = createSlice({
    name: 'plants',
    initialState: {
        loading: false,
        plants: []
    },
    reducers: {
        setPlants: (state, {payload}) => {
            state.plants = payload
        },
        setLoading: (state, {payload}) => {
            state.loading = payload
        },
    }
})

export const {setPlants, setLoading} = plantSlice.actions;

export default plantSlice.reducer;