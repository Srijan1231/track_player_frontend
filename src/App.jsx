import Authentication from "./pages/user/Authentication";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { getUserProfileAction } from "./state/user/userAction";

function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getUserProfileAction());
  // }, [dispatch]);
  return (
    <Routes>
      <Route path='/:authParams' element={<Authentication />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
