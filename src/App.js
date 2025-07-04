import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResearchProjects from "./pages/ResearchProjects";
import Publications from "./pages/Publications";
import Teaching from "./pages/Teaching";
import Team from "./pages/Team";
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
                        <Route path="/team" element={<Team />} />
                        <Route
                            path="/research"
                            element={<ResearchProjects />}
                        />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
