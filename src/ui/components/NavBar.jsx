import {
	AppBar,
	Box,
	IconButton,
	Typography,
	Menu,
	Container,
	Avatar,
	Button,
	Tooltip,
	MenuItem,
	Link,
	Toolbar,
} from "@mui/material";
import StarsIcon from "@mui/icons-material/Stars";
import MenuIcon from "@mui/icons-material/Menu";

import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../store/auth/thunks";
import { DropdownMenu } from "./DropdownMenu";
import { HeroesContext } from "../../heroes/context/HeroesContext";
import { useNavigate } from "react-router-dom";


export const Navbar = () => {
	const [anchorElNav, setAnchorElNav] = useState(null);
	const [anchorElUser, setAnchorElUser] = useState(null);

	const { getPublishers } = useContext(HeroesContext);
	const publishers = getPublishers();
	const navigate = useNavigate();
	
	const { displayName, photoURL } = useSelector((state) => state.auth);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};
	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const dispatch = useDispatch();
	const onLogout = () => {
		dispatch(startLogout());
	};

	const goToSearchPage = () => {
		navigate("/search");
	};

	return (
		<AppBar position="sticky" sx={{ backgroundColor: "primary.dark" }}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<StarsIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
					<Typography
						variant="h6"
						noWrap
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".1rem",
							color: "inherit",
							textDecoration: "none",
						}}
					>
						<Link href="/" underline="none" sx={{ color: "white" }}>
							<Typography
								variant="h5"
								noWrap
								sx={{
									mr: 2,
									display: { xs: "flex" },
									flexGrow: 1,
									fontFamily: "monospace",
									fontWeight: 700,
									letterSpacing: ".1rem",
									color: "inherit",
									textDecoration: "none",
								}}
							>
								Hero App
							</Typography>
						</Link>
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
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
							<DropdownMenu options={publishers} />
							<Button onClick={goToSearchPage} sx={{ color: { md: "#fff" } }}>
								Search
							</Button>
						</Menu>
					</Box>
					<StarsIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
					<Typography
						variant="h5"
						noWrap
						component="a"
						href=""
						sx={{
							mr: 2,
							display: { xs: "flex", md: "none" },
							flexGrow: 1,
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".1rem",
							color: "inherit",
							textDecoration: "none",
						}}
					>
						Hero App
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
						<DropdownMenu options={publishers} />
						<Button onClick={goToSearchPage} sx={{ color: "#fff" }}>
							Search
						</Button>
					</Box>

					<Box sx={{ flexGrow: 0, display:'flex' }}>
						<Typography variant="h6" sx={{ display: { xs:'none' , md:"flex" }, mr:2 }}>
							{displayName}
						</Typography>
						<Tooltip title="Open settings">
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar alt="profile-img" src={`${photoURL}`} />
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: "45px" }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							<MenuItem onClick={onLogout}>
								<Typography textAlign="center">Logout</Typography>
							</MenuItem>
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
