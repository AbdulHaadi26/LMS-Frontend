import { useEffect } from "react";
import { FluidContainer } from "./components/containers";
import RenderRoutes from "./routes";
import { AuthState } from "./redux/reducers/auth.reducer";
import { useSelector } from "react-redux";
import { RootState } from "./redux/reducers";

function App() {
  const authState: AuthState = useSelector((state: RootState) => state.Auth);
  const { isAuth } = authState;

  useEffect(() => {
    if (!isAuth) {
      // GET PROFILE
    }
  }, [isAuth]);

  return (
    <FluidContainer className="items-center justify-center">
      <RenderRoutes />
    </FluidContainer>
  );
}

export default App;
