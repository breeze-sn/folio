import { combineReducers, configureStore } from "@reduxjs/toolkit";
import captureReducer from "./Reducers/CaptureDetails.js";
import { themeReducer } from "./Reducers/Theme.js";
import { UserReducer } from "./Reducers/UserDetails.js";
import { globalReducer } from "./Reducers/GlobalReducer.js";

export const store = configureStore({
    reducer: {
        CaptureReducer: captureReducer,
        ThemeReducer: themeReducer,
        UserReducer: UserReducer,
        globalReducer: globalReducer
    }
});

export const rootReducer = combineReducers({
    captureReducer: captureReducer,
    themeReducer: themeReducer,
    userReducer: UserReducer,
    globalReducer: globalReducer
})