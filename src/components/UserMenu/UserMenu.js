import { useDispatch, useSelector } from "react-redux";
import authOperations from "redux/auth/auth-operations";
import { selectUser } from '../../redux/auth/auth-selectors'
import { useAuth } from "hooks/useAuth";

import defaultAvatar from './no-avatar.jpg';
const styles = {
    container: {
        display: 'flex',
        alignItems:'center',
    },
    avatar: {
        marginRight: 4,
    },
    name: {
        fontWeight:700,
        marginRight: 4,
    },
};

export default function UserMenu() {
    const dispatch = useDispatch();
    //const name = useSelector(selectUser);
    const avatar = defaultAvatar;
    const { user } = useAuth();
    const handleLogOut = () => dispatch(authOperations.logOut());
    return (
        <div style={styles.container}>
            <img src={avatar} alt="" width="32" style={styles.avatar} />
            <p style={styles.name}>Welcome, {user.name}</p>
            <button type="button"onClick={handleLogOut}>Logout</button>
        </div>
    );
};