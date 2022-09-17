import { Box, Grid } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { HeroPagination } from "../../ui/components/HeroPagination";
import { HeroesContext } from "../context/HeroesContext";
import { HeroCard } from "./HeroCard";

const pageSize = 9;

export const HeroList = ({ publisher }) => {
	const { getHeroesByPublisher } = useContext(HeroesContext);
	const heroes = getHeroesByPublisher(publisher);
	const [currentPage, setCurrentPage] = useState(1)
	
	
	const [pagination, setPagination] = useState({
		from: 0,
		to: pageSize,
	});
	
	const handlePageChange = (_event, page) => {
		const from = (page - 1) * pageSize;
		const to = (page - 1) * pageSize + pageSize;
		setPagination({ from: from, to: to });
		setCurrentPage(page)	
	};

	return (
		<Box
			display={"flex"}
			alignItems={"center"}
			
			flexDirection={"column"}
			sx={{maxWidth: "1020px"}}
		>
			<HeroPagination
				count={Math.ceil(heroes.length / pageSize)}
				onChange={handlePageChange}
				page={currentPage}
			/>
			<Grid
				container
				spacing={2}
				sx={{ display: "flex", justifyContent: "center", ml: 0, mt: 5 }}
			>
				{heroes.slice(pagination.from, pagination.to).map((hero) => (
					<HeroCard key={hero.id} {...hero} />
				))}
			</Grid>
			<HeroPagination
				count={Math.ceil(heroes.length / pageSize)}
				onChange={handlePageChange}
				page={currentPage}
			/>
		</Box>
	);
};
