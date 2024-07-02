import {Box, Button} from "@mui/material";
import Filter from "../Icons/Filter";

const MainContent = () => {
    return (
        <div style={{marginTop: "26px", marginLeft: "10px"}}>
            <Box style={{gap: "8px", display: "flex"}}>
                <Button variant="contained" className="customButton">
                    Operations
                </Button>
                <Button variant="contained" className="customFilter">
                    <Filter /> Add Filters
                </Button>
            </Box>
            <Box></Box>
        </div>
    );
};

export default MainContent;
