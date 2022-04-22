import React from "react";
import Posts from "../Posts/Posts";
import { Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Posts/>}/>
        </Routes>
    )
}
export default App;