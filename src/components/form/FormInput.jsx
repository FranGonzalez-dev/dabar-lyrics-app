export const FormInput = ({ type, name, label, value, placeholder, action }) => {
    return (
        <div className="form-field">
            <label htmlFor={ name } className="form-label">
                { label }
            </label>
            <div className="form-control">
                <input 
                    type={ type } 
                    name={ name }
                    value={ value }
                    onChange={ action }
                    className='input max-w-full'
                    placeholder={ placeholder }
                    required
                />
            </div>
        </div>
    )
}