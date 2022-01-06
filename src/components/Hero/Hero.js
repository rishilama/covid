function Hero() {
    return (
        <div className="container">
            <div className="hero" id="home">
                <div className="left hero-left">
                    <h1 className="hero-heading">Stay Home Stay Safe</h1>
                    <p className="hero-subtitle">
                        There is no specific medicine to prevent or treat coronavirus
                        disease (COVID-19).
                    </p>
                    <a href="#precautions" className="button hero-button">Know More &nbsp;<i className="fas fa-angle-right"></i></a>
                </div>
                <div className="right hero-right">
                    <img src="/images/home-img.png" alt="home" className="hero-image" />
                </div>
            </div>
        </div>
    )
}

export default Hero
