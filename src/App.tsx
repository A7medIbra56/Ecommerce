
import Header1 from "./components/header/Header1";
import Header2 from "./components/header/Header2";
import Header3 from "./components/header/Header3";

import { CssBaseline, ThemeProvider } from "@mui/material";
// Assuming the correct casing for 'Theme'
import { ColorModeContext, useMode } from "./theme"; 

function App(): JSX.Element {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header1 />
        <Header2 />
        <Header3 />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
