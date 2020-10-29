import React from 'react'
import  {Field,ErrorMessage} from 'formik'

export default props => {
    return (

        <div className="column">
            <label>{props.label}</label>
            <Field
                {...props.input}
                placeholder={props.placeholder}
                readOnly={props.readOnly}
                className={props.classInput}
                name={props.name}
                as={props.as}
                type={props.type}
            />
            <ErrorMessage name="props.name" />
        </div>

    )
}