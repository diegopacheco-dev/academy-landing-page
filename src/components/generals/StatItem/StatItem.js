import React from 'react'
import './StatItem.css'

const StatItem = ({number, caption}) => {
    return (
        <div className="stat-item">
            <p className="stat-item__number">{number}</p>
            <p className="stat-item__caption">{caption}</p>
        </div>
    )
}

export default StatItem
