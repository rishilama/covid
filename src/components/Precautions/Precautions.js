function Precautions() {
    return (
        <div className="precautions" id="precautions">
            <div className="container">
                <div className="precautions-section">
                    <div className="do-left left">
                        <h1 className="precaution-heading">What should you do</h1>
                        <p className="precaution-subitle">Protect yourself this flu season</p>
                        <p className="precaution-subitle">Wash your hands frequently</p>
                        <p className="precaution-subitle">Cover your nose and mouth when around others</p>
                        <p className="precaution-subitle">Clean and disinfect</p>
                        {/* <div className="btn">
                            <a href="#" className="button precaution-button">Know More &nbsp; <i
                                className="fas fa-angle-right"></i></a>
                        </div> */}
                    </div>
                    <div className="do-right right">
                        <img src="/images/do-img.png" alt="toDo" className="to-do-image" />
                    </div>
                </div>


                <div className="second-precautions-section">
                    <div className="not-to-do-left left">
                        <img src="/images/dont-img.png" alt="notToDo" className="not-to-do-image" />
                    </div>
                    <div className="not-to-do-right right">
                        <h1 className="precaution-heading">What should you avoid doing</h1>
                        <p className="precaution-subitle">Don't go outside without covering your mouth and nose</p>
                        <p className="precaution-subitle">Avoid going to public gathering</p>
                        <p className="precaution-subitle">Avoid close contact</p>
                        <p className="precaution-subitle">Avoid touching objects</p>
                        {/* <div className="btn">
                            <a href="#" className="button precaution-button">Know More &nbsp; <i
                                className="fas fa-angle-right"></i></a>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Precautions
