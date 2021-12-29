import React from 'react';
import {Modal, ModalHeader, ModalBody, Progress} from 'reactstrap'
import {useDispatch, useSelector} from 'react-redux';
import {setLoading} from '../reducers/plantSlice';

const Spinner = () => {
    const dispatch = useDispatch();
    const {loading} = useSelector(state => state.plant)

    const handleToggle = () => {
        dispatch(setLoading(!loading));
    }

    return (
        <>
            <Modal
                toggle={handleToggle}
                backdrop={false}
                fullscreen="sm"
                size="sm"
                isOpen={loading}
            >
                <ModalHeader toggle={handleToggle}>
                    Loading...
                </ModalHeader>
                <ModalBody>
                    <Progress
                        animated
                        color="info"
                        value={100}
                    />
                </ModalBody>
            </Modal>
        </>
    )
}


export default Spinner
