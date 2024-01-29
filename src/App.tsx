
import Header1 from "./components/header/Header1";
import Header2 from "./components/header/Header2";
import Header3 from "./components/header/Header3";

import { CssBaseline } from "@mui/material";


function App(): JSX.Element {
  return (
     <>
     <CssBaseline />
        <Header1 />
        <Header2 />
        <Header3 />
     </>
  );
}

export default App;
