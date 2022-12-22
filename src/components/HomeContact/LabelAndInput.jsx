export function FormInput({type, name, value, handleChange, placeholder, labelText, errors}) {
    return (
        <div className="form-input">
            <label htmlFor={name} className='form-label'>{labelText || name}</label>
            <input id={name} type={type} name={name} value={value} placeholder={placeholder} onChange={handleChange}/>
            <p className='error'>{errors}</p>
        </div>
    );
}
