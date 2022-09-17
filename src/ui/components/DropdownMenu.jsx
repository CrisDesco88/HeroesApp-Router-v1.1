import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";

const ITEM_HEIGHT = 48;

export const DropdownMenu = ({ options }) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const activeClassName = "underline";

	return (
		<div>
			<Button
				onClick={handleClick}
				sx={{ my: {md:2}, color:{md:'#fff'},display: "block" }}
				aria-label="more"
				id="long-button"
				aria-controls={open ? "long-menu" : undefined}
				aria-expanded={open ? "true" : undefined}
				aria-haspopup="true"
			>
				Publishers
			</Button>
			<Menu
				id="long-menu"
				MenuListProps={{
					"aria-labelledby": "long-button",
				}}
				sx={{ color: "#000" }}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				PaperProps={{
					style: {
						maxHeight: ITEM_HEIGHT * 4.5,
						width: "20ch",
					},
				}}
			>
				{options.map((option) => (
					<MenuItem
						key={option}
						selected={option === "Marvel Comics"}
						onClick={handleClose}
					>
						<NavLink to={option}>
							<Typography variant="subtitle2" sx={{ color: "primary.dark" }}>
								{option}
							</Typography>
						</NavLink>
					</MenuItem>
				))}
			</Menu>
		</div>
	);
};
