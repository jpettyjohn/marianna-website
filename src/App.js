import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Publications from "./pages/Publications";
import Teaching from "./pages/Teaching";
import Main from "./pages/Main";
import Navbar from "./components/NavBar";
import "./App.css";
//import "./css/App.scss";

function App() {
    return (
        <Router>
            <div className="app">
                <Navbar></Navbar>
                <main>
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route
                            path="/publications"
                            element={<Publications />}
                        />
                        <Route path="/teaching" element={<Teaching />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
