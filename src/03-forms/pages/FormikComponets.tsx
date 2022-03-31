import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

enum PROPS_FORM {
  MAX_VALUE = 15,
  MAX_MSG = 'Debe de tener 15 caracteres o menos',
  EMAIL_FORMAT = 'Formato de email es incorrecto',
  REQUIRED = 'Este campo es requerido',
  CONDITIONS = 'Debe de aceptar las condiciones',
  SELECTED_OPT = 'Esta opcion no es permitida',
}

export const FormikComponents = () => {

  const { MAX_VALUE, MAX_MSG, REQUIRED, EMAIL_FORMAT, CONDITIONS, SELECTED_OPT } = PROPS_FORM;

  return (
    <div>
      <h1>Formik Components</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: ''
        }}
        onSubmit={(values) => {
          console.log("values", values)
        }}
        validationSchema={
          Yup.object({
            firstName: Yup.string().max(MAX_VALUE, MAX_MSG).required(REQUIRED),
            lastName: Yup.string().max(MAX_VALUE, MAX_MSG).required(REQUIRED),
            email: Yup.string().email(EMAIL_FORMAT).required(REQUIRED),
            terms: Yup.boolean().oneOf([true], CONDITIONS),
            jobType: Yup.string().notOneOf(['it-junior'], SELECTED_OPT).required(REQUIRED),
          })
        }
      >
        {
          (formik) => (
            <Form>
              <label htmlFor="firstName">First Name</label>
              <Field name="firstName" type="text" />
              <ErrorMessage name="firstName" component="span" />

              <label htmlFor="lastName">Last Name</label>
              <Field name="lastName" type="text" />
              <ErrorMessage name="lastName" component="span" />

              <label htmlFor="email">Email</label>
              <Field name="email" type="text" />
              <ErrorMessage name="email" component="span" />

              <label><Field name="terms" type="checkbox" />Terms and conditions</label>
              <ErrorMessage name="terms" component="span" />

              <label htmlFor="jobType">Email</label>
              <Field name="jobType" as="select">
                <option value="">Pick somethings</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="it-senior">IT Senior</option>
                <option value="it-junior">IT Junior</option>
              </Field>
              <ErrorMessage name="jobType" component="span" />

              <button type="submit">Submit</button>
            </Form>
          )
        }
      </Formik>
    </div>
  )
}
