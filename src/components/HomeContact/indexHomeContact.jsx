import decoration from "../../assets/Decoration.svg";
import {FormInput} from "./LabelAndInput";
import {useEffect, useState} from "react";
import facebook from "../../assets/Facebook.svg";
import instagram from "../../assets/Instagram.svg";

export function IndexHomeContact() {

    const [values, setValues] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setValues({...values, [name]: value});
        console.log(values);
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
        setErrors(validate(values));
        setIsSubmit(true);
        fetch(URL, postOption)
        console.log("Wysłano!");
        // setValues({
        //     name: "",
        //     email: "",
        //     message: ""
        // });
    }

    useEffect(() => {
        console.log(errors);
        if (Object.keys(errors).length === 0 && isSubmit) {
            console.log(values);
        }
    },[errors]);

    const validate = (values) => {
        const errors = {};
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!values.name) {
            errors.name = "Brak imienia!";
        }
        if (!values.email) {
            errors.email = "Brak email!";
        } else if (regex.test(values.email)) {
            errors.email = "Nieprawidłowy email!";
        }
        if (!values.message) {
            errors.message = "Wiadomość musi mieć conajmniej 120 znaków"
        }
        return errors;
    }

    return (
        <section className='home-contact' id="section5">
            <div className='contact-img'>
                <div className='contact-wrapper'>
                    <h2>Skontaktuj się z nami</h2>
                    <img className='deco' src={decoration} alt="deco"/>
                    <form className="contact-form" onSubmit={onSubmit}>
                        <div className="contact-form-up">
                            <FormInput
                                type="text"
                                name="name"
                                labelText="Wpisz swoje imię"
                                placeholder="Krzysztof"
                                value={values.name}
                                handleChange={handleChange}
                                errors={errors.name}
                            />

                            <FormInput
                                type="email"
                                name="email"
                                labelText="Wpisz swój email"
                                placeholder='abc@xyz.pl'
                                value={values.email}
                                handleChange={handleChange}
                                errors={errors.email}
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
                                placeholder= "Treść wiadomości"
                                value={values.message}
                            ></textarea>
                            <p className='error'>{errors.message}</p>
                        </div>

                        <button className='contact-button' type='submit'>
                            Wyślij
                        </button>
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