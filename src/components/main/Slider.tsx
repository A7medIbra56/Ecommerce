import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Pagination, Navigation } from "swiper/modules";
import { Box, Button, Rating, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
export default function App() {
  const [value, setValue] = React.useState<number | null>(2);
  return (
    <Swiper
      slidesPerView={5}
      centeredSlides={true}
      loop={true}
      spaceBetween={10}
      navigation={true}
      modules={[Pagination, Navigation]}
    >
      <SwiperSlide className="SwiperSlide">
        <Box
          sx={{
            position: "relative",
            display: "flex",
            paddingY: "20px",
            borderRadius: "5px",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "#fff",
            transition: "border-color 0.3s",
            border: "1px solid transparent",
            "&:hover": {
              border: "1px solid",
            },
          }}
        >
          <AddShoppingCartOutlinedIcon
            className="icon"
            sx={{
              position: "absolute",
              top: 10,
              right: 3,
              opacity: 0,
              transition: "opacity 0.3s",
            }}
          />
          <FavoriteBorderIcon
            className="icon"
            sx={{
              position: "absolute",
              top: 40,
              right: 3,
              opacity: 0,
              transition: "opacity 0.3s",
            }}
          />
          <img src="public\all products\bag\1.webp" className="imgSlider" />
          <Typography variant="body1">Selver ahmed</Typography>
          <Typography variant="body1">Selver ahmed</Typography>
          <Rating
            name="simple-controlled"
            value={value}
            sx={{
              fontSize: "20px",
            }}
            onChange={(newValue: any) => {
              setValue(newValue);
            }}
          />
          <Button
            sx={{
              border: "1px solid #000",
              mb: "8px",
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                color: "black",
                px: "15px",
              }}
            >
              Add To Cart
            </Typography>
          </Button>
        </Box>
      </SwiperSlide>
      <SwiperSlide className="SwiperSlide">
        <Box
          sx={{
            position: "relative",
            display: "flex",
            paddingY: "20px",
            borderRadius: "5px",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "#fff",
            transition: "border-color 0.3s",
            border: "1px solid transparent",
            "&:hover": {
              border: "1px solid",
            },
          }}
        >
          <AddShoppingCartOutlinedIcon
            className="icon"
            sx={{
              position: "absolute",
              top: 10,
              right: 3,
              opacity: 0,
              transition: "opacity 0.3s",
            }}
          />
          <FavoriteBorderIcon
            className="icon"
            sx={{
              position: "absolute",
              top: 40,
              right: 3,
              opacity: 0,
              transition: "opacity 0.3s",
            }}
          />
          <img src="public\all products\bag\1.webp" className="imgSlider" />
          <Typography variant="body1">Selver ahmed</Typography>
          <Typography variant="body1">Selver ahmed</Typography>
          <Rating
            name="simple-controlled"
            value={value}
            sx={{
              fontSize: "20px",
            }}
            onChange={(newValue: any) => {
              setValue(newValue);
            }}
          />
          <Button
            sx={{
              border: "1px solid #000",
              mb: "8px",
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                color: "black",
                px: "15px",
              }}
            >
              Add To Cart
            </Typography>
          </Button>
        </Box>
      </SwiperSlide>
      <SwiperSlide className="SwiperSlide">
        <Box
          sx={{
            position: "relative",
            display: "flex",
            paddingY: "20px",
            borderRadius: "5px",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "#fff",
            transition: "border-color 0.3s",
            border: "1px solid transparent",
            "&:hover": {
              border: "1px solid",
            },
          }}
        >
          <AddShoppingCartOutlinedIcon
            className="icon"
            sx={{
              position: "absolute",
              top: 10,
              right: 3,
              opacity: 0,
              transition: "opacity 0.3s",
            }}
          />
          <FavoriteBorderIcon
            className="icon"
            sx={{
              position: "absolute",
              top: 40,
              right: 3,
              opacity: 0,
              transition: "opacity 0.3s",
            }}
          />
          <img src="public\all products\bag\1.webp" className="imgSlider" />
          <Typography variant="body1">Selver ahmed</Typography>
          <Typography variant="body1">Selver ahmed</Typography>
          <Rating
            name="simple-controlled"
            value={value}
            sx={{
              fontSize: "20px",
            }}
            onChange={(newValue: any) => {
              setValue(newValue);
            }}
          />
          <Button
            sx={{
              border: "1px solid #000",
              mb: "8px",
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                color: "black",
                px: "15px",
              }}
            >
              Add To Cart
            </Typography>
          </Button>
        </Box>
      </SwiperSlide>
      <SwiperSlide className="SwiperSlide">
        <Box
          sx={{
            position: "relative",
            display: "flex",
            paddingY: "20px",
            borderRadius: "5px",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "#fff",
            transition: "border-color 0.3s",
            border: "1px solid transparent",
            "&:hover": {
              border: "1px solid",
            },
          }}
        >
          <AddShoppingCartOutlinedIcon
            className="icon"
            sx={{
              position: "absolute",
              top: 10,
              right: 3,
              opacity: 0,
              transition: "opacity 0.3s",
            }}
          />
          <FavoriteBorderIcon
            className="icon"
            sx={{
              position: "absolute",
              top: 40,
              right: 3,
              opacity: 0,
              transition: "opacity 0.3s",
            }}
          />
          <img src="public\all products\bag\1.webp" className="imgSlider" />
          <Typography variant="body1">Selver ahmed</Typography>
          <Typography variant="body1">Selver ahmed</Typography>
          <Rating
            name="simple-controlled"
            value={value}
            sx={{
              fontSize: "20px",
            }}
            onChange={(newValue: any) => {
              setValue(newValue);
            }}
          />
          <Button
            sx={{
              border: "1px solid #000",
              mb: "8px",
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                color: "black",
                px: "15px",
              }}
            >
              Add To Cart
            </Typography>
          </Button>
        </Box>
      </SwiperSlide>
      <SwiperSlide className="SwiperSlide">
        <Box
          sx={{
            position: "relative",
            display: "flex",
            paddingY: "20px",
            borderRadius: "5px",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "#fff",
            transition: "border-color 0.3s",
            border: "1px solid transparent",
            "&:hover": {
              border: "1px solid",
            },
          }}
        >
          <AddShoppingCartOutlinedIcon
            className="icon"
            sx={{
              position: "absolute",
              top: 10,
              right: 3,
              opacity: 0,
              transition: "opacity 0.3s",
            }}
          />
          <FavoriteBorderIcon
            className="icon"
            sx={{
              position: "absolute",
              top: 40,
              right: 3,
              opacity: 0,
              transition: "opacity 0.3s",
            }}
          />
          <img src="public\all products\bag\1.webp" className="imgSlider" />
          <Typography variant="body1">Selver ahmed</Typography>
          <Typography variant="body1">Selver ahmed</Typography>
          <Rating
            name="simple-controlled"
            value={value}
            sx={{
              fontSize: "20px",
            }}
            onChange={(newValue: any) => {
              setValue(newValue);
            }}
          />
          <Button
            sx={{
              border: "1px solid #000",
              mb: "8px",
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                color: "black",
                px: "15px",
              }}
            >
              Add To Cart
            </Typography>
          </Button>
        </Box>
      </SwiperSlide>
      <SwiperSlide className="SwiperSlide">
        <Box
          sx={{
            position: "relative",
            display: "flex",
            paddingY: "20px",
            borderRadius: "5px",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "#fff",
            transition: "border-color 0.3s",
            border: "1px solid transparent",
            "&:hover": {
              border: "1px solid",
            },
          }}
        >
          <AddShoppingCartOutlinedIcon
            className="icon"
            sx={{
              position: "absolute",
              top: 10,
              right: 3,
              opacity: 0,
              transition: "opacity 0.3s",
            }}
          />
          <FavoriteBorderIcon
            className="icon"
            sx={{
              position: "absolute",
              top: 40,
              right: 3,
              opacity: 0,
              transition: "opacity 0.3s",
            }}
          />
          <img src="public\all products\bag\1.webp" className="imgSlider" />
          <Typography variant="body1">Selver ahmed</Typography>
          <Typography variant="body1">Selver ahmed</Typography>
          <Rating
            name="simple-controlled"
            value={value}
            sx={{
              fontSize: "20px",
            }}
            onChange={(newValue: any) => {
              setValue(newValue);
            }}
          />
          <Button
            sx={{
              border: "1px solid #000",
              mb: "8px",
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                color: "black",
                px: "15px",
              }}
            >
              Add To Cart
            </Typography>
          </Button>
        </Box>
      </SwiperSlide>
    </Swiper>
  );
}
