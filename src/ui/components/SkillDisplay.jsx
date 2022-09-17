import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const SkillDisplay = ({ skillValue }) => {
    const [progress, setProgress] = React.useState(0);

		React.useEffect(() => {
			const totalProgress = skillValue;
			setInterval(() => {
				setProgress((prevProgress) =>
					prevProgress >= totalProgress ? totalProgress : prevProgress + 5
				);
			}, 100);
		}, []);
	return (
		<Box sx={{ position: "relative", display: "inline-flex" }}>
			<CircularProgress variant="determinate" value={progress} />
			<Box
				sx={{
					top: 0,
					left: 0,
					bottom: 0,
					right: 0,
					position: "absolute",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Typography variant="caption" component="div" color="text.secondary">
					{`${Math.round(progress)}%`}
				</Typography>
			</Box>
		</Box>
	);
};
