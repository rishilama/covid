import React from 'react';
import { Link } from 'react-router-dom';

function Trackpage() {
    return (
        <div>
            <div className="track-page" id="tracker">
                <div className="container">
                    <div className="track-page__section">
                        <div className="left track-page__left-side">
                            <img src="/images/emo.png" alt="" className="track-image" />
                        </div>
                        <div className="right track-page__right-side">
                            <h1 className="track-heading">Covid-19 Live tracker</h1>
                            <p className="track-subtitle">The Coronavirus (COVID-19) was first reported in Wuhan, Hubei, China
                                in December 2019, the outbreak was later recognized as a pandemic by the World Health
                                Organization
                                (WHO) on 11 March 2020.
                            </p>
                            <Link to="/track" className="button track-button">Track Now &nbsp;<i className="fas fa-angle-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trackpage
