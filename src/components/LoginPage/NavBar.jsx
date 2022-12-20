import {Link} from "react-router-dom";
import {NavbarMenu} from "./NavbarMenu";

export function NavBar() {
    return (
        <div className="nav-panel">
            <nav className="user-panel">
                <Link className="user-panel-item" to="/login">Zaloguj</Link>
                <Link className="user-panel-item" to="/registration">Załóż konto</Link>
            </nav>

            <nav className="login-navbar">
               <ul>
                   {NavbarMenu.map((item, index)=> {
                       return (
                           <li key={index}>
                               <a href={item.url}>
                                   {item.title}
                               </a>
                           </li>)
                   })}

               </ul>
            </nav>
        </div>
    )
}