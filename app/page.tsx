"use client";
import Image from "next/image";
import styles from "./Page.module.css";
import logo from "../public/LOGO_XTM.png";
import Carousel from "./Components/carouselImage";
import Card from "./Components/card";
import Admin from "@mui/icons-material/Person";
import Kuis from "@mui/icons-material/ContentPaste";
import Divider from "@mui/material/Divider";
import {
  WhatsApp,
  Instagram,
  Facebook,
  Twitter,
  LinkedIn,
  Email,
} from "@mui/icons-material";

export default function Home() {
  return (
    <main style={{ maxWidth: "100vw" }}>
      <nav>
        <div className={styles.logo}>
          <Image
            src={logo}
            alt="Xtreme Motorsport Logo"
            style={{
              width: 120,
              height: 50,
              borderRadius: "10px",
              paddingTop: "4px",
            }}
          />
        </div>
        <div style={{ display: "flex", gap: 5 }}>
          <div>
            <button
              onClick={() => {}}
              style={{
                background: "rgb(0, 0, 0)",
                color: "white",
                border: "none",
                borderRadius: "1rem",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 3,
              }}
            >
              <Admin />
              LOGIN
            </button>
          </div>
          <div>
            <button
              onClick={() => {}}
              style={{
                background: "rgb(0, 0, 0)",
                color: "white",
                border: "none",
                borderRadius: "1rem",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 3,
              }}
            >
              <Kuis />
              ISI KUISIONER
            </button>
          </div>
        </div>
      </nav>

      <Carousel />

      <div className={styles.greeting}>
        <h3>Selamat Datang</h3>
        <p>
          Selamat datang di Xtreme Motorsport! Kami sangat senang Anda
          berkunjung ke halaman kami yang penuh dengan dedikasi pada dunia
          otomotif motor sport. Temukan kegembiraan dan inovasi dalam setiap
          detiknya di sini.
        </p>
      </div>
      <div className={styles.layanan}>
        <Card />
      </div>
      <br />

      <footer
        style={{
          background: "rgb(0, 0, 0)",
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <Image
            src={logo}
            alt="Xtreme Motorsport Logo"
            style={{
              width: 300,
              height: 100,
              padding: 10,
            }}
          />
        </div>
        <div
          style={{
            width: "100%",
            color: "white",
            fontSize: 10,
            justifyContent: "center",
            alignItems: "center",
            gap: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 30,
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
              fontSize: 12,
            }}
          >
            <p style={{ cursor: "pointer" }}>ABOUT US</p>
            <p style={{ cursor: "pointer" }}>CONTACT US</p>
            <p style={{ cursor: "pointer" }}>SERVICES</p>
          </div>
          <Divider
            orientation="horizontal"
            variant="middle"
            sx={{ borderColor: "white" }}
          />
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 30,
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
            }}
          >
            <WhatsApp style={{ cursor: "pointer" }} />
            <Instagram style={{ cursor: "pointer" }} />
            <Facebook style={{ cursor: "pointer" }} />
            <Twitter style={{ cursor: "pointer" }} />
            <LinkedIn style={{ cursor: "pointer" }} />
            <Email style={{ cursor: "pointer" }} />
          </div>
        </div>
      </footer>
    </main>
  );
}
