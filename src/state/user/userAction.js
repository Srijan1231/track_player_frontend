import { loginUser } from "../../helper/axios";
import { setUser } from "./userSlice";

export const signInUserAction = (obj) => async (dispatch) => {
  const { status, user } = await loginUser(obj);

  if (status === "success") {
    dispatch(setUser(user));
  }
};
