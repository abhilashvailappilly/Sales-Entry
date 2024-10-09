import { configureStore, combineReducers } from "@reduxjs/toolkit";
import dataReducer from "./Slice/DataSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // default is localStorage for web

const persistConfig = {
  key: "root", 
  storage,     
 
};

const rootReducer = combineReducers({
  root: dataReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;
