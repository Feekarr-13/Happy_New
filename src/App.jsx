import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import Countdown from "react-countdown";
import './App.css';

function App() {
  const [newYearMessage, setNewYearMessage] = useState(["Happy New Year"]);

  const particlesInitialization = async (engine) => {
    await loadFireworksPreset(engine); // Memuat preset kembang api
  };

  function timeleft() {
    // Target waktu 1 Januari 2025 pukul 00:00:00 UTC
    const newYearDate = new Date("2025-01-01T00:00:00Z").getTime();
    
    // Waktu saat ini (berdasarkan sistem lokal)
    const nowDate = new Date().getTime();
    
    // Menghitung sisa waktu
    const remainingTime = newYearDate - nowDate;
    
    // Mengembalikan waktu yang tersisa
    return remainingTime;
  }

  return (
    <>
      <Particles
        init={particlesInitialization}
        options={{
          preset: "fireworks",
          background: {
            color: "#000", // Warna latar belakang hitam
          },
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1, // Pastikan berada di belakang konten
          width: "100%",
          height: "100vh", // Membuat partikel mengisi seluruh layar
        }}
      />

      {/* Main container untuk memastikan konten berada di tengah */}
      <div className="main-container">
        {/* Teks Happy New Year dengan warna kuning */}
        <span className="text-yellow text-5xl font-bold px-4">
          <Typewriter
            words={newYearMessage}
            loop={false}
            cursorStyle={"_"}
            cursor
          />
        </span>

        {/* Countdown dengan warna putih */}
        <div className="text-white font-bold text-3xl" style={{ marginTop: "20px" }}>
          <Countdown
            date={Date.now() + timeleft()}
            onComplete={() => setNewYearMessage(["Selamat Tahun Baru", "Selamat!✨"])}
          />
        </div>
      </div>
    </>
  );
}

export default App;
