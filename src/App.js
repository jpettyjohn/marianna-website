import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Materials from "./pages/Materials";
import Structures from "./pages/Structures";
import Publications from "./pages/Publications";
import Teaching from "./pages/Teaching";
import Team from "./pages/Team";
import Hobbies from "./pages/Hobbies";
import Main from "./pages/Main";
import Navbar from "./components/NavBar";
import Titles from "./pages/Titles";
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
                        <Route path="/materials" element={<Materials />} />
                        <Route path="/structures" element={<Structures />} />
                        <Route path="/hobbies" element={<Hobbies />} />
                        <Route path="/titles" element={<Titles />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
