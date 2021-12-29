import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {fetchPlants} from '../actions/plantActions';
import Plant from './Plant';

const PlantList = () => {
    const dispatch = useDispatch();
    const {plants} = useSelector(state => state.plant)

    useEffect(() => {
        dispatch(fetchPlants());
    }, [dispatch]);

    return (
        <>
            <div className='row'>
                {plants.map((p, i) => (
                    <Plant
                        key={i}
                        id={p.id}
                        image={p.image}
                        plantName={p.plantName}
                        status={p.status}
                        time={p.lastWateredAt}
                    />
                ))}
            </div>
        </>
    )
}

export default PlantList;
