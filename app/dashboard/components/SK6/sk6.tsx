"use client"
import styles from "./Sk6.module.css";
import React, { useEffect, useRef } from "react";
import Chart, { ChartItem } from "chart.js/auto"; // Import chart.js

const Sk6 = () => {
  const chartContainer = useRef<HTMLCanvasElement>(null); // Menambahkan tipe referensi
  const chartInstance = useRef<Chart<"pie", number[], string> | null>(null); // Menambahkan tipe referensi untuk instance chart

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/sk6');
        const data = await response.json();
    
        if (chartContainer.current) {
          const ctx = chartContainer.current.getContext('2d');
    
          if (ctx) {
            if (chartInstance.current) {
              chartInstance.current.destroy();
            }
    
            // Menggunakan data yang diperoleh langsung dari server
            const chartData = [
              data.jml_responden_skor_1,
              data.jml_responden_skor_2,
              data.jml_responden_skor_3,
              data.jml_responden_skor_4,
              data.jml_responden_skor_5
            ];
    
            chartInstance.current = new Chart(ctx, {
              type: 'pie',
              data: {
                labels: ['Sangat Buruk', 'Buruk', 'Cukup', 'Baik', 'Sangat Baik'],
                datasets: [
                  {
                    label: 'Jumlah Kustomer',
                    data: chartData,
                    backgroundColor: ['#FFCC80', '#FFA726', '#FF8F00', '#EF6C00', '#E65100'],
                    borderColor: 'transparent',
                    borderWidth: 1
                  }
                ]
              },
              options: {
                plugins: {
                  legend: {
                    position: 'top'
                  }
                },
                responsive: true,
                maintainAspectRatio: false,
                aspectRatio: 1.1
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

export default Sk6;