import Navigation from "./Navigation";
import AuthNav from './AuthNav';
import UserMenu from "./UserMenu/UserMenu";
import { useAuth } from '../hooks/useAuth';

const styles = {
    header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',   
  }  
};
export const AppBar = () => {
    const { isLoggedIn } = useAuth();
    return (
        <header style={styles.header}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    );
};