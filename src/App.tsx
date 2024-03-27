import Hero from "./components/Hero/Hero";
import Hero1 from "./components/Hero/Hero1";
import Header1 from "./components/header/Header1";
import Header2 from "./components/header/Header2";
import Header3 from "./components/header/Header3";

import { Box, CssBaseline } from "@mui/material";
import FloatingActionButtonZoom from "./components/main/Main1";
import TypeProducts from "./components/TypeProducts/TypeProducts";


function App(): JSX.Element {
  return (
    <>
      <CssBaseline />
      <Header1 />
      <Header2 />
      <Header3 />
      <Box bgcolor={"#F6F6F6"}>
        <Hero />
        <Hero1/>
        <TypeProducts/>
        <FloatingActionButtonZoom/>
      </Box>
    </>
  );
}

export default App;
