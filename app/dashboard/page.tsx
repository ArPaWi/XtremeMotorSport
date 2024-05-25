"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Dashboard.module.css";
import Mekanik from "./components/Mekanik/mekanik";
import SK1 from "./components/SK1/sk1";
import SK2 from "./components/SK2/sk2";
import SK3 from "./components/SK3/sk3";
import SK4 from "./components/SK4/sk4";
import SK5 from "./components/SK5/sk5";
import SK6 from "./components/SK6/sk6";
import Tabel from "./components/Tabel/tabel";

const Dashboard = () => {
  const [jumlahKustomer, setJumlahKustomer] = useState(0);

  useEffect(() => {
    fetch('http://localhost:5000/api/jumlah_responden')
      .then(response => response.json())
      .then(data => setJumlahKustomer(data.jml_responden))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className={styles.dashboard}>
        <div style={{color: "white", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <h1>Hello, {"username"}</h1>
            <Link href="/login">
              <button style={{cursor: "pointer"}}>LOG OUT</button>
            </Link>
        </div>
        <div className={styles.d1}>
            <div className={styles.mekanik}>
              <div><Mekanik/></div>
            </div>
            <div className={styles.sk1}>Kesenangan Kustomer
              <div><SK1/></div>
            </div>
            <div className={styles.sk2}>Keramahan, Kesopanan dan Kesigapan
              <div><SK2/></div>
            </div>
        </div><br /><br />
        <div className={styles.d2}>
            <div className={styles.sk3}>Hasil Modif
              <div><SK3/></div>
            </div>
            <div className={styles.sk4}>Pelayanan
              <div><SK4/></div>
            </div>
            <div className={styles.sk5}>Kecepatan Pelayanan
              <div><SK5/></div>
            </div>
            <div className={styles.sk6}>Rekomendasi
              <div><SK6/></div>
            </div>
        </div>
        <div className={styles.data}>
          <div className={styles.tabel}>
            <h4>DATA KUSTOMER</h4>
            <div><Tabel/></div>
          </div>
          <div className={styles.jml_kustomer}>
            <h4>JUMLAH KUSTOMER</h4>
            <div>
              <div>{jumlahKustomer}</div>
              <p>Kustomer</p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Dashboard;
