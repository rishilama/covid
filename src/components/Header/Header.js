import { useContext } from "react";
import { Link } from "react-router-dom";
import SidebarVisibilityContext from "../../store/SidebarVisibilityContext";
import { UserContext } from "../../store/UserContext";


function Header() {

    const [sidebarVisibility, , toggleSidebarVisibility] = useContext(SidebarVisibilityContext);
    const { user, setUser } = useContext(UserContext);

    const LogOut =() => {
        setUser(null)
    }
 
    return (
        <header>
            <div className="container">
                <div className="header-content">
                    <div className="site-header">
                        <Link to="/"><img src="/images/Logo.png" alt="site-logo" className="site-logo" /></Link>
                    </div>
                    <button onClick={toggleSidebarVisibility} className={`menu-toggle ${sidebarVisibility ? 'active' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <div className="desktop-view">
                        <ul className="nav-right__navbar">
                            <li className="nav-right__navbar__nav-links"><Link className="small" to="/">Home</Link></li>
                            <li className="nav-right__navbar__nav-links"><a className="small" href="/#tracker">Tracker</a></li>
                            <li className="nav-right__navbar__nav-links"><a className="small" href="/#precautions">Precautions</a>
                            </li>
                            <li className="nav-right__navbar__nav-links"><a className="small" href="/#symptoms">Symptoms</a></li>
                            <li className="nav-right__navbar__nav-links"><a className="small" href="/#news">News</a></li>
                            <li className="nav-right__navbar__nav-links"><Link className="small" to="/about">About</Link></li>
                            <li className="nav-right__navbar__nav-links"><Link className="small" to="/contact">Contact</Link></li>
                            {!user &&
                                <>
                                    <li className="nav-right__navbar__nav-links"><Link className="small" to="/login">Login</Link></li>
                                    <li className="nav-right__navbar__nav-links"><Link className="small" to="/signup">Sign Up</Link></li>
                                </>
                            }
                            {user &&
                                <>
                                    <li className="nav-right__navbar__nav-links"><button className="button-small" onClick={LogOut}>Log Out</button></li>
                                </>
                            }
                        </ul>
                    </div>

                </div>
            </div>
            <div className="site-header_nav-links">
                <ul className={`nav-right ${sidebarVisibility ? 'active' : ''}`}>
                    <li className="nav-links"><Link className="small" to="/">Home</Link></li>
                    <li className="nav-links"><a className="small" href="/#tracker">Tracker</a></li>
                    <li className="nav-links"><a className="small" href="/#precautions">Precautions</a></li>
                    <li className="nav-links"><a className="small" href="/#symptoms">Symptoms</a></li>
                    <li className="nav-links"><a className="small" href="/#news">News</a></li>
                    <li className="nav-links"><Link className="small" to="/about">About</Link></li>
                    <li className="nav-links"><Link className="small" to="/contact">Contact</Link></li>
                    {!user &&
                        <>
                            <li className="nav-links"><Link className="small" to="/login">Login</Link></li>
                            <li className="nav-links"><Link className="small" to="/signup">Sign Up</Link></li>
                        </>
                    }
                    {user &&
                        <>
                            <li className="nav-links"><button className="button-small" onClick={LogOut}>Log Out</button></li>
                        </>
                    }
                </ul>
            </div>
        </header>
    )
}

export default Header
