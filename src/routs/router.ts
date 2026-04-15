import { createBrowserRouter } from "react-router";
import { Dashboard } from "../module/dashboard/dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Dashboard
    },
]);

export default router;