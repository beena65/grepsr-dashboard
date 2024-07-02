/* eslint-disable react/prop-types */
import {Box, Button, Typography} from "@mui/material";
import Filter from "../Icons/Filter";
import ToggleIcon from "../Icons/ToggleIcon";
import EyeIcon from "../Icons/EyeIcon";
import SaveIcon from "../Icons/SaveIcon";
import "./Content.css";
import CustomizedTables from "./Table";

const MainContent = ({selectedContent}) => {
    const renderContent = () => {
        switch (selectedContent) {
            case 0:
                return (
                    <>
                        <div className="main-content">
                            <Box style={{gap: "8px", display: "flex", alignItems: "center"}}>
                                <Button className="customOperation">Operations</Button>
                                <Button className="customFilter">
                                    <Filter />
                                </Button>
                            </Box>
                            <Box className="main-items">
                                <Typography variant="h4" className="main-edit">
                                    Edit mode <ToggleIcon />
                                </Typography>

                                <Button className="main-edit">
                                    <EyeIcon />
                                </Button>
                                <Button>
                                    <SaveIcon />
                                </Button>
                            </Box>
                        </div>
                        <Box>
                            <CustomizedTables />
                        </Box>
                    </>
                );
            case 1:
                return <div>Workflow Content</div>;
            case 2:
                return <div>Credit Content</div>;
            default:
                return <div>Select an item from the sidebar</div>;
        }
    };
    return <div style={{display: "flex", flexDirection: "column", padding: "4px 16px"}}>{renderContent()}</div>;
};

export default MainContent;
