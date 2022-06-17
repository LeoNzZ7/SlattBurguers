import { useRoutes } from "react-router-dom";
import { FormPage } from "../pages/form";
import { NotFoundPage } from "../pages/notFound";
import { Home } from "../pages/home";
import { FoodMenu } from "../pages/menu";

export const PublicRoutes = () => {
    return useRoutes([
        {path: '/', element: <Home/>},
        {path: '/menu', element: <FoodMenu/>},
        {path: '/form', element: <FormPage/>},
        {path: '*', element: <NotFoundPage/>}
    ]);
};