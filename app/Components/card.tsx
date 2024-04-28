"use client";
import React from "react";
import styles from "./Card.module.css";
import CardMedia from "@mui/material/CardMedia";
import { Card, CardActionArea } from "@mui/material";

export default function ActionAreaCard() {
  const handleCardButtonClick = () => {
    const formSection = document.getElementById("form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.card}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="100%"
            image="/motor_hijau.jpg"
            alt="motor"
          />
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="100%"
            image="/motor_merah.jpg"
            alt="motor"
          />
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="80%"
            image="/motor_putih.jpg"
            alt="motor"
          />
        </CardActionArea>
      </Card>
    </div>
  );
}
