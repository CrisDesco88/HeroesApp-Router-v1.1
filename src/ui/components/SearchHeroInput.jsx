import { Box, Divider, IconButton, InputBase, Paper } from "@mui/material";
import React, { useContext, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DirectionsIcon from "@mui/icons-material/Directions";
import SearchIcon from "@mui/icons-material/Search";
import { HeroesContext } from "../../heroes/context/HeroesContext";
import queryString from "query-string";
import { useForm } from "../../hooks";

export const SearchHeroInput = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { getHeroByName } = useContext(HeroesContext);
	const { q = "" } = queryString.parse(location.search);

	const heroes = useMemo(() => getHeroByName(q), [q]);

	const { searchText, onInputChange } = useForm({
		searchText: q,
	});

	const onSearchSubmit = (event) => {
		event.preventDefault();
		if (searchText.trim().length <= 1) return;

		navigate(`?q=${searchText}`);
	};

	

	return (
		<Box>
			<Paper
				component="form"
				sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 300 }}
			>
				<InputBase
					sx={{ ml: 1, flex: 1 }}
					placeholder="Search your hero"
					inputProps={{ "aria-label": "search Heroes" }}
				/>
				<IconButton type="button" sx={{ p: "10px" }} aria-label="search">
					<SearchIcon />
				</IconButton>
				<Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
				<IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
					<DirectionsIcon />
				</IconButton>
			</Paper>
		</Box>
	);
};
