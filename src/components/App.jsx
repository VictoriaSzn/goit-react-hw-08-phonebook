import { Route, Routes } from 'react-router-dom'; 
import { useDispatch } from 'react-redux';
import { lazy } from 'react';
//import { AppBar } from './AppBar';
import authOperations from 'redux/auth/auth-operations';
import { useAuth } from 'hooks/useAuth';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import { Layout } from './Layout';
import { useEffect } from 'react';
import { Contacts } from 'pages/Contacts';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
//const ContactsPage = lazy(() => import('../pages/Contacts'));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(authOperations.refreshUser());
  }, [dispatch]);
  return (
    !isRefreshing && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage/>} />
          <Route
            path="/register"
            element={
                 <RestrictedRoute component={RegisterPage} redirectTo="/contacts" />
              }
            />
          <Route
            path="/login"
            element={
                 <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
              }
            />
          <Route
            path="/contacts"
            element={
                 <PrivateRoute component={Contacts} redirectTo="/login" />
              }
            />
             <Route path="*" element={<HomePage />} /> 
          </Route>
        </Routes>
      )
    );
};
