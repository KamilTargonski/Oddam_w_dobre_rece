import decoration from "../../assets/Decoration.svg";
import {useEffect, useState} from "react";
import {FormInput} from "../HomeContact/LabelAndInput";
import {Link} from "react-router-dom";
import {NavBar} from "../LoginPage/NavBar";

export function IndexRegisterPage() {
    const [values, setValues] = useState({
        email: '',
        password: '',
        password1: ''
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
        if (!values.password1 || values.password1 !==values.password) {
            errors.password1 = "Hasła muszą być takie same!"
        }
        return errors;
    }

    return (
        <div>
            <div className='top-page'>
                <NavBar />
            </div>

            {Object.keys(errors).length === 0 && isSubmit ? (<div className='dupa'>Zarejestrowano</div>) : (<div></div>)}
            <form className='login-form' onSubmit={handleSubmit}>
                <h2>Zarejestruj się</h2>
                <img src={decoration} alt="deco"/>
                <div className='input-wrapper'>
                    <FormInput type='email' name='email' values={values.email} handleChange={handleChange} errors={errors.email}/>
                    <FormInput type='password' name='password' labelText='hasło' values={values.password} handleChange={handleChange} errors={errors.password}/>
                    <FormInput type='password' name='password1' labelText='powtórz hasło' values={values.password1} handleChange={handleChange} errors={errors.password1}/>
                </div>

                <div className='login-buttons'>
                    <button className='login-button'>
                        <Link to="/login" className='link'>
                        Zaloguj się
                        </Link>
                    </button>

                    <button className='register-button active' type='submit'>
                            Załóż konto
                    </button>
                </div>
            </form>
        </div>
    );
}