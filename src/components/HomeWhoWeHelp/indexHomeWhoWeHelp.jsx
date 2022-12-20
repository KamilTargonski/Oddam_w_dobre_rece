import React, {useState} from "react";
import decoration from "../../assets/Decoration.svg"

export function IndexHomeWhoWeHelp() {
    const [value, setValue] = useState(true);

    function handleClick() {
        setValue(prevValue => !prevValue);
    }

    if(value) {
        return (
            <section className='who' id='section4'>
                <div className="who-header">
                    <div className="who-title">
                        <h2>Komu pomagamy?</h2>
                        <img src={decoration} alt="underline-decoration" />
                    </div>

                    <div className="who-header-buttons">
                        <button onClick={handleClick}>Fundacjom</button>
                        <button onClick={handleClick}>Organizacjom <br/> pozarządowym</button>
                        <button onClick={handleClick}>Lokalnym <br/> zbiórkom</button>
                    </div>
                </div>

                <div className='who-text-info'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br/>
                        do eiusmod tempor incididunt ut labore et dolore magna <br/>
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                    </p>

                    <ul>
                        <li>
                            <div className='who-container'>
                                <div className='who-container-left'>
                                    <h3>Zbiórka "Lorem Ipsum 1"</h3>
                                    <p>Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
                                </div>
                                <p className="who-container-right">
                                    Egestas, sed, tempus
                                </p>
                            </div>
                            <hr/>
                        </li>

                        <li>
                            <div className='who-container'>
                                <div className='who-container-left'>
                                    <h3>Zbiórka "Lorem Ipsum 2"</h3>
                                    <p>Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</p>
                                </div>
                                <p className="who-container-right">
                                    Ut, aliquam, purus, sit, amet
                                </p>
                            </div>
                            <hr/>
                        </li>

                        <li>
                            <div className='who-container'>
                                <div className='who-container-left'>
                                    <h3>Zbiórka "Lorem Ipsum 3"</h3>
                                    <p>Scelerisque in dictum non consectetur a erat nam.</p>
                                </div>
                                <p className="who-container-right">
                                    Mi, quis, hendrerit, dolor
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        )
    } else {
        return (
            <section className='who' id='section4'>
                <div className="who-header">
                    <div className="who-title">
                        <h2>Komu pomagamy?</h2>
                        <img src={decoration} alt="underline-decoration" />
                    </div>

                    <div className="who-header-buttons">
                        <button onClick={handleClick}>Fundacjom</button>
                        <button onClick={handleClick}>Organizacjom <br/> pozarządowym</button>
                        <button onClick={handleClick}>Lokalnym <br/> zbiórkom</button>
                    </div>
                </div>
            </section>
        )
    }
}