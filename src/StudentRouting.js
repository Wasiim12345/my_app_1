import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Services from "./Services";
import "./StudentRouting.css"
import PageNotFound from "./PageNotFound";
function StudentRouting() {
    return (
        <>
            <h1>Example for react routing dom</h1>
            <Router>
                <ul className="navigationBar">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/services" element={<Services />} />
                    <Route exact path="/contact" element={<Contact />} />
                    <Route path={'*'} element={<PageNotFound />} />
                </Routes>
            </Router>
        </>
    )
}

export default StudentRouting;