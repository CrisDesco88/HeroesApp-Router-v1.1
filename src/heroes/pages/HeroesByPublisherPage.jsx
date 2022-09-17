import { Box } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { HeroList } from "../components/HeroList";

export const HeroesByPublisherPage = () => {
	const { publisher } = useParams();

	return (
		<Box display={"flex"} justifyContent={"center"}>
			<HeroList publisher={publisher} />
		</Box>
	);
};
