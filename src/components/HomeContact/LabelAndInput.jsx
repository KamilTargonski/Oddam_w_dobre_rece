export function FormInput({type, name, value, handleChange, placeholder, labelText}) {
    return (
        <div className="form-input">
            <label htmlFor={name} className='form-label'>{labelText || name}</label>
            <input id={name} type={type} name={name} value={value} placeholder={placeholder} onChange={handleChange}/>
        </div>
    );
};