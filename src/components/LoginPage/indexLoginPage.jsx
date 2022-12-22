import decoration from "../../assets/Decoration.svg";
import {useState, useEffect} from "react";
import {FormInput} from "../HomeContact/LabelAndInput";
import {Link} from "react-router-dom";
import {NavBar} from "./NavBar";

export function IndexLoginPage() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setValues({...values, [name]: value});
        console.log(values);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validate(values));
        setIsSubmit(true);
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
        if (!values.email) {
            errors.email = "Brak email!";
        } else if (regex.test(values.email)) {
            errors.email = "Nieprawidłowy email!";
        }
        if (!values.password) {
            errors.password = "Brak hasła!";
        } else if (values.password.length < 6) {
            errors.password = "Hasło jest za krótkie!";
        }
        return errors;
    }


    return (
        <div>
            <div className='top-page'>
                <NavBar />
            </div>

            {Object.keys(errors).length === 0 && isSubmit ? (<div className='dupa'>Zalogowano</div>) : (<div></div>)}
            <form className='login-form' onSubmit={handleSubmit}>
                <h2>Zaloguj się</h2>
                <img src={decoration} alt="deco"/>
                <div className='input-wrapper'>
                    <FormInput type='email' name='email' values={values.email} handleChange={handleChange} errors={errors.email}/>
                    <FormInput type='password' name='password' labelText='hasło' values={values.password} handleChange={handleChange} errors={errors.password} />
                </div>

                <div className='login-buttons'>
                    <button className='register-button'>
                        <Link to="/registration" className='link'>
                        Załóż konto
                        </Link>
                    </button>

                    <button className='login-button active' type='submit'>
                        Zaloguj się
                    </button>
                </div>
            </form>
        </div>
    );
}