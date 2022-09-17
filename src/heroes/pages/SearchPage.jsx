import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

import queryString from "query-string";

import { HeroCard } from "../components/HeroCard";
import {
	Divider,
	Grid,
	IconButton,
	InputBase,
	Paper,
	Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

import { HeroesContext } from "../context/HeroesContext";
import { Box } from "@mui/system";

export const SearchPage = () => {
	const { getHeroByName } = useContext(HeroesContext);
	const navigate = useNavigate();
	const location = useLocation();

	const { q = "" } = queryString.parse(location.search);

	const heroes = getHeroByName(q);

	const { searchText, onInputChange, onResetForm } = useForm({
		searchText: q,
	});

	const onSearchSubmit = (event) => {
		event.preventDefault();
		if (searchText.trim().length <= 1) return;
		navigate(`?q=${searchText}`);
	};

	const onClearSearch = () => {
		navigate("/search");
		onResetForm();
	};

	return (
		<Paper
			sx={{
				width: "90vw",
				margin: "2em auto",
				backgroundColor: "#58417b",
				opacity: ".9",
				padding: "2em",
			}}
		>
			<Typography variant="h2" sx={{ color: "primary.contrastText" }}>
				Search
			</Typography>
			<Divider
				sx={{ background: "#fff", margin: "1em 0" }}
				orientation="horizontal"
			/>
			<Grid>
				<Grid>
					<Typography variant="h4" color="primary.contrastText">
						Search your hero
					</Typography>
				</Grid>
				<Grid mt={"1em"}>
					<Paper
						component="form"
						onSubmit={onSearchSubmit}
						sx={{
							p: "2px 4px",
							display: "flex",
							alignItems: "center",
							maxWidth: "300px",
						}}
					>
						<InputBase
							sx={{ ml: 1, flex: 1 }}
							type="text"
							placeholder="Your hero's name"
							name="searchText"
							autoComplete="off"
							value={searchText}
							onChange={onInputChange}
							inputProps={{ "aria-label": "search Heroes" }}
						/>

						<IconButton
							sx={{ p: "10px", color: "primary.dark" }}
							aria-label="clear"
							onClick={onClearSearch}
						>
							<ClearIcon />
						</IconButton>
						<Divider orientation="vertical" variant="middle" flexItem />
						<IconButton
							type="button"
							sx={{ p: "10px", color: "primary.dark" }}
							aria-label="search"
							onClick={onSearchSubmit}
						>
							<SearchIcon />
						</IconButton>
					</Paper>
				</Grid>
				<Divider
					sx={{ background: "#fff", margin: "2em 0" }}
					orientation="horizontal"
				/>
				<Grid sx={{ mt: "1em" }}>
					<Typography variant="h4" color="primary.contrastText">
						Results
					</Typography>
					<Divider sx={{ width: "100%", m: 0.5 }} />

					<Box
						className="alert alert-primary"
						sx={{ display: q === "" ? "" : "none" }}
					>
						<Typography color="primary.contrastText">Search a hero</Typography>
					</Box>
					<Grid container sx={{ margin: "0 auto" }} justifyContent="center">
						{!heroes.length && q !== "" && (
							<div className="alert alert-danger">
								<Typography color="primary.contrastText">
									No hero with <b> {q} </b>
								</Typography>
							</div>
						)}

						{heroes.map((hero) => (
							<HeroCard key={hero.id} {...hero} />
						))}
					</Grid>
				</Grid>
			</Grid>
		</Paper>
	);
};
