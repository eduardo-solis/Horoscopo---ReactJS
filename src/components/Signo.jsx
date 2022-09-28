import React from 'react';
import PropTypes from 'prop-types';

const Signo = ({img, sign, dates, text}) => {
    return (
        <>
        
        <div className='container-fluid mt-2'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='card'>
                        <h5 className='card-header'>Simbolo</h5>
                        <img src={img} className='m-2 img-fluid rounded mx-auto d-block' width="250px" height="250px" alt="imagen-signo"/>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='card'>
                        <h5 className='card-header'>{sign}</h5>
                        <div className='card-body'>
                            <h5 className='card-title'>{dates}</h5>
                            <p className='card-text'>
                                {text}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    );
}

Signo.propTypes = {
    img: PropTypes.string,
    sign: PropTypes.string,
    dates : PropTypes.string,
    text : PropTypes.string
}

export default Signo