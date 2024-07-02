import {Box, Button, Typography} from "@mui/material";
import Filter from "../Icons/Filter";
import ToggleIcon from "../Icons/ToggleIcon";
import EyeIcon from "../Icons/EyeIcon";
import SaveIcon from "../Icons/SaveIcon";
import "./Content.css";
import CustomizedTables from "./Table";
const DataContent = () => {
    return (
        <div>
            <div className="main-content">
                <Box style={{gap: "8px", display: "flex", alignItems: "center"}}>
                    <Button className="customOperation">Operations</Button>
                    <Button className="customFilter">
                        <Filter />
                    </Button>
                </Box>
                <Box className="main-items">
                    <Typography variant="h4" className="main-edit  hidden-xs">
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
        </div>
    );
};

export default DataContent;
