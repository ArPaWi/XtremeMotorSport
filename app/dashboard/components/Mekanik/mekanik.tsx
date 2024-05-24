"use client"
import styles from "./Mekanik.module.css";
import React, { useEffect, useRef } from "react";
import Chart, { ChartItem } from "chart.js/auto"; // Import chart.js

const Mekanik = () => {
  const chartContainer = useRef<HTMLCanvasElement>(null); // Menambahkan tipe referensi
  const chartInstance = useRef<Chart<"bar", number[], string> | null>(null); // Menambahkan tipe referensi untuk instance chart

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/mekanik');
        const data = await response.json();
    
        if (chartContainer.current) {
          const ctx = chartContainer.current.getContext('2d');
    
          if (ctx) {
            if (chartInstance.current) {
              chartInstance.current.destroy();
            }
    
            // Menggunakan data yang diperoleh langsung dari server
            const chartData = [
              data.jml_responden_mekanik_1,
              data.jml_responden_mekanik_2,
              data.jml_responden_mekanik_3,
              data.jml_responden_mekanik_4,
              data.jml_responden_mekanik_5,
              data.jml_responden_mekanik_6,
              data.jml_responden_mekanik_7,
              data.jml_responden_mekanik_8,
              data.jml_responden_mekanik_9
            ];
    
            chartInstance.current = new Chart(ctx, {
              type: 'bar',
              data: {
                labels: ["Anis", "Jazi", "Misbah", "Erick", "Doni", "Meri", "Yudis", "Erna", "Tika"],
                datasets: [
                  {
                    label: 'Jumlah Kustomer',
                    data: chartData,
                    backgroundColor: "rgb(255, 150, 0)",
                    borderColor: "rgb(255, 150, 0)",
                    borderWidth: 1
                  }
                ]
              },
              options: {
                scales:{
                  x:{
                    type: 'category',
                    labels: ["Anis", "Jazi", "Misbah", "Erick", "Doni", "Meri", "Yudis", "Erna", "Tika"],
                  },
                },
                responsive: true,
                maintainAspectRatio: false,
                aspectRatio: 1.2
              }
            });
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.chart}>
      <canvas ref={chartContainer}></canvas>
    </div>
  );
};

export default Mekanik;