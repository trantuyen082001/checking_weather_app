import PropTypes from 'prop-types'
import locationIcon from './assets/location-pin.png';
import styles from './CurrentDay.module.css'


const CurrentDay = ({ weekday, date, location, temperature, weatherIcon, weatherDescription }) => (
    <div className='d-flex'>
        <div className={styles.img}></div>
        <div className={styles.gradient}></div>
        <div className={`${styles.cardInner} d-flex flex-column justify-content-between pt-3 pb-2 pl-2`}>
            <div>
                <h2 className={styles.title_weekday}>{weekday}</h2>
                <p className={styles.date_weekday}>{date}</p>
                <p className={styles.location_sub}>
                    <img width="10" height="15" src={locationIcon} className="mr-1" alt="location pin icon"/>
                    <span>{location}</span>
                </p>
            </div>
            <div>
                <img width="60" src={weatherIcon} alt=""/>
                <h2 className={styles.location_degree}>
                    <span>{temperature}</span> °C
                </h2>
                <h5 className={styles.weahter_desc}>{weatherDescription}</h5>
            </div>
        </div>
    </div>
)

CurrentDay.propTypes = {
    weekday: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    temperature: PropTypes.string.isRequired,
    weatherIcon: PropTypes.number.isRequired,
    weatherDescription: PropTypes.string.isRequired
}

export default CurrentDay