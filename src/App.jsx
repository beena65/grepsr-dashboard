import {lazy, Suspense} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";

const Home = lazy(() => import("./components/Header/Home"));
const Workflow = lazy(() => import("./components/Content/WorkContent"));
const Credit = lazy(() => import("./components/Content/CreditContent"));

function App() {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/workflow" element={<Workflow />} />
                    <Route path="/credit" element={<Credit />} />
                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;
