import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "hooks/useAuth";

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

const Navigation = () => {
    const { isLoggedIn } = useAuth();
    return (
        <nav>
            <NavLink to="/" exact style={styles.link} activestyle={styles.activeLink}>
                Home
            </NavLink>
            
            {isLoggedIn && (
                <NavLink to="/contacts" exact style={styles.link} activestyle={styles.activeLink}>
                  Contacts
                </NavLink>
            )}
        </nav>
    );
};
export default Navigation;