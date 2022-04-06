import { Formik, Form } from 'formik';
import { MySelect, MyTextInput } from '../components';
import formJson from '../data/custom-form.json';
import * as Yup from 'yup';



enum PROPS_FORM {
    MAX_VALUE = 15,
    MAX_MSG = 'Debe de tener 5 caracteres o menos',
    EMAIL_FORMAT = 'Formato de email es incorrecto',
    REQUIRED = 'Este campo es requerido',
    CONDITIONS = 'Debe de aceptar las condiciones',
    SELECTED_OPT = 'Esta opcion no es permitida',
}


const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
    initialValues[input.name] = input.value;

    if (!input.validations) continue;

    let schema = Yup.string();

    for (const rule of input.validations) {
        if (rule.type === 'required') {
            schema = schema.required(PROPS_FORM.REQUIRED);
        }

        if (rule.type === 'minLength') {
            schema = schema.max((rule as any).value,PROPS_FORM.MAX_MSG);
        }

        if (rule.type === 'email') {
            schema = schema.email(PROPS_FORM.EMAIL_FORMAT);
        }
    }

    requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
    return (
        <div>
            <h1>
                Dynamic Form
            </h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                {(formik) => (
                    <Form>

                        {
                            formJson.map(({ type, name, placeholder, label, options }) => {

                                if (type === 'input' || type === "password" || type === "email")
                                    return <MyTextInput
                                        key={name}
                                        type={type as any}
                                        name={name}
                                        placeholder={placeholder}
                                        label={label}
                                    />

                                if (type === 'select')
                                    return (
                                        <MySelect
                                            key={name}
                                            label={label}
                                            name={name}
                                        >
                                            <option value="">Select an option</option>
                                            {
                                                options?.map(({ id, label }) => (
                                                    <option key={id} value={label}>{label}</option>
                                                ))
                                            }
                                        </MySelect>
                                    )

                                throw new Error(`El type: ${type}, no es soportado`)
                            })
                        }

                        <button type="submit">submit</button>
                    </Form>
                )}
            </Formik>
        </div >
    )
}
