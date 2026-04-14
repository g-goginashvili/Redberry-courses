import { createBrowserRouter } from "react-router";
import { RandomPlaceholderPage } from "../random-placeholder";

const router = createBrowserRouter([
    {
        path: "/",
        Component: RandomPlaceholderPage
    },
]);

export default router;