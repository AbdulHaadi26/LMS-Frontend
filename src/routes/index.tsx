import { useCallback } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { RootState } from "../redux/reducers";
import { AuthState } from "../redux/reducers/auth.reducer";
import PrivateRoute from "./private.route";
import PublicRoute from "./public.route";

const RenderRoutes = () => {
  const authState: AuthState = useSelector((state: RootState) => state.Auth);

  const { isAuth } = authState;

  const template = useCallback(() => {
    return (
      <BrowserRouter>
        {isAuth ? <PrivateRoute /> : <PublicRoute />}
      </BrowserRouter>
    );
  }, [isAuth]);

  return template();
};

export default RenderRoutes;
