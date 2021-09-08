import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function Counter({publication = 0, publications = 0, backward, forward}) {
    return (
        <Fragment>
            <p>{publication + 1}/{publications}</p>
            <button onClick={backward} disabled={publication === 0}>Backward</button>
            <button onClick={forward} disabled={publication + 1 === publications}>Forward</button>
        </Fragment>
    );
}

Counter.propTypes = {
    publication: PropTypes.number,
    publications: PropTypes.number,
    backward: PropTypes.func.isRequired,
    forward: PropTypes.func.isRequired,
};

export default Counter;