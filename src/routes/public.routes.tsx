import { useRoutes } from "react-router-dom";
import { FormPage } from "../pages/form";
import { NotFoundPage } from "../pages/notFound";
import App from "../App";

export const PublicRoutes = () => {
    return useRoutes([
        {path: '/form', element: <FormPage/>},
        //{path: '*', element: <NotFoundPage/>}
    ])
}