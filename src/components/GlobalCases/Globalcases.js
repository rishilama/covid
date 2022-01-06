import React from 'react'

function Globalcases({ data }) {
    return (
        <div className="grid">
            <div className="flex-container">
                <div className="left-side">
                    <img className="global__track-image" src="/images/Group 17.png" alt="cases" />
                </div>
                <div className="right-side">
                    <p className="track__subtitle">Total Coronavirus Cases</p>
                    <h2 className="dynamic-track__heading">{data.cases}</h2>
                </div>
            </div>
        </div>
    )
}

export default Globalcases
