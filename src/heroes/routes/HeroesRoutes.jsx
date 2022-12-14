import { Box, Grid } from "@mui/material";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Footer } from "../../ui/components/Footer";
import { Navbar } from "../../ui/components/NavBar";
import { HeroesProvider } from "../context/HeroesProvider";
import { HeroesByPublisherPage } from "../pages/HeroesByPublisherPage";
import { HeroPage } from "../pages/HeroPage";
import { SearchPage } from "../pages/SearchPage";

export const HeroesRoutes = () => {
	return (
		<>
			<HeroesProvider>
				<Navbar />

				<Box>
					<Routes>
						<Route path="search" element={<SearchPage />} />
						<Route path="/:publisher" element={<HeroesByPublisherPage />} />
						<Route path="hero/:heroId" element={<HeroPage />} />

						<Route path="/*" element={<Navigate to="/marvel" />} />
					</Routes>
				</Box>
				<Footer />
			</HeroesProvider>
		</>
	);
};
