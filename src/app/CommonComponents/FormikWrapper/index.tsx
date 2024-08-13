import { Formik } from 'formik'
import React from 'react'

interface FormikProps{
    initialValues:any,
    validationSchema:any,
    onSubmit:any,
    children:any
}
const FormikWrapper:React.FC<FormikProps> = ({initialValues, validationSchema, onSubmit, children}) => {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {children}
    </Formik>
  )
}

export default FormikWrapper