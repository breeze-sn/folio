import React from "react";
import { PersistGate } from "redux-persist/integration/react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Provider } from "react-redux"
import { Persistor, store } from "./reducer.js";


import "./App.css"
import Home from "./Pages/Home.jsx";
function App() {
    return (
        <>
            <Provider store={store}>
                <PersistGate loading={null} persistor={Persistor}>
                    <BrowserRouter>
                        <Routes>
                          <Route path="/" element={<Home/>}></Route>
                        </Routes>
                    </BrowserRouter>
                </PersistGate>
            </Provider>
        </>
    )
}

export default App;