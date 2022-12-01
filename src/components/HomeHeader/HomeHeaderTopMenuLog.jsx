import {Link} from "react-router-dom";

export function HomeHeaderTopMenuLog() {
    return (
        <nav className="user-panel">
            <Link className="user-panel-item" to="/login">Zaloguj</Link>
            <Link className="user-panel-item" to="/registration">Załóż konto</Link>
        </nav>
    )
}