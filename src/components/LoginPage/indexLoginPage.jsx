import decoration from "../../assets/Decoration.svg";
import {useState} from "react";
import {FormInput} from "../HomeContact/LabelAndInput";
import {Link} from "react-router-dom";
import {NavBar} from "./NavBar";

export function IndexLoginPage() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setValues({...values, [name]:value});
    }

    return (
        <div>
            <div className='top-page'>
                <NavBar />
            </div>

            <form className='login-form'>
                <h2>Zaloguj się</h2>
                <img src={decoration} alt="deco"/>
                <div className='input-wrapper'>
                    <FormInput type='email' name='email' values={values.email} handleChange={handleChange}/>
                    <FormInput type='password' name='password' labelText='hasło' values={values.password} handleChange={handleChange} />
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