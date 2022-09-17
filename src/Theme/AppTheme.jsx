import { CssBaseline, ThemeProvider } from "@mui/material";
import colorTheme from "./colorTheme";
import responsiveFontTheme from "./responsiveFontTheme";

export const AppTheme = ({ children }) => {
	return (
		<ThemeProvider theme={responsiveFontTheme}>
		<ThemeProvider theme={colorTheme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
		</ThemeProvider>
	);
};
