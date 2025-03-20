import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Publications from "./pages/Publications";
import Navbar from "./components/NavBar";
import "./App.css";

function App() {
    return (
        <Router>
            <div className="app">
                <Navbar></Navbar>
                <main>
                    <Routes>
                        <Route path="/" element={<Publications />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
