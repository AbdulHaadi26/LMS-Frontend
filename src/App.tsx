import "font-awesome/css/font-awesome.min.css";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FluidContainer } from "./components/containers";
import SpinnerLoader from "./components/loaders/spinner.loader";
import { signOut } from "./redux/actions/auth.action";
import { getLocalStorageValue } from "./redux/actions/localStorage.service";
import { getProfile } from "./redux/actions/user.action";
import { RootState } from "./redux/reducers";
import { ProfileState } from "./redux/reducers/profile.reducer";
import RenderRoutes from "./routes";
import { LocalStorageItemNames } from "./utils/enum";
import { DispatchType } from "./utils/types";

function App() {
  const dispatch: DispatchType = useDispatch();

  const { isLoading }: ProfileState = useSelector(
    (state: RootState) => state.Profile
  );

  useEffect(() => {
    const token = getLocalStorageValue(LocalStorageItemNames.TOKEN);

    if (token) {
      dispatch(getProfile());
    } else {
      dispatch(signOut());
    }
  }, [dispatch]);

  const template = useCallback(() => {
    return (
      <FluidContainer className="items-center justify-center">
        {isLoading ? <SpinnerLoader /> : <RenderRoutes />}
      </FluidContainer>
    );
  }, [isLoading]);

  return template();
}

export default App;
