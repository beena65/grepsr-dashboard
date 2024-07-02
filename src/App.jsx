import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import "./App.css";
import {useState} from "react";
import MainContent from "./components/Content/MainContent";
function App() {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen((prev) => !prev);
    };
    return (
        <div className={`App ${isSidebarOpen ? "content-wrap" : "sidebar-hidden"}`}>
            <div className="content-wrapper">{isSidebarOpen && <Sidebar isSidebarOpen={isSidebarOpen} />}</div>

            <div style={{flex: 6, display: "flex", flexDirection: "column"}}>
                <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                <div style={{flex: 1, overflowY: "auto", background: "#F6F5FB"}}>
                    <MainContent />
                </div>
            </div>
        </div>
    );
}

export default App;
