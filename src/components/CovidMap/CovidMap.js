import React from 'react'
import GoogleMapReact from 'google-map-react';

function CovidMap({ countriesLocations }) {

    return (
        <div style={{ height: '60vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBaZ49Q4Rd9_q20jWEi7r1hqo4f7L2qO_M" }}
                defaultCenter={{ lat: 20, lng: 77 }}
                defaultZoom={4}
            >
            {countriesLocations}
            </GoogleMapReact>
        </div>
    )
}

export default CovidMap



// AIzaSyBaZ49Q4Rd9_q20jWEi7r1hqo4f7L2qO_M
{/* <div className="map">
    <img src="/images/world.JPG" className="world-image" alt="world-image" />
</div> */}