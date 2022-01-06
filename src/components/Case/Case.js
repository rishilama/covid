import React from 'react'

function Case({ data }) {

    return (
        <div className="covid-container">
            <p className="country-name">
                <img className="flag" alt="flag" src={data.countryInfo.flag} />
                {data.country}
            </p>
            <div className="active-cases">
                <h4>Total Cases : <span>{data.cases}</span></h4>
                <h4>Total Recovered : <span>{data.recovered}</span></h4>
                <h4>Total Deaths : <span>{data.deaths}</span></h4>
                <h4>Today's Cases : <span>{data.todayCases}</span></h4>
                <h4>Today's Recovered : <span>{data.todayDeaths}</span></h4>
                <h4>Today's Deaths : <span>{data.todayRecovered}</span></h4>
            </div>
        </div>
    )
}

export default Case
