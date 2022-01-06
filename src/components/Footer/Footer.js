import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="column column-1">
                        <Link to="/"><img src="/images/Logo.png" alt="logo" className="site-logo" /></Link>
                        <p className="details">
                            Inspired by the designs of DesignMamba, Mr. Web Designer and Studio Alto, designed and developed by Rishi Lama
                        </p>
                    </div>
                    <div className="column column-2">
                        <h3 className="column-heading">
                            USEFUL LINKS
                        </h3>
                        <div className="useful-link__container">
                            <ul className="left__footer-link">
                                <li className="footer__link-item"><Link to="/track" className="footer__link-item__links">Tracker</Link></li>
                                <li className="footer__link-item"><a href="/#precautions" className="footer__link-item__links">Precautions</a>
                                </li>
                                <li className="footer__link-item"><a href="/#symptoms" className="footer__link-item__links">Symptoms</a></li>
                            </ul>
                            <ul className="right__footer-link">
                                <li className="footer__link-item"><Link to="/about" className="footer__link-item__links">About</Link></li>
                                <li className="footer__link-item"><Link to="/news" className="footer__link-item__links">News</Link></li>
                                <li className="footer__link-item"><Link to="/contact" className="footer__link-item__links">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="column column-3">
                        <h3 className="column-heading">
                            Contact Us
                        </h3>
                        <ul className="contact-details">
                            <li className="footer__link-item"><a href="https://wa.me/919955944684" target="_blank" rel="noreferrer noopener" className="footer__link-item__links">Tel: +919955944684</a>
                            </li>
                            <li className="footer__link-item"><a href="https://www.gmail.com" target="_blank" rel="noreferrer noopener"
                                className="footer__link-item__links">rishilama01@gmail.com</a></li>
                        </ul>
                        <h3 className="column-heading">
                            Location
                        </h3>
                        <ul className="location-details">
                            <li className="footer__link-item"><Link to="/contact" className="footer__link-item__links">Jamshedpur,
                                Jharkhand-832103</Link></li>
                        </ul>
                    </div>
                    <div className="column column-4">
                        <h3 className="column-heading">
                            Keep in touch
                        </h3>
                        <ul className="social-icons">
                            <li className="fb"><i className="fa fa-facebook-official" aria-hidden="true"></i><a
                                href="https://www.fb.com"  target="_blank" rel="noreferrer noopener" ><i>Facebook</i></a></li>
                            <li className="github"><i className="fa fa-github" aria-hidden="true"></i><a href="https://www.github.com/rishilama"  target="_blank" rel="noreferrer noopener" ><i>Github</i></a>
                            </li>
                            <li className="insta"><i className="fa fa-instagram" aria-hidden="true"></i><a
                                href="https://www.instagram.com/rishi_lama/"  target="_blank" rel="noreferrer noopener" ><i>Instagram</i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
