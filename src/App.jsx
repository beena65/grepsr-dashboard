import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header";
import "./App.css";
function App() {
    return (
        <div style={{display: "flex", height: "100vh", flex: 1}}>
            <Sidebar />
            <div style={{flex: 6, display: "flex", flexDirection: "column"}}>
                <Header />
                <div style={{flex: 1, overflowY: "auto"}}>{/* Your main content goes here */}</div>
            </div>
        </div>
    );
}

export default App;
