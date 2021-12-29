import plantService from '../api/plantsService';
import {setLoading, setPlants} from '../reducers/plantSlice';

export const fetchPlants = () => async dispatch => {
    try {
        dispatch(setLoading(true));
        const res = await plantService.get('/plants');
        dispatch(setPlants(res.data));
        dispatch(setLoading(false));
    } catch {
        dispatch(setLoading(false));
    }
};
export const startWatering = plantId => async dispatch => {
    try {
        const res = await plantService.put(`/plants/${plantId}`, {status: true});
        dispatch(setPlants(res.data));
    } catch {
        console.log("Unexpected error occured")
    }
};

export const stopWatering = plantId => async dispatch => {
    try {
        const res = await plantService.put(`/plants/${plantId}`, {status: false, lastWateredAt: new Date().toISOString()});
        dispatch(setPlants(res.data));
    } catch {
        console.log("Unexpected error occured")
    }
};