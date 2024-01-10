import  { createContext, useState, useMemo } from "react";
import { createTheme, Theme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

interface DesignTokens {
  palette: {
    mode: any;
    text: {
      primary: string;
    };
    neutral: {
      main: string;
    };
    favColor: {
      main: string;
    };
  };
}

export const getDesignTokens = (mode: any): DesignTokens => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          text: {
            primary: "#2B3445",
          },
          neutral: {
            main: "#64748B",
          },
          favColor: {
            main: grey[300],
          },
        }
      : {
          neutral: {
            main: "#64748B",
          },
          favColor: {
            main: grey[800],
          },
          text: {
            primary: "#fff",
          },
        }),
  },
});

// Context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = (): [Theme, { toggleColorMode: () => void }] => {
  const [mode, setMode] = useState<string>(
    localStorage.getItem("mode") ? localStorage.getItem("mode")! : "light"
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return [theme, colorMode];
};

// You may want to remove or replace this export based on your application structure
export default function App() {
  // Your component logic goes here
  return <div>Your App component content goes here</div>;
}
