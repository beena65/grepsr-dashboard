import {Box, Button, List, ListItem, ListItemIcon, Typography} from "@mui/material";
import DatasetIcon from "../Icons/DatasetIcon";
import WorkflowIcon from "../Icons/WorkflowIcon";
import CreditIcon from "../Icons/CreditIcon";
import "./Sidebar.css";

const listItems = [{icon: <DatasetIcon />}, {icon: <WorkflowIcon />}, {icon: <CreditIcon />}];

const Sidebar = () => {
    return (
        <Box className="sidebarContainer">
            <Typography variant="h5" className="customTypography">
                Grepsr
            </Typography>
            <Box className="content">
                <List>
                    {listItems.map((item, index) => (
                        <ListItem key={index} className="listItem">
                            <ListItemIcon>{item.icon}</ListItemIcon>
                        </ListItem>
                    ))}
                </List>
            </Box>
            <Box className="buttonContainer">
                <Typography variant="h6" className="customSupport">
                    Need any help?
                </Typography>
                <Button variant="contained" className="customButton">
                    Contact Support
                </Button>
            </Box>
        </Box>
    );
};

export default Sidebar;
