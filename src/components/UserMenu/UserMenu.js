import { useDispatch } from "react-redux";
import authOperations from "redux/auth/auth-operations";
import { useAuth } from "hooks/useAuth";
import styles from "../../components/Form.module.css";
import Button from '@mui/material/Button';
import defaultAvatar from './no-avatar.jpg';

export default function UserMenu() {
    const dispatch = useDispatch();
    //const name = useSelector(selectUser);
    const avatar = defaultAvatar;
    const { user } = useAuth();
    const handleLogOut = () => dispatch(authOperations.logOut());
    return (
        <div className={styles.userMenuContainer}>
            <img src={avatar} alt="" width="32" height="32'"className={styles.avatar} />
            <p className={styles.name}>Welcome, {user.name}</p>
            <Button type="button" variant="contained" onClick={handleLogOut}>Logout</Button>
        </div>
    );
};