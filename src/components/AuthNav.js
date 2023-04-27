import { NavLink } from "react-router-dom";

const styles = {
    link: {
        padding:12,
        fontWeight:700,
        color:'#2a363b',
    },
    activeLink: {
        color:'#e84a5f',
    },
};

export default function AuthNav() {
    return (
        <div>
            <NavLink
                to="/register"
                exact
                style={styles.link}
                activestyle={styles.activeLink}>
                Register
            </NavLink>
            <NavLink
                to="/login"
                exact
                style={styles.link}
                activestyle={styles.activeLink}>
                Log In
            </NavLink>
        </div>
    );
};
