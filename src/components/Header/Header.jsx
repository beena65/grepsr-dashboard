/* eslint-disable react/prop-types */
import {AppBar, Avatar, Button, IconButton, Toolbar, Typography, Box} from "@mui/material";
import Arrowback from "../Icons/Arrowback";
import Erroroutline from "../Icons/Erroroutline";
import Materialsymbol from "../Icons/Materialsymbol";
import Infinite from "../Icons/Infinite";
import NotificationIcon from "../Icons/NotificationIcon";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/profile.png";
import "./Header.css";

const Header = ({isSidebarOpen, toggleSidebar}) => {
    return (
        <AppBar position="static" className="App-bar">
            <Toolbar className="tool-bar">
                <Box sx={{flexGrow: 1}} className="box-wrap">
                    <IconButton edge="start" onClick={toggleSidebar}>
                        {isSidebarOpen ? <Arrowback /> : <MenuIcon />}
                    </IconButton>
                    <Typography variant="h4" className="customtypography">
                        Amazon product price
                    </Typography>

                    <IconButton>
                        <Erroroutline />
                    </IconButton>
                </Box>
                <Box className="box-wrap">
                    <Button className="custombutton">
                        <Materialsymbol />
                        <span>Credit usage: 1018 /</span>
                        <Infinite />
                    </Button>
                    <IconButton>
                        <NotificationIcon />
                    </IconButton>
                    <Avatar alt="profile-image" src={logo} className="profile-image" />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
