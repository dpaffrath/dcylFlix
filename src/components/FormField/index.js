import React from 'react';

function FormField( { lable, type, name, value, onChange } ) {
    return (
        <div>
            <label>
                {lable}
                <input
                type={type}
                value={value}
                name={name}
                onChange={onChange}
                />
            </label>
        </div>
    )
}

export default FormField;