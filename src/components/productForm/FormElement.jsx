import React from 'react';

const FormElement = ({name, id, value, onChange, type = 'text', tag = 'input', error}) => { // By default type is text
    const CustomTag = `${tag}`;
    return (
        <div>
             <div className="form-group mb-2">
                <label htmlFor={id}>{name}</label>
                <CustomTag
                    type={type} 
                    className={`form-control ${error && 'is-invalid'}`}
                    id={id}
                    name={name} 
                    value={value} 
                    onChange={onChange}
                />
                <div className="invalid-feedback">
                    {error}
                </div>
            </div>
        </div>
    );
};

export default FormElement;