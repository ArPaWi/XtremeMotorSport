"use client";
import React, { useState } from "react";
import styles from "./Kuisioner.module.css";
import axios from 'axios';
import {
  RadioGroup,
  Radio,
  FormControl,
  FormLabel,
  FormControlLabel,
} from "@mui/material";

const Kuisioner = () => {
  // State untuk menyimpan pilihan mekanik yang dipilih oleh customer
  const [selectedMechanic, setSelectedMechanic] = useState<number | null>(null);

  // Array data mekanik beserta gambarnya
  const mechanics = [
    { id: 1, name: "Anis", image: "anis.jpeg" },
    { id: 2, name: "Jazi", image: "jazi.jpeg" },
    { id: 3, name: "Misbah", image: "misbah.jpeg" },
    { id: 4, name: "Erick", image: "erick.jpeg" },
    { id: 5, name: "Doni", image: "doni.jpeg" },
    { id: 6, name: "Meri", image: "meri.jpeg" },
    { id: 7, name: "Yudis", image: "yudis.jpeg" },
    { id: 8, name: "Erna", image: "erna.jpeg" },
    { id: 9, name: "Tika", image: "tika.jpeg" },
    // Tambahkan mekanik lainnya sesuai kebutuhan
  ];

  // Fungsi untuk memilih mekanik
  const selectMechanic = (mechanicId: number) => {
    setSelectedMechanic(mechanicId);
  };

  const handleSubmit = async () => {
    try {
      const nama = (document.getElementById('nama') as HTMLInputElement)?.value.toString();
      const motor = (document.getElementById('motor') as HTMLInputElement)?.value.toString();
      const nomor = (document.getElementById('nomor') as HTMLInputElement)?.value.toString();
      
      const data = {
        nama,
        motor,
        nomor,
        mekanik: selectedMechanic,
        sk1: (document.querySelector('input[name="sk1-group"]:checked') as HTMLInputElement)?.value,
        sk2: (document.querySelector('input[name="sk2-group"]:checked') as HTMLInputElement)?.value,
        sk3: (document.querySelector('input[name="sk3-group"]:checked') as HTMLInputElement)?.value,
        sk4: (document.querySelector('input[name="sk4-group"]:checked') as HTMLInputElement)?.value,
        sk5: (document.querySelector('input[name="sk5-group"]:checked') as HTMLInputElement)?.value,
        sk6: (document.querySelector('input[name="sk6-group"]:checked') as HTMLInputElement)?.value,
        saran: (document.getElementById('saran') as HTMLInputElement)?.value.toString()
      };

      console.log("Data yang dikirim:", data);
  
      const response = await axios.post('http://localhost:3308/api/responses', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      console.log(response.data);
      // Tambahkan logika sesuai respons dari server (misalnya, notifikasi bahwa data berhasil disimpan)
    } catch (error) {
      console.error('Error saat mengirim data:', error);
      // Tambahkan logika sesuai kebutuhan, seperti menampilkan pesan kesalahan kepada pengguna
    }
  };

  return (
    <div
      style={{
        width: "100%",
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className={styles.form}>
        <h2 style={{ textAlign: "center" }}>FORM KUISIONER</h2>
        <div className={styles.isi}>
          {/* Identitas Diri */}
          <div className={styles.identity}>
            {/* Form identitas diri */}
            {/* Nama */}
            <input id="nama" type="text" placeholder="Nama" />
            {/* Motor */}
            <input id="motor" type="text" placeholder="Motor" />
            {/* Nomor WhatsApp */}
            <input id="nomor" type="text" placeholder="Nomor WhatsApp" />
          </div>

          {/* Siapa Karyawan Modif */}
          <div className={styles.karyawan}>
            <h3>Siapa Karyawan Modif/Memberi Layanan Motor Anda?</h3>
            {/* Opsi mekanik */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              {mechanics.map((mechanic) => (
                <div
                  key={mechanic.id}
                  onClick={() => selectMechanic(mechanic.id)}
                  style={{
                    border:
                      selectedMechanic === mechanic.id
                        ? "2px solid white"
                        : "none",
                    padding: "10px",
                    borderRadius: "1rem",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={mechanic.image}
                    alt={mechanic.name}
                    style={{ width: "250px", borderRadius: "0.5rem" }}
                  />
                  <p>{mechanic.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Survei Kepuasan */}
          <div className={styles.kepuasan}>
            <h3>Survei Kepuasan</h3>
            {/* Pertanyaan survei */}
            <p>1) Apakah anda senang dengan Xtreme Motor Sport?</p>
            <div style={{ display: "flex", alignItems: "center" }}>
              {/* <p>Kurang</p> */}
              <FormControl>
                <FormLabel id="sk1" />
                <RadioGroup
                  style={{
                    display: "flex",
                    paddingLeft: "1rem",
                  }}
                  aria-labelledby="sk1"
                  defaultValue={"1"}
                  name="sk1-group"
                >
                  <div>
                    <FormControlLabel
                      value="1"
                      control={
                        <Radio
                          sx={{
                            color: "white",
                            "&.Mui-checked": { color: "white" },
                          }}
                          size="small"
                        />
                      }
                      label=""
                    />
                    <FormControlLabel
                      value="2"
                      control={
                        <Radio
                          sx={{
                            color: "white",
                            "&.Mui-checked": { color: "white" },
                          }}
                        />
                      }
                      label=""
                    />
                    <FormControlLabel
                      value="3"
                      control={
                        <Radio
                          sx={{
                            "& .MuiSvgIcon-root": { fontSize: 28 },
                            color: "white",
                            "&.Mui-checked": { color: "white" },
                          }}
                        />
                      }
                      label=""
                    />
                    <FormControlLabel
                      value="4"
                      control={
                        <Radio
                          sx={{
                            "& .MuiSvgIcon-root": { fontSize: 33 },
                            color: "white",
                            "&.Mui-checked": { color: "white" },
                          }}
                        />
                      }
                      label=""
                    />
                    <FormControlLabel
                      value="5"
                      control={
                        <Radio
                          sx={{
                            "& .MuiSvgIcon-root": { fontSize: 38 },
                            color: "white",
                            "&.Mui-checked": { color: "white" },
                          }}
                        />
                      }
                      label=""
                    />
                  </div>
                </RadioGroup>
              </FormControl>
              {/* <p>Sangat</p> */}
            </div>
            <p>
              2) Apakah tim kami cukup ramah, sopan dan sigap dalam melayani
              anda?
            </p>
            <div style={{ display: "flex", alignItems: "center" }}>
              {/* <p>Kurang</p> */}
              <FormControl>
                <FormLabel id="sk2" />
                <RadioGroup
                  style={{
                    display: "flex",
                    paddingLeft: "1rem",
                  }}
                  aria-labelledby="sk2"
                  defaultValue={"1"}
                  name="sk2-group"
                >
                  <div>
                    <FormControlLabel
                      value="1"
                      control={
                        <Radio
                          sx={{
                            color: "white",
                            "&.Mui-checked": { color: "white" },
                          }}
                          size="small"
                        />
                      }
                      label=""
                    />
                    <FormControlLabel
                      value="2"
                      control={
                        <Radio
                          sx={{
                            color: "white",
                            "&.Mui-checked": { color: "white" },
                          }}
                        />
                      }
                      label=""
                    />
                    <FormControlLabel
                      value="3"
                      control={
                        <Radio
                          sx={{
                            "& .MuiSvgIcon-root": { fontSize: 28 },
                            color: "white",
                            "&.Mui-checked": { color: "white" },
                          }}
                        />
                      }
                      label=""
                    />
                    <FormControlLabel
                      value="4"
                      control={
                        <Radio
                          sx={{
                            "& .MuiSvgIcon-root": { fontSize: 33 },
                            color: "white",
                            "&.Mui-checked": { color: "white" },
                          }}
                        />
                      }
                      label=""
                    />
                    <FormControlLabel
                      value="5"
                      control={
                        <Radio
                          sx={{
                            "& .MuiSvgIcon-root": { fontSize: 38 },
                            color: "white",
                            "&.Mui-checked": { color: "white" },
                          }}
                        />
                      }
                      label=""
                    />
                  </div>
                </RadioGroup>
              </FormControl>
              {/* <p>Sangat</p> */}
            </div>
            <p>3) Apakah hasil modif memuaskan?</p>
            <div style={{ display: "flex", alignItems: "center" }}>
              {/* <p>Kurang</p> */}
              <FormControl>
                <FormLabel id="sk3" />
                <RadioGroup
                  style={{
                    display: "flex",
                    paddingLeft: "1rem",
                  }}
                  aria-labelledby="sk3"
                  defaultValue={"1"}
                  name="sk3-group"
                >
                  <div>
                    <FormControlLabel
                      value="1"
                      control={
                        <Radio
                          sx={{
                            color: "white",
                            "&.Mui-checked": { color: "white" },
                          }}
                          size="small"
                        />
                      }
                      label=""
                    />
                    <FormControlLabel
                      value="2"
                      control={
                        <Radio
                          sx={{
                            color: "white",
                            "&.Mui-checked": { color: "white" },
                          }}
                        />
                      }
                      label=""
                    />
                    <FormControlLabel
                      value="3"
                      control={
                        <Radio
                          sx={{
                            "& .MuiSvgIcon-root": { fontSize: 28 },
                            color: "white",
                            "&.Mui-checked": { color: "white" },
                          }}
                        />
                      }
                      label=""
                    />
                    <FormControlLabel
                      value="4"
                      control={
                        <Radio
                          sx={{
                            "& .MuiSvgIcon-root": { fontSize: 33 },
                            color: "white",
                            "&.Mui-checked": { color: "white" },
                          }}
                        />
                      }
                      label=""
                    />
                    <FormControlLabel
                      value="5"
                      control={
                        <Radio
                          sx={{
                            "& .MuiSvgIcon-root": { fontSize: 38 },
                            color: "white",
                            "&.Mui-checked": { color: "white" },
                          }}
                        />
                      }
                      label=""
                    />
                  </div>
                </RadioGroup>
              </FormControl>
              {/* <p>Sangat</p> */}
            </div>
            <p>4) Apakah anda puas dengan pelayanan yang diberikan?</p>
            <div style={{ display: "flex", alignItems: "center" }}>
              {/* <p>Kurang</p> */}
              <FormControl>
                <FormLabel id="sk4" />
                <RadioGroup
                  style={{
                    display: "flex",
                    paddingLeft: "1rem",
                  }}
                  aria-labelledby="sk4"
                  defaultValue={"1"}
                  name="sk4-group"
                >
                  <div>
                    <FormControlLabel
                      value="1"
                      control={
                        <Radio
                          sx={{
                            color: "white",
                            "&.Mui-checked": { color: "white" },
                          }}
                          size="small"
                        />
                      }
                      label=""
                    />
                    <FormControlLabel
                      value="2"
                      control={
                        <Radio
                          sx={{
                            color: "white",
                            "&.Mui-checked": { color: "white" },
                          }}
                        />
                      }
                      label=""
                    />
                    <FormControlLabel
                      value="3"
                      control={
                        <Radio
                          sx={{
                            "& .MuiSvgIcon-root": { fontSize: 28 },
                            color: "white",
                            "&.Mui-checked": { color: "white" },
                          }}
                        />
                      }
                      label=""
                    />
                    <FormControlLabel
                      value="4"
                      control={
                        <Radio
                          sx={{
                            "& .MuiSvgIcon-root": { fontSize: 33 },
                            color: "white",
                            "&.Mui-checked": { color: "white" },
                          }}
                        />
                      }
                      label=""
                    />
                    <FormControlLabel
                      value="5"
                      control={
                        <Radio
                          sx={{
                            "& .MuiSvgIcon-root": { fontSize: 38 },
                            color: "white",
                            "&.Mui-checked": { color: "white" },
                          }}
                        />
                      }
                      label=""
                    />
                  </div>
                </RadioGroup>
              </FormControl>
              {/* <p>Sangat</p> */}
            </div>
            <p>5) Seberapa cepat kami membantu modif motor anda?</p>
            <div style={{ display: "flex", alignItems: "center" }}>
              {/* <p>Kurang</p> */}
              <FormControl>
                <FormLabel id="sk5" />
                <RadioGroup
                  style={{
                    display: "flex",
                    paddingLeft: "1rem",
                  }}
                  aria-labelledby="sk5"
                  defaultValue={"1"}
                  name="sk5-group"
                >
                  <div>
                    <FormControlLabel
                      value="1"
                      control={
                        <Radio
                          sx={{
                            color: "white",
                            "&.Mui-checked": { color: "white" },
                          }}
                          size="small"
                        />
                      }
                      label=""
                    />
                    <FormControlLabel
                      value="2"
                      control={
                        <Radio
                          sx={{
                            color: "white",
                            "&.Mui-checked": { color: "white" },
                          }}
                        />
                      }
                      label=""
                    />
                    <FormControlLabel
                      value="3"
                      control={
                        <Radio
                          sx={{
                            "& .MuiSvgIcon-root": { fontSize: 28 },
                            color: "white",
                            "&.Mui-checked": { color: "white" },
                          }}
                        />
                      }
                      label=""
                    />
                    <FormControlLabel
                      value="4"
                      control={
                        <Radio
                          sx={{
                            "& .MuiSvgIcon-root": { fontSize: 33 },
                            color: "white",
                            "&.Mui-checked": { color: "white" },
                          }}
                        />
                      }
                      label=""
                    />
                    <FormControlLabel
                      value="5"
                      control={
                        <Radio
                          sx={{
                            "& .MuiSvgIcon-root": { fontSize: 38 },
                            color: "white",
                            "&.Mui-checked": { color: "white" },
                          }}
                        />
                      }
                      label=""
                    />
                  </div>
                </RadioGroup>
              </FormControl>
              {/* <p>Sangat</p> */}
            </div>
            <p>
              6) Berdasarkan pengalaman anda, seberapa besar anda untuk
              merekomendasikan tempat ini kepada rekan/kerabat/keluarga anda?
            </p>
            <div style={{ display: "flex", alignItems: "center" }}>
              {/* <p>Kurang</p> */}
              <FormControl>
                <FormLabel id="sk6" />
                <RadioGroup
                  style={{
                    display: "flex",
                    paddingLeft: "1rem",
                  }}
                  aria-labelledby="sk6"
                  defaultValue={"1"}
                  name="sk6-group"
                >
                  <div>
                    <FormControlLabel
                      value="1"
                      control={
                        <Radio
                          sx={{
                            color: "white",
                            "&.Mui-checked": { color: "white" },
                          }}
                          size="small"
                        />
                      }
                      label=""
                    />
                    <FormControlLabel
                      value="2"
                      control={
                        <Radio
                          sx={{
                            color: "white",
                            "&.Mui-checked": { color: "white" },
                          }}
                        />
                      }
                      label=""
                    />
                    <FormControlLabel
                      value="3"
                      control={
                        <Radio
                          sx={{
                            "& .MuiSvgIcon-root": { fontSize: 28 },
                            color: "white",
                            "&.Mui-checked": { color: "white" },
                          }}
                        />
                      }
                      label=""
                    />
                    <FormControlLabel
                      value="4"
                      control={
                        <Radio
                          sx={{
                            "& .MuiSvgIcon-root": { fontSize: 33 },
                            color: "white",
                            "&.Mui-checked": { color: "white" },
                          }}
                        />
                      }
                      label=""
                    />
                    <FormControlLabel
                      value="5"
                      control={
                        <Radio
                          sx={{
                            "& .MuiSvgIcon-root": { fontSize: 38 },
                            color: "white",
                            "&.Mui-checked": { color: "white" },
                          }}
                        />
                      }
                      label=""
                    />
                  </div>
                </RadioGroup>
              </FormControl>
              {/* <p>Sangat</p> */}
            </div>
          </div>

          {/* Saran dan Komentar */}
          <div className={styles.saran}>
            <h3>Saran dan Komentar Customer</h3>
            {/* Input untuk saran dan komentar */}
            <textarea
              id="saran" // Tambahkan id
              rows={4}
              // cols={50}
              style={{
                width: "100%",
                border: "solid",
                borderRadius: "1rem",
                borderColor: "white",
                background: "none",
                color: "white",
                textAlign: "justify",
                fontWeight: "bold",
              }}
              placeholder="Masukkan saran dan komentar Anda"
            />
          </div>

          {/* Tombol Submit */}
          <button
            onClick={handleSubmit} // Tambahkan event handler onClick
            style={{
              width: "inherit",
              height: "2rem",
              backgroundColor: "rgb(1 188 13)",
              borderColor: "white",
              borderRadius: "1rem",
              color: "white",
            }}
            type="button" // Ganti type menjadi button
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Kuisioner;
