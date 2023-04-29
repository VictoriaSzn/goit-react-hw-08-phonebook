import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "hooks/useAuth";
import styles from "../components/Form.module.css";

const Navigation = () => {
    const { isLoggedIn } = useAuth();
    return (
        <nav>
            <NavLink to="/" exact className={styles.link}  activeStyle={{fontWeight: "bold",color: "red" }}>
                Home
            </NavLink>
            
            {isLoggedIn && (
                <NavLink to="/contacts" exact className={styles.link} activeClassName={styles.activeLink}>
                  Phone book
                </NavLink>
            )}
        </nav>
    );
};
export default Navigation;