import {useState} from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "./Header";
import MainContent from "../Content/MainContent";

const Home = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [selectedContent, setSelectedContent] = useState(0);

    const toggleSidebar = () => {
        setSidebarOpen((prev) => !prev);
    };
    const handleItemClick = (index) => {
        setSelectedContent(index);
    };
    return (
        <div className={`App ${isSidebarOpen ? "content-wrap" : "sidebar-hidden"}`}>
            <div className="content-wrapper">
                {isSidebarOpen && (
                    <Sidebar
                        isSidebarOpen={isSidebarOpen}
                        activeIndex={selectedContent}
                        onItemClick={handleItemClick}
                    />
                )}
            </div>

            <div style={{flex: 6, display: "flex", flexDirection: "column"}}>
                <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                <div style={{flex: 1, overflowY: "auto", background: "#F6F5FB"}}>
                    <MainContent selectedContent={selectedContent} />
                </div>
            </div>
        </div>
    );
};

export default Home;
