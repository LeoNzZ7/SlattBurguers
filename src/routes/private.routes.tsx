import { useRoutes } from "react-router-dom";
import { FormPage } from "../pages/form";
import { NotFoundPage } from "../pages/notFound";
import { Home } from "../pages/home";

export const PrivateRoutes = () => {
    return useRoutes([
        {path: '/', element: <Home/>},
        {path: '*', element: <NotFoundPage/>}
    ]);
};