import Stack from "@mui/material/Stack";
import { Box, Pagination } from "@mui/material";

export const HeroPagination = ({ count, onChange, page }) => {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				mt: "2rem",
				backgroundColor: "rgba(241, 241, 241, 0.8)",
				padding: "8px",
				borderRadius: "50px",
			}}
		>
			<Stack spacing={2}>
				<Pagination
					count={count}
					color="primary"
					onChange={onChange}
					page={page}
				/>
			</Stack>
		</Box>
	);
};
