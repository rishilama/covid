import React from 'react'

function GlobalRecovered({ data }) {
    return (
        <div className="grid">
            <div className="flex-container">
                <div className="left-side">
                    <img className="global__track-image" src="/images/Group 17 (1).png" alt="recovered" />
                </div>
                <div className="right-side">
                    <p className="track__subtitle">Total Recovered</p>
                    <h2 className="dynamic-track__heading">{data.recovered}</h2>
                </div>
            </div>
        </div>
    )
}

export default GlobalRecovered
