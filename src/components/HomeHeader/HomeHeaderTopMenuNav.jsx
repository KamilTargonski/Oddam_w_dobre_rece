import {Link} from "react-scroll";

export function HomeHeaderTopMenuNav() {
    return (
        <nav className="navbar">
            <Link className="nav-bar-item" to="section1" status="active">Start</Link>
            <Link className="nav-bar-item" to="section2">O co chodzi?</Link>
            <Link className="nav-bar-item" to="section3">O nas</Link>
            <Link className="nav-bar-item" to="section4">Fundacja i organizacje</Link>
            <Link className="nav-bar-item" to="#">Kontakt</Link>
        </nav>
    )
}