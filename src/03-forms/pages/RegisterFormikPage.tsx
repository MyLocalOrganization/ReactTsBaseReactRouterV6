import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

import '../styles/styles.css';

enum PROPS_FORM {
    MAX_VALUE = 6,
    MAX_MSG = 'Debe de tener 6 caracteres o menos',
    MSG_PAS = 'Contraseñas no son iguales',
    EMAIL_FORMAT = 'Formato de email es incorrecto',
    REQUIRED = 'Este campo es requerido'
}

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Formik Page</h1>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    passwordconf: '',
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                            .max(PROPS_FORM.MAX_VALUE, PROPS_FORM.MAX_MSG)
                            .required(PROPS_FORM.REQUIRED),
                        email: Yup.string()
                            .email(PROPS_FORM.EMAIL_FORMAT)
                            .required(PROPS_FORM.REQUIRED),
                        password: Yup.string()
                            .max(PROPS_FORM.MAX_VALUE, PROPS_FORM.MAX_MSG)
                            .required(PROPS_FORM.REQUIRED),
                        passwordconf: Yup.string()
                            .oneOf([Yup.ref('password')], PROPS_FORM.MSG_PAS)
                            .required(PROPS_FORM.REQUIRED)
                    })
                }
            >
                {
                    ({ handleReset }) => (
                        <Form>
                            <MyTextInput
                                label="Nombre"
                                name="name"
                                placeholder="Nombre Usuario"
                            />
                            <MyTextInput
                                label="Email"
                                name="email"
                                placeholder="Correo Electronico"
                            />
                            <MyTextInput
                                label="Password"
                                name="password"
                                placeholder="Contraseña"
                            />
                            <MyTextInput
                                label="Nombre"
                                name="passwordconf"
                                placeholder="Confirme Contraseña"
                            />
                            <button type="submit">Create</button>
                            <button type="button" onClick={handleReset}>Reset</button>
                        </Form>
                    )
                }







            </Formik>
        </div>
    )
}
