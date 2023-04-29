import Navigation from "./Navigation";
import AuthNav from './AuthNav';
import UserMenu from "./UserMenu/UserMenu";
import { useAuth } from '../hooks/useAuth';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// const styles = {
//     header: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   }
// };
// export const AppBarMui = () => {
//     const { isLoggedIn } = useAuth();
//     return (
//         <header style={styles.header}>
//             <Navigation />
//             {isLoggedIn ? <UserMenu /> : <AuthNav />}
//         </header>
//     );
// };

export const AppBarMui = () => {
    const { isLoggedIn } = useAuth();
     return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         
           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           <Navigation />
          </Typography> 
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
