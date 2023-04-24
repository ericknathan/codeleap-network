import { Home, SignIn } from "@/pages";
import { PrivateRouteProvider } from "@/providers";

export const routes = [
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/",
    element: <PrivateRouteProvider />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
];
