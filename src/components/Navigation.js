import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "hooks/useAuth";
import styles from "../components/Form.module.css";
import styled from "styled-components";

const StyledLink = styled(NavLink)`
    padding: 12px;
    color: #fff;
    text-decoration: none;
    font-size: 25px;
&.active{
    color: black;
}`;
const Navigation = () => {
    const { isLoggedIn } = useAuth();
    return (
        <nav>
            <StyledLink to="/" exact>
                Home
            </StyledLink>
            
            {isLoggedIn && (
                <StyledLink to="/contacts" exact >
                  Phone book
                </StyledLink>
            )}
        </nav>
    );
};
export default Navigation;