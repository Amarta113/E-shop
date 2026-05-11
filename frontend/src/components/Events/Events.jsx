import React from 'react'
import styles from '../../styles/styles';
import EventCard from './EventCard'

const Events = () => {
    return (
        <div>
            <div className={`${styles.section}`}>
                <div className={`${styles.heading}`}>
                    <h1 className='font-[800] text-[2rem] font-[Roboto]'>Popular Events</h1>
                </div>
                <div className="w-full grid mb-14">
                    <EventCard/>
                </div>
            </div>
        </div>
    )
}

export default Events;