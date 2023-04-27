import { useState } from "react";
import { useDispatch } from "react-redux";
//import register from "redux/auth/auth-operations";
import authOperations from "../redux/auth/auth-operations";
const styles = {
    form: {
        width: 320,
    },
    label: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 15,
    },
};
export default function RegisterView() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
    switch (name) {
        case 'name':
            return setName(value);
        case 'email':
            return setEmail(value);
        case 'password':
            return setPassword(value);
        default:
            return;
    }
};

const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
       authOperations.register({
            name: form.elements.name.value,
            email: form.elements.email.value,
            password: form.elements.password.value,
        }));
    setName('');
    setEmail('');
    setPassword('');
    };
    return (
         <div>
        <h1>Register page</h1>
        <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
             <label style={styles.label}>
                name
                <input
                    type="name"
                    name="name"
                    value={name}
                    onChange={handleChange}
                />
            </label>
            <label style={styles.label}>
                email
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                />
            </label>
             <label style={styles.label}>
                password
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                />
                </label>
                <button type="submit">Register</button>
        </form>
    </div>
    )
}