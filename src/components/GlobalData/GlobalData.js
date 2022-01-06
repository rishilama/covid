import React from 'react';
import axios from 'axios';
import Globalcases from '../GlobalCases/Globalcases';
import GlobalRecovered from '../GlobalRecovered/GlobalRecovered';
import GlobalDeaths from '../GlobalDeaths/GlobalDeaths';

function GlobalData() {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        axios.get('https://corona.lmao.ninja/v3/covid-19/all')
            .then(resp => {
                setData(resp.data);
                console.log(resp.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <div className="global-cases__container">
            <div className="container">
                <div className="global-content">

                    <div className="grid">
                        <div className="flex-container">
                            <div className="left-side">
                                <img className="global__track-image" src="/images/Group 13.png" alt="global" />
                            </div>
                            <div className="right-side">
                                <p className="track__subtitle">Stats Overview</p>
                                <h2 className="static-track__heading">Global</h2>
                            </div>
                        </div>
                    </div>

                    <Globalcases data={data} />

                    <GlobalRecovered data={data} />

                    <GlobalDeaths data={data} />


                </div>
            </div>
        </div>
    )
}

export default GlobalData
