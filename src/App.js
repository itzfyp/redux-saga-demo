import React from "react";
import { BrowserRouter } from 'react-router-dom';
import StoreProvider from "../src/store/StoreProvider";
import Home from "./pages/Home/Home";

export default () => (
    <StoreProvider>
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    </StoreProvider>
);


