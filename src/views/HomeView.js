import React from "react";
const styles = {
    container: {
        minHeight: 'calc(100vh-50px)',
       
    },
    title: {
        fontWeight: 500,
        fontSize: 48,
        textAlign: 'center',
    },
};
const HomeView = () => (
    <div style={styles.container}>
        <h1 style={styles.title}>
            welcome to our website
        </h1>
        <p>
            To use the application, you need to log in or register. To quickly
            check the functionality, you can log in with a test login. 
          </p>
    </div>
);
export default HomeView;