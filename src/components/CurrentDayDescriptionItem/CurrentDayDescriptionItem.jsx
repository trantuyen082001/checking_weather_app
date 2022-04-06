import React from 'react';
import PropTypes from 'prop-types'
import styles from './CurrentDayDescriptionItem.module.css'

const CurrentDayDescriptionItem = ({name, value, unit}) => (
    <div className={styles.container}>
        <p className={styles.title}>{name}</p>
        <p className={styles.value}>
            {value} {unit}
        </p>
    </div>
);

CurrentDayDescriptionItem.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired
}

export default CurrentDayDescriptionItem