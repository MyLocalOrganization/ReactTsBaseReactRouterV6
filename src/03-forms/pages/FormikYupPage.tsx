import { useFormik } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

enum PROPS_FORM {
  MAX_VALUE = 15,
  MAX_MSG = 'Debe de tener 15 caracteres o menos',
  EMAIL_FORMAT = 'Formato de email es incorrecto',
  REQUIRED = 'Este campo es requerido'
}

export const FormikYupPage = () => {
  const { handleSubmit, getFieldProps, errors, touched } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
    },
    onSubmit: (values) => {
      console.log("values", values)
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(PROPS_FORM.MAX_VALUE, PROPS_FORM.MAX_MSG)
        .required(PROPS_FORM.REQUIRED),
      lastName: Yup.string()
        .max(PROPS_FORM.MAX_VALUE, PROPS_FORM.MAX_MSG)
        .required(PROPS_FORM.REQUIRED),
      email: Yup.string()
        .email(PROPS_FORM.EMAIL_FORMAT)
        .required(PROPS_FORM.REQUIRED)
    })
  });

  return (
    <div>
      <h1>Formik Yup</h1>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          {...getFieldProps('firstName')}
        />
        {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          {...getFieldProps('lastName')}
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          {...getFieldProps('email')}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
