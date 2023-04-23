import {
  createBrowserRouter,
  RouterProvider as ReactRouterDomProvider,
} from "react-router-dom";
import { routes } from "../config";

const router = createBrowserRouter(routes);

export function RouterProvider() {
  return <ReactRouterDomProvider router={router} />;
}
