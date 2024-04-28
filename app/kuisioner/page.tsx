"use client";
import React, { useState } from "react";

const Kuisioner = () => {
  // State untuk menyimpan pilihan mekanik yang dipilih oleh customer
  const [selectedMechanic, setSelectedMechanic] = useState<number | null>(null);

  // Array data mekanik beserta gambarnya
  const mechanics = [
    { id: 1, name: "John Doe", image: "john-doe.jpg" },
    { id: 2, name: "Jane Smith", image: "jane-smith.jpg" },
    { id: 3, name: "Michael Johnson", image: "michael-johnson.jpg" },
    // Tambahkan mekanik lainnya sesuai kebutuhan
  ];

  // Fungsi untuk memilih mekanik
  const selectMechanic = (mechanicId: number) => {
    setSelectedMechanic(mechanicId);
  };

  return (
    <div>
      <h2>Form Kuisioner</h2>
      {/* Identitas Diri */}
      <div>
        <h3>1. Identitas Diri</h3>
        {/* Form identitas diri */}
        {/* Nama */}
        <input type="text" placeholder="Nama" />
        {/* Motor */}
        <input type="text" placeholder="Motor" />
        {/* Nomor Telepon */}
        <input type="text" placeholder="Nomor Telepon" />
      </div>

      {/* Siapa Karyawan Modif */}
      <div>
        <h3>2. Siapa Karyawan Modif/Memberi Layanan Motor Anda?</h3>
        {/* Opsi mekanik */}
        {mechanics.map((mechanic) => (
          <div
            key={mechanic.id}
            onClick={() => selectMechanic(mechanic.id)}
            style={{
              border:
                selectedMechanic === mechanic.id ? "2px solid orange" : "none",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            <img
              src={mechanic.image}
              alt={mechanic.name}
              style={{ width: "100px", borderRadius: "50%" }}
            />
            <p>{mechanic.name}</p>
          </div>
        ))}
      </div>

      {/* Survei Kepuasan */}
      <div>
        <h3>3. Survei Kepuasan</h3>
        {/* Pertanyaan survei */}
        {/* Anda dapat menggunakan radio button atau komponen lainnya */}
        {/* Contoh pertanyaan */}
        <p>1) Apakah anda senang dengan Xtreme Motor Sport?</p>
        {/* Tambahkan pertanyaan lainnya sesuai kebutuhan */}
      </div>

      {/* Saran dan Komentar */}
      <div>
        <h3>4. Saran dan Komentar Customer</h3>
        {/* Input untuk saran dan komentar */}
        <textarea
          rows={4}
          cols={50}
          placeholder="Masukkan saran dan komentar Anda"
        />
      </div>

      {/* Tombol Submit */}
      <button type="submit">Submit</button>
    </div>
  );
};

export default Kuisioner;
