import {configureStore} from '@reduxjs/toolkit';
import plantSlice from './reducers/plantSlice';

export default configureStore({
    reducer: {
        plant: plantSlice
    }
})