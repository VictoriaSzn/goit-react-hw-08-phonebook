import { NavLink } from "react-router-dom";
import styles from "../components/Form.module.css";

export default function AuthNav() {
    return (
        <div>
            <NavLink
                to="/register"
                exact
                className={styles.link}
                //activestyle={styles.activeLink}
            >
                Register
            </NavLink>
            <NavLink
                to="/login"
                exact
                className={styles.link}
                //activestyle={styles.activeLink}
            >
                Log In
            </NavLink>
        </div>
    );
};
