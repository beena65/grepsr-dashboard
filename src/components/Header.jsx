import {AppBar, Avatar, Button, IconButton, Toolbar, Typography, Box} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    customTypography: {
        color: "black",
        fontSize: "12px",
    },
});

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar
            position="static"
            style={{background: "#ffffff", height: "50px", boxShadow: "none", border: "0.5px solid #E9EAED"}}
        >
            <Toolbar>
                <Box sx={{display: "flex", alignItems: "center", flexGrow: 1}}>
                    <IconButton edge="start" color="inherit" style={{color: "black"}}>
                        <ArrowBackIosIcon />
                    </IconButton>
                    <Typography variant="h4" className={classes.customTypography}>
                        Amazon Product Price
                    </Typography>

                    <IconButton color="inherit" style={{color: "black"}}>
                        <ErrorOutlineIcon />
                    </IconButton>
                </Box>
                <Box sx={{display: "flex", alignItems: "center"}}>
                    <Button color="inherit">Button</Button>
                    <IconButton color="inherit" style={{color: "black"}}>
                        <NotificationsNoneIcon />
                    </IconButton>
                    <Avatar alt="profile-image" src="" />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
