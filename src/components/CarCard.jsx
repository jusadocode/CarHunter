import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import sportsCar from "/sports-car.png";

const CarCard = ({ car }) => (
  <Card className="card">
    <CardActionArea href={car.url} target="_blank">
      <CardContent>
        <CardMedia
          sx={{
            maxHeight: 300,
            maxWidth: 255,
            border: car.stars >= 10 ? "3px solid yellow" : "3px solid grey",
            borderRadius: "2%",
          }}
          component="img"
          src={car.image}
          alt={car.name}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = sportsCar;
          }}
        />
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {car.title}
        </Typography>
        <Typography variant="h5" component="div">
          {car.price}
        </Typography>
        <Typography variant="body2" gutterBottom>
          ⭐{car.stars}
          <br />
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          {car.date}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {car.fuelType}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {car.bodyType}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {car.gearBox}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {car.power_Info}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {car.mileage}
        </Typography>
      </CardContent>
    </CardActionArea>
    <Button
      size="small"
      href={`https://www.google.com/maps/search/?api=1&query=${car.city}`}
      target="_blank"
    >
      {car.city}
    </Button>
  </Card>
);

export default CarCard;
