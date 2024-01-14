import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import ThemeChanger from "./ThemeChanger";

import LOGO from "../../assets/logo.png";
import { Typography } from "@mui/material";

const pages = [
    {
        name: "Home",
        route: "",
        color: "white",
        miniColor: "gray",
    },
    {
        name: "Blogs",
        route: "blogs",
        color: "white",
        miniColor: "gray",
    },
    {
        name: "Contests",
        route: "contests",
        color: "white",
        miniColor: "gray",
    },
    // },
    // {
    //     name: "ProblemSet",
    //     route: "problemset",
    //     color: "white",
    //     miniColor: "gray",
    // },
    {
        name: "Ratings",
        route: "ratings",
        color: "yellow",
        miniColor: "red",
    },
    {
        name: "About Us",
        route: "about",
        color: "white",
        miniColor: "gray",
    },
];

const Header = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const navigate = useNavigate();
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = (page) => {
        setAnchorElNav(null);
        if (page && "route" in page) navigate(page.route);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="small"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page.name}
                                    onClick={() => handleCloseNavMenu(page)}
                                >
                                    <Typography textAlign="center">{page.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                        <div
                            id="logo-and-name"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                cursor: "pointer",
                            }}
                            onClick={() => navigate("")}
                        >
                            <div className="logo-container">
                                <img src={LOGO} width="50px" alt="TheForces logo" />
                            </div>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{
                                    mr: 2,
                                    margin: "5px",
                                    display: { xs: "none", md: "flex" },
                                }}
                            >
                                TheForces
                            </Typography>
                        </div>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <div
                            id="logo-and-name"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                cursor: "pointer",
                            }}
                            onClick={() => navigate("")}
                        >
                            <div className="logo-container" style={{ marginTop: '3px' }}>
                                <img src={LOGO} width="50px" alt="TheForces logo" />
                            </div>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{
                                    mr: 2,
                                    margin: "5px",
                                    display: { xs: "flex", md: "none" },
                                }}
                            >
                                TheForces
                            </Typography>
                        </div>
                    </Box>

                    <Box sx={{ display: { xs: "none", md: "flex" } }}>
                        {pages.map((page) => (
                            <Button
                                key={page.name}
                                onClick={() => handleCloseNavMenu(page)}
                                sx={{ my: 2, color: `${page.color}`, display: "block" }}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>
                    <ThemeChanger />
                </Toolbar>
            </Container>
        </AppBar>
    )
};
export default Header;
