import Case from "../Case/Case"
import axios from 'axios'
import { useEffect, useState } from "react"
// import CovidMap from "../CovidMap/CovidMap";
import DataLoadingMsg from "../DataLoadingMsg/DataLoadingMsg";


function CasesContainer() {

    const [globalData, setGlobalData] = useState([]);
    const [searchCountry, setSearchCountry] = useState("");


    // all country data
    useEffect(() => {
        axios.get('https://corona.lmao.ninja/v3/covid-19/countries')
            .then(resp => {
                console.log(resp.data);
                setGlobalData(resp.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])


    // searching and filtering the data
    const filterCountry = globalData.filter((item) => {
        return searchCountry !== "" ? item.country === searchCountry : item
    })


    // // map
    // const countriesLocations = globalData.map((data) => {
    //     return (
    //         <div
    //             lat={data.countryInfo.lat}
    //             lng={data.countryInfo.long}
    //             style={{
    //                 margin: "10px",
    //                 color: "red",
    //                 backgroundColor: "white",
    //                 height: "auto",
    //                 width: "80px",
    //                 borderRadius: "3px",
    //                 display: "flex",
    //             }}
    //         >
    //         <img height="10px" src={data.countryInfo.flag} style={{
    //             display: "flex",
    //             alignItems: "center",
    //             marginRight: "2px",
    //             marginTop: "2px",
    //         }} />
    //         {data.cases}
    //         </div>
    //     )
    // })


    return (
        <div className="covid__data-container">
            <div className="container">
                <div className="data-container">
                    {/* <CovidMap countriesLocations={countriesLocations} /> */}
                    <div className="search-country">

                        {/* input */}
                        <form className="form-group">
                            <input type="text"
                                placeholder="Search For a Country"
                                className="input-box"
                                onChange={(e) => setSearchCountry(e.target.value)}
                            />
                        </form>
                    </div>

                    {/* output */}
                    <div className="data">
                        {filterCountry.length > 0
                            ?
                            filterCountry.map((countryData, index) => {
                                return (
                                    <Case key={index} data={countryData} />
                                )
                            })
                            :
                            <DataLoadingMsg />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CasesContainer
