import {NavBar} from "../LoginPage/NavBar";
import decoration from "../../assets/Decoration.svg";
import {Link} from "react-router-dom";

export function IndexLogoutPage() {
    return (
        <div>
            <div className='top-page'>
                <NavBar />
            </div>

            <div className='logout-page'>
                <h2>Wylogowanie nastąpiło <br/> pomyślnie!</h2>
                <img src={decoration} alt="deco"/>

                    <button className='logout-button active'>
                        <Link to="/" className='link'>
                            Strona główna
                        </Link>
                    </button>
            </div>
        </div>
    )
}