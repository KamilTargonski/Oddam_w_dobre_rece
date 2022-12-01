import {Link} from "react-scroll";

export function HomeHeaderTopMenuNav() {
    return (
        <nav className="navbar">
            <Link className="nav-bar-item" to="#">Start</Link>
            <Link className="nav-bar-item" to="#">O co chodzi?</Link>
            <Link className="nav-bar-item" to="#">O nas</Link>
            <Link className="nav-bar-item" to="#">Fundacja i organizacje</Link>
            <Link className="nav-bar-item" to="#">Kontakt</Link>
        </nav>
    )
}