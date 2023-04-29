import React from "react";
import styles from "../components/Form.module.css";
import openBookImg from '../images/razvorot-knigi.jpg';

const book = openBookImg;
const HomeView = () => (
    <div className={styles.container}>
        <h1 >
           Home pages
        </h1>
        <div className={styles.homePage}>
            <h2 > Welcome to Phone book</h2>
        <p >
            To use the application, you need to log in or register. <br/>To quickly
            check the functionality, you can log in with a test login. 
        </p>
         <img src={book} alt="" width="350" className={styles.homePageImg}/>
        </div>
    </div>
);
export default HomeView;