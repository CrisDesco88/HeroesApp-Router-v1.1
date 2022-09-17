import { createTheme } from "@mui/material/styles";

const colorTheme = createTheme({
	palette: {
		primary: {
			light: "#b085f5",
			main: "#7e57c2",
			dark: "#4d2c91",
			contrastText: "#fff",
		},
		secondary: {
			light: "#c7a4ff",
			main: "#9575cd",
			dark: "#65499c",
			contrastText: "#000",
		},
	},
});

export default colorTheme;