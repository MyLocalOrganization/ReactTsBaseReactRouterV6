import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyCheckbox, MySelect, MyTextInput } from '../components';


import '../styles/styles.css';

enum PROPS_FORM {
  MAX_VALUE = 15,
  MAX_MSG = 'Debe de tener 15 caracteres o menos',
  EMAIL_FORMAT = 'Formato de email es incorrecto',
  REQUIRED = 'Este campo es requerido',
  CONDITIONS = 'Debe de aceptar las condiciones',
  SELECTED_OPT = 'Esta opcion no es permitida',
}

export const FormikAbstraction = () => {

  const { MAX_VALUE, MAX_MSG, REQUIRED, EMAIL_FORMAT, CONDITIONS, SELECTED_OPT } = PROPS_FORM;

  return (
    <div>
      <h1>Formik Abstraction</h1>
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
            jobType: Yup.string().notOneOf(['it-jr'], SELECTED_OPT).required(REQUIRED),
          })
        }
      >
        {
          (formik) => (
            <Form>

              <MyTextInput
                label="First Name"
                name="firstName"
                placeholder="First Name"
              />

              <MyTextInput
                label="Last Name"
                name="lastName"
                placeholder="Last Name"
              />

              <MyTextInput
                label="Email"
                name="email"
                placeholder="Email" />

              <MySelect label="Job Type" name="jobType" >
                <option value="">Pick something</option>
                <option value="developer">Develper</option>
                <option value="designer">Designer</option>
                <option value="it-senior">IT Senior</option>
                <option value="it-jr">IT Jr.</option>
              </MySelect>

              <MyCheckbox label="Termns & Conditions" name="terms" />

              <button type="submit">Submit</button>
            </Form>
          )
        }
      </Formik>
    </div>
  )
}
