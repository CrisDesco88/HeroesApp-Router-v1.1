import { Box, Container, Grid, Link } from "@mui/material";

export const Footer = () => {
	return (
		<footer>
			<Box sx={{ backgroundColor: "primary.dark", mt: 3 }} color="white">
				<Box textAlign="center"  py={3}>
					Heroes Page &reg; {new Date().getFullYear()}
				</Box>
			</Box>
		</footer>
	);
};
