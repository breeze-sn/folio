import React from "react";
import { PersistGate } from "redux-persist/integration/react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Provider } from "react-redux"
import { Persistor, store } from "./reducer.js";


import "./App.css"
import Home from "./Pages/Home.jsx";
import PageChange from "./Components/global/PageChange.jsx";
import Navbar from "./Components/global/Navbar.jsx";
import GlobalFooter from "./Components/global/GlobalFooter.jsx";
import ProjectPage from "./Pages/ProjectPage.jsx";
import ContactPage from "./Pages/ContactPage.jsx";

function App() {
    return (
        <>
            <Provider store={store}>
                <PersistGate loading={null} persistor={Persistor}>
                    <BrowserRouter>
                        <Navbar/>
                        <PageChange />
                        <Routes>
                            <Route path="/" element={<Home />}></Route>
                            <Route path="/project/:index" element={<ProjectPage />}></Route>
                            <Route path="/contact" element={<ContactPage />}></Route>
                        </Routes>
                        <GlobalFooter/>
                    </BrowserRouter>
                </PersistGate>
            </Provider>
        </>
    )
}

export default App;