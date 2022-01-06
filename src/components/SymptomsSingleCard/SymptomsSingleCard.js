function SymptomsSingleCard( {image, heading, subtitle} ) {
    return (
        <div className="card card-1">
            <div className="card-img">
                <img src={image} alt="symptoms" className="symptoms__card-image" />
            </div>
            <div className="card-text">
                <h4 className="symptoms__card-heading">{heading}</h4>
                <p className="symptoms__card-subtitle">
                    {subtitle}
                </p>
            </div>
        </div>
    )
}

export default SymptomsSingleCard
