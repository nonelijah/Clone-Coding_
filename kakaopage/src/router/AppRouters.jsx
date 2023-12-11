import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../page/Home";

export default function AppRouters() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    );
}
