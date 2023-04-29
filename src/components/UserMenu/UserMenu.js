import { useDispatch } from "react-redux";
import authOperations from "redux/auth/auth-operations";
import { useAuth } from "hooks/useAuth";
import styles from "../../components/Form.module.css";
import Button from '@mui/material/Button';
//import defaultAvatar from './no-avatar.jpg';

import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';

export default function UserMenu() {
    const dispatch = useDispatch();
    //const avatar = defaultAvatar;
    const { user } = useAuth();
    const handleLogOut = () => dispatch(authOperations.logOut());
    return (
        <div className={styles.userMenuContainer}>
             <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
            >
                  <Avatar alt="" src={"./no-avatar.jpg"} />
              </IconButton>
            <p className={styles.name}>Welcome, {user.name}</p>
            <Button type="button"
                variant="contained"
                onClick={handleLogOut}>Logout</Button>
        </div>
    );
};