import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let responsiveFontTheme = createTheme();
responsiveFontTheme = responsiveFontSizes(responsiveFontTheme);


export default responsiveFontTheme;