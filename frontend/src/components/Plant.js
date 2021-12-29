import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {startWatering, stopWatering} from '../actions/plantActions';

const Plant = ({image, plantName, status, time, id}) => {
    const dispatch = useDispatch();
    const [disableButton, setDisableButton] = useState(false);

    const handleWatering = () => {
        // update the state value
        dispatch(startWatering(id))
        setDisableButton(true);
        setTimeout(() => {
            dispatch(stopWatering(id))
        }, 10000)
        setTimeout(() => {
            setDisableButton(false);
        }, 40000)
    }

    const handleStopWatering = () => {
        dispatch(stopWatering(id))
    }

    return (
        <div className='col-4'>
            <div className="card text-white bg-success mb-3">
                <img src={image} className="card-img-top" style={{height: "300px"}} alt={plantName} />
                <div className="card-body">
                    <h5 className="card-title">{plantName}
                        {status ?
                            <small className='badge bg-primary rounded-pill' style={{float: 'right'}}>Watering</small> :
                            <small className='badge bg-info rounded-pill' style={{float: 'right'}}>Idle</small>}
                    </h5>
                    <p className="card-text"><small className="text-primary">Last watered at: {" "}{new Date(time).toLocaleTimeString()}</small></p>
                    {disableButton && <p className="card-text">Wait for 30 seconds to water again.</p>}
                    <button className="btn btn-primary me-3" disabled={disableButton} onClick={handleWatering}>Water Me</button>
                    {status && <button className="btn btn-danger" onClick={handleStopWatering}>Stop Watering</button>}
                </div>
            </div>
        </div>
    )
}

Plant.propTypes = {
    image: PropTypes.string.isRequired,
    plantName: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
    time: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}

export default Plant
