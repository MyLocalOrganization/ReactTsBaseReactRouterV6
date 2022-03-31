import React from 'react';
import { useForm } from '../hooks/useForm';

import '../styles/styles.css';

export const RegisterPage = () => {
    const { formData, setFormData, onChange, name, email, password, passwordconf, reset, isValidEmail } = useForm({
        name: '',
        email: '',
        password: '',
        passwordconf: '',
    });

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }


    return (
        <div>
            <h1>Register Form Default Implementation</h1>
            <form noValidate onSubmit={onSubmit} >
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={onChange}
                    className={`${name.trim().length <= 0 && 'has-error'}`}
                />
                {name.trim().length <= 0 && <span>Este campo es necesario</span>}

                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    className={`${!isValidEmail(email) && 'has-error'}`}
                />
                {!isValidEmail(email) && <span>email tiene un formato incorrecto</span>}

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={onChange}
                />
                {password.trim().length <= 0 && <span>Este campo es necesario</span>}
                {password.trim().length > 0 && password.trim().length < 6 && <span>tiene que tener minimo de 6 caracteres</span>}

                <input
                    type="password"
                    placeholder="Repeat Password"
                    name="passwordconf"
                    value={passwordconf}
                    onChange={onChange}
                />
                {passwordconf.trim().length <= 0 && <span>Este campo es necesario</span>}
                {passwordconf.trim().length > 0 && password !== passwordconf && <span>password y confirmacion de password no son iguales</span>}

                <button type="submit">Create</button>
                <button type="button" onClick={reset}>Reset</button>
            </form>
        </div>
    )
}
