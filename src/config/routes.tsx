import { Home, SignIn } from "../pages";

export const routes = [
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/",
    element: <Home />,
  },
];
