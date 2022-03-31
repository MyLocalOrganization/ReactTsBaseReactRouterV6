import { FormikErrors, useFormik } from 'formik';
import '../styles/styles.css';

enum PROPS_FORM {
  MAX_VALUE = 5,
}

interface IFormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikBasicPage = () => {

  const validate = ({ firstName, lastName, email }: IFormValues) => {
    const errors: FormikErrors<IFormValues> = {};

    if (!firstName) {
      errors.firstName = 'required';
    } else if (firstName.length >= PROPS_FORM.MAX_VALUE) {
      errors.firstName = 'Must be 15 characters or less';
    }

    if (!lastName) {
      errors.lastName = 'required';
    } else if (lastName.length >= PROPS_FORM.MAX_VALUE) {
      errors.lastName = 'Must be 15 characters or less';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    return errors;
  }

  const { handleChange, values, handleSubmit, errors, touched, handleBlur } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
    },
    onSubmit: (values) => {
      console.log("values", values)
    },
    validate
  });

  return (
    <div>
      <h1>Formik Tutorial Basic</h1>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
