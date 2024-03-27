import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { Container, Stack } from "@mui/material";
import Slider from "./Slider";
import Slider1 from "./Slider1";
interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index: any) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`,
  };
}

export default function FloatingActionButtonZoom() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: unknown, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Container
    maxWidth="xl"
      sx={{
        bgcolor: "#F6F6F6",
        position: "relative",
      }}
    >
      <Stack
        direction={"row"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
        position="static"
        color="default"
      >
        <Box>
          <Typography
            sx={{
              fontSize: "30px",
              fontFamily: "bold",
            }}
          >
            Selected Products
          </Typography>
          <Typography
            sx={{
              fontSize: "15px",
            }}
          >
            All our new arrivals in a exclusive brand selection
          </Typography>
        </Box>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            aria-label="action tabs example"
          >
            <Tab label="New Arrivals" {...a11yProps(0)} />
            <Tab label="Best Seller" {...a11yProps(1)} />
            <Tab label="Most Popular" {...a11yProps(2)} />
            <Tab label="View All" {...a11yProps(3)} />
          </Tabs>
        </Box>
      </Stack>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0}>
          <Slider />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Slider1/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          View All
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          View All
        </TabPanel>
      </SwipeableViews>
    </Container>
  );
}
