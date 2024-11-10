import { configureStore } from "@reduxjs/toolkit";
import trackReducer from "./state/track/trackSlice";
import userReducer from "./state/user/userSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const userPersistConfig = {
  key: "userInfo",
  storage,
};

const persistedUserReducer = persistReducer(userPersistConfig, userReducer);

const store = configureStore({
  reducer: {
    trackInfo: trackReducer,
    userInfo: persistedUserReducer,
  },
});

const persister = persistStore(store);

export { store, persister };
