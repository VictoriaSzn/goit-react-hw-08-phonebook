import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "redux/auth/auth-operations";
import styles from "../components/Form.module.css";
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";

export default function LoginView() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                break;
        }
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        const form = evt.currentTarget;
        dispatch(
            authOperations.logIn({
                email: form.elements.email.value,
                password: form.elements.password.value
            }));
        setEmail('');
        setPassword('');
    };
    return (
        <div className={styles.page}>
            <h1>Login page</h1>
            <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
                <label className={styles.label}> 
                                  
                    <TextField
                    sx={{'& > :not(style)': { fontSize: '25px' }, }}
                    id="filled-basic"
                    label="Email"
                    variant="standard"
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                />
                </label> 
                <label className={styles.label}> 
                    <TextField
                    sx={{'& > :not(style)': { fontSize: '25px' }, }}
                    id="filled-basic"
                    label="Password"
                    variant="standard"
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    />
                </label>
                <Button type="submit" variant="contained">Log in</Button>
            </form>
        </div>
    )
}
