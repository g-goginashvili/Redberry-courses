import { createBrowserRouter, Outlet } from "react-router";
import { Dashboard } from "../module/dashboard/dashboard";
import { HeaderNavbar } from "../components/header-navbar/header-navbar";
import { Footer } from "../components/footer/footer";
import { CourseCatalog } from "../module/course-catalog/course-catalog";

const Layout = () => (
    <>
        <HeaderNavbar />
        <Outlet />
        <Footer />
    </>
);

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                Component: Dashboard
            },
            {
                path: "/dashboard",
                Component: Dashboard
            },
            {
                path: "/course-catalog",
                Component: CourseCatalog
            },

        ]
    }
]);

export default router;