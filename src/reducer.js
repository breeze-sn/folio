import storage from "redux-persist/lib/storage"
import { persistReducer,persistStore } from "redux-persist"
import { configureStore } from "@reduxjs/toolkit"
import { rootReducer } from "./store/store"

const rootPersistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['userReducer','themeReducer']
}

const persistreducer = persistReducer(rootPersistConfig,rootReducer);

export const store = configureStore({
    reducer: persistreducer
})

export const Persistor = persistStore(store)