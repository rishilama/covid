import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { SidebarVisibilityContextProvider } from './store/SidebarVisibilityContext';
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/HomePage/Home';
import BlogPage from './pages/BlogPage/BlogPage';
import TrackingPage from "./pages/TrackingPage/TrackingPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import About from "./pages/AboutPage/About";
import UserContextProvider from "./store/UserContext";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";

function App() {
	return (
		<div className="App">
			<UserContextProvider>
				<Router>
					<SidebarVisibilityContextProvider>
						<Header />
					</SidebarVisibilityContextProvider>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/news" component={BlogPage} />
						<Route path="/news/:index" component={BlogPage} />
						<Route path="/track" component={TrackingPage} />
						<Route path="/contact" component={ContactPage} />
						<Route path="/about" component={About} />
						<Route path="/login" component={LoginPage} />
						<Route path="/signup" component={SignupPage} />
					</Switch>
					<Footer />
				</Router>
			</UserContextProvider>
		</div>
	);
}

export default App;
