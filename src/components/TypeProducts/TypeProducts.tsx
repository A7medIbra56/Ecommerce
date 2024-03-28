import "./imgProduct.css";
import { Box, Button, Stack } from "@mui/material";
export default function TypeProducts() {
  return (
    <Stack sx={{ flexGrow: 1, flexDirection: "row", gap: "10px" }}>
      <Box
        sx={{
          display: "flex",
          py: "30px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#fff",
        }}
      >
        <img className="imgProduct" src="public\images\6.webp" />
        <Button variant="contained" disableElevation>
          Disable elevation
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          py: "30px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#fff",
        }}
      >
        <img className="imgProduct" src="public\images\6.webp" />
        <Button variant="contained" disableElevation>
          Disable elevation
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          py: "30px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#fff",
        }}
      >
        <img className="imgProduct" src="public\images\6.webp" />
        <Button variant="contained" disableElevation>
          Disable elevation
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          py: "30px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#fff",
        }}
      >
        <img className="imgProduct" src="public\images\6.webp" />
        <Button variant="contained" disableElevation>
          Disable elevation
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          py: "30px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#fff",
        }}
      >
        <img className="imgProduct" src="public\images\5.webp" />
        <Button variant="contained" disableElevation>
          Disable elevation
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          py: "30px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#fff",
        }}
      >
        <img className="imgProduct" src="public\images\4.webp" />
        <Button variant="contained" disableElevation>
          Disable elevation
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          py: "30px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#fff",
        }}
      >
        <img className="imgProduct" src="public\images\3.webp" />
        <Button variant="contained" disableElevation>
          Disable elevation
        </Button>
      </Box>
    </Stack>
  );
}
