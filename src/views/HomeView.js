import React from "react";
import styles from "../components/Form.module.css";
import openBookImg from '../images/open-book.jpg';

const book = openBookImg;
const HomeView = () => (
    <div className={styles.container}>
        <h1 className={styles.title}>
            Welcome to Phone book
        </h1>
        <div className={styles.homePage}>
        <p >
            To use the application, you need to log in or register. <br/>To quickly
            check the functionality, you can log in with a test login. 
        </p>
        {/* <img src={book} alt="" width="250" className={styles.homePageImg}/> */}
        </div>
    </div>
);
export default HomeView;