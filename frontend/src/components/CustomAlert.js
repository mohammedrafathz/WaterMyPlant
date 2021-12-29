import React, {useState} from 'react'
import PropTypes from 'prop-types';
import {Alert} from 'reactstrap';

const CustomAlert = ({message}) => {
    return (
        <>
            <Alert color="info">
                {message}
            </Alert>
        </>
    )
}
CustomAlert.propTypes = {
    message: PropTypes.string.isRequired
}

export default CustomAlert;
