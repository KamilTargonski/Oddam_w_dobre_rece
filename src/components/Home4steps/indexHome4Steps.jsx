import {Link} from "react-router-dom";
import decoration from "../../assets/Decoration.svg";
import icon1 from "../../assets/Icon-1.svg";
import icon2 from "../../assets/Icon-2.svg";
import icon3 from "../../assets/Icon-3.svg";
import icon4 from "../../assets/Icon-4.svg";

export function IndexHome4Steps() {
    return (
        <section className='four-steps' id="section2">
            <article className='four-steps-article'>
                <h2 id='steps'>Wystarczą 4 proste kroki</h2>
                <img className="deco" src={decoration} alt='decoration-line' />
            </article>
            <div className="container-four-steps">
                <div className='container-icon'>
                    <img src={icon1} alt='icon-select-thinks' />
                    <h3>Wybierz rzeczy</h3>
                    <hr />
                    <p>ubrania, zabawki, <br/> sprzęt i inne</p>
                </div>

                <div className='container-icon'>
                    <img src={icon2} alt='icon-pack' />
                    <h3>Spakuj je</h3>
                    <hr />
                    <p>skorzystaj z <br/> worków na śmieci</p>
                </div>
                <div className='container-icon'>
                    <img src={icon3} alt='icon-whom-to-give' />
                    <h3>Zdecyduj komu <br/> chcesz oddać</h3>
                    <hr />
                    <p>wybierz zaufane <br/> miejsce</p>
                </div>
                <div className='container-icon'>
                    <img src={icon4} alt='icon-deliver' />
                    <h3>Zamów kuriera</h3>
                    <hr />
                    <p>kurier przyjedzie <br/> w dogodnym terminie</p>
                </div>
            </div>
            <div className='four-steps-button-container'>
                    <Link className='four-steps-button' to='/login'>Oddaj <br/> rzeczy</Link>
            </div>

        </section>
    )
}