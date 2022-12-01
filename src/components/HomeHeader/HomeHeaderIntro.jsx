import {Link} from "react-router-dom";
import decoration from "../../assets/Decoration.svg"

export function HomeHeaderIntro() {
    return (
        <div className="header-intro">
            <div className="header-text">
                <h2>Zacznij pomagać!<br/> Oddaj niechciane rzeczy w zaufane ręce</h2>
                <img src={decoration} alt="underline-decoration" />
            </div>
            <div className="header-buttons">
                <Link className="header-button" to="/login">Oddaj <br/> rzeczy</Link>
                <Link className="header-button" to="/login">Zorganizuj <br/> zbiórkę</Link>
            </div>
        </div>
    )
}