/* eslint-disable react/prop-types */
import "./Content.css";
import DataContent from "./DataContent";
import WorkContent from "./WorkContent";
import CreditContent from "./CreditContent";

const MainContent = ({selectedContent}) => {
    const renderContent = () => {
        switch (selectedContent) {
            case 0:
                return <DataContent />;
            case 1:
                return <WorkContent />;
            case 2:
                return <CreditContent />;
            default:
                return <div>Select an item from the sidebar</div>;
        }
    };
    return <div style={{display: "flex", flexDirection: "column", padding: "4px 16px"}}>{renderContent()}</div>;
};

export default MainContent;
