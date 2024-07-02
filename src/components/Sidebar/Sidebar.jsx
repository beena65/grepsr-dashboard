/* eslint-disable react/prop-types */
import {Box, Button, List, ListItemIcon, Typography} from "@mui/material";
import "./Sidebar.css";
import work from "../../assets/work.png";
import data from "../../assets/data.png";
import credit from "../../assets/credit.png";

const listItems = [
    {image: data, label: "Dataset"},
    {image: work, label: "Workflow"},
    {image: credit, label: "Credit"},
];

const Sidebar = ({isSidebarOpen, onItemClick, activeIndex}) => {
    return (
        <Box className={`sidebarContainer ${isSidebarOpen ? "" : "hidden"}`}>
            <Typography variant="h5" className="customTypography">
                Grepsr
            </Typography>
            <Box className="content">
                <List>
                    {listItems.map((item, index) => (
                        <div
                            key={index}
                            className={`listItem ${activeIndex === index ? "active" : ""}`}
                            onClick={() => onItemClick(index)}
                        >
                            <ListItemIcon style={{minWidth: "auto"}}>
                                <img src={item.image} alt={item.label} style={{width: 24, height: 24}} />
                            </ListItemIcon>
                            <Typography
                                variant="body1"
                                className={`listItemText ${activeIndex === index ? "active" : ""}`}
                            >
                                {item.label}
                            </Typography>
                        </div>
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
