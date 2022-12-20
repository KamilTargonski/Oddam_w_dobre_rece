import decoration from "../../assets/Decoration.svg";
import {useState} from "react";
import {FormInput} from "../HomeContact/LabelAndInput";
import {Link} from "react-router-dom";
import {NavBar} from "../LoginPage/NavBar";

export function IndexRegisterPage() {
    const [values, setValues] = useState({
        email: '',
        password: '',
        password1: ''
    });


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setValues({...values, [name]:value});
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <div className='top-page'>
                <NavBar />
            </div>

            <form className='login-form' onSubmit={onSubmit}>
                <h2>Zarejestruj się</h2>
                <img src={decoration} alt="deco"/>
                <div className='input-wrapper'>
                    <FormInput type='email' name='email' values={values.email} handleChange={handleChange}/>
                    <FormInput type='password' name='password' labelText='hasło' values={values.password} handleChange={handleChange} />
                    <FormInput type='password' name='password1' labelText='powtórz hasło' values={values.password1} handleChange={handleChange} />
                </div>

                <div className='login-buttons'>
                    <button className='login-button' type='submit'>
                        <Link to="/login" className='link'>
                        Zaloguj się
                        </Link>
                    </button>

                    <button className='register-button active'>
                            Załóż konto
                    </button>
                </div>
            </form>
        </div>
    );
}