import React from 'react'

function GlobalDeaths({ data }) {
    return (
        <div className="grid">
            <div className="flex-container">
                <div className="left-side">
                    <img className="global__track-image" src="/images/Group 17 (2).png" alt="deaths" />
                </div>
                <div className="right-side">
                    <p className="track__subtitle">Total Deaths</p>
                    <h2 className="dynamic-track__heading">{data.deaths}</h2>
                </div>
            </div>
        </div>
    )
}

export default GlobalDeaths