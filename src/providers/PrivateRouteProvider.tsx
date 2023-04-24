import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export function PrivateRouteProvider() {
  const auth = useSelector((state: RootState) => state.auth);

  if (!auth.username) return <Navigate to="/signin" />;

  return <Outlet />;
}
