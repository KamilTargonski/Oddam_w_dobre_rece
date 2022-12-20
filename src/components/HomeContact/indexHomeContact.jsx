import decoration from "../../assets/Decoration.svg";
import {FormInput} from "./LabelAndInput";
import {useState} from "react";
import facebook from "../../assets/Facebook.svg";
import instagram from "../../assets/Instagram.svg";

export function IndexHomeContact() {

    const [values, setValues] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setValues({...values, [name]: value});
    }

    const URL = 'https://fer-api.coderslab.pl/v1/portfolio/contact';
    const postOption = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: values.name, email: values.email, message: values.message, })
    }

    const onSubmit = (event) => {
        event.preventDefault(event);
        console.log(values);
        fetch(URL, postOption)
        console.log("Wysłano!");
        setValues({
            name: "",
            email: "",
            message: ""
        });
    }

    return (
        <section className='home-contact' id="section5">
            <div className='contact-img'>
                <div className='contact-wrapper'>
                    <h2>Skontaktuj się z nami</h2>
                    <img className='deco' src={decoration} alt="deco"/>
                    <form className="contact-form">
                        <div className="contact-form-up">
                            <FormInput
                                type="text"
                                name="name"
                                labelText="Wpisz swoje imię"
                                placeholder="Krzysztof"
                                value={values.name}
                                handleChange={handleChange}
                            />

                            <FormInput
                                type="email"
                                name="email"
                                labelText="Wpisz swój email"
                                placeholder='abc@xyz.pl'
                                value={values.email}
                                handleChange={handleChange}
                            />
                        </div>

                        <div className='contact-form-message'>
                            <label htmlFor="textValue">
                                Wpisz swoją wiadomość
                            </label>
                            <textarea
                                id="message"
                                name='message'
                                onChange={handleChange}
                                placeholder={values.message ? '' : "Treść wiadomości"}
                                value={values.message}
                            ></textarea>
                        </div>

                        <button className='contact-button' onClick={onSubmit}>Wyślij</button>
                    </form>
                </div>
            </div>
            <div className="footer">
                <div className='footer-text'>Copyright by Coders Lab</div>
                <div className='icons'>
                    <a href="#"><img src={facebook} alt="facebook-icon"/></a>
                    <a href='#'><img src={instagram} alt="instagram-icon"/></a>
                </div>
            </div>
        </section>
    );
}