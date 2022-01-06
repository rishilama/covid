import SymptomsSingleCard from "../SymptomsSingleCard/SymptomsSingleCard"

function Symptoms( {symptomsData} ) {
    return (
        <div className="symptoms" id="symptoms">
            <div className="container">
                <div className="symptoms-section">
                    <h1 className="symptoms-section_heading">Symptoms</h1>
                    <div className="card-container">
                        {symptomsData.map((symptomSingleCard)=>{
                            return(
                                <SymptomsSingleCard key={symptomSingleCard.id} {...symptomSingleCard} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Symptoms
