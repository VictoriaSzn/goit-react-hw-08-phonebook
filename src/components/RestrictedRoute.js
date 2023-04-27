import { Navigate } from "react-router-dom";
import { useAuth } from "hooks/useAuth";

export default function RestrictedRoute({
    //restricted = false,
     redirectTo = '/',
     component: Component,
  }) {
    const { isLoggedIn } = useAuth();
   // const shouldRedirect = isLoggedIn && restricted;
    return (
        isLoggedIn ? <Navigate to={redirectTo} /> : <Component />
    );
}
