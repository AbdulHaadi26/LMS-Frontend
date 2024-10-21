import { BrowserRouter } from "react-router-dom";
import PrivateRoute from "./private.route";
import PublicRoute from "./public.route";
import { useSelector } from "react-redux";
import { AuthState } from "../redux/reducers/auth.reducer";
import { RootState } from "../redux/reducers";
import { useCallback } from "react";

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
