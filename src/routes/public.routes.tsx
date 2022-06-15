import { useRoutes } from "react-router-dom";
import { FormPage } from "../pages/form";
import { NotFoundPage } from "../pages/notFound";
import { Home } from "../pages/home";
import { Menu } from "../pages/menu";

export const PublicRoutes = () => {
    return useRoutes([
        {path: '/', element: <Home/>},
        {path: '/menu', element: <Menu/>},
        {path: '/form', element: <FormPage/>},
        {path: '*', element: <NotFoundPage/>}
    ]);
};