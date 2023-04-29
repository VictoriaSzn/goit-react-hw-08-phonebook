import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AppBarMui } from "./AppBarMui";
import { Suspense } from "react";
export const Layout = () => {
    return (
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
            <AppBarMui/>
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
            <Toaster position="bottom-right" reverseOrder={false} />
           
        </div>
    );
};