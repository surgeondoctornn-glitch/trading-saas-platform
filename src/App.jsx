import { useState, useEffect } from "react";

export default function App() {
  const [digits, setDigits] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const d = Math.floor(Math.random() * 10);
      setDigits((prev) => [d, ...prev].slice(0, 20));
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Trading Dashboard</h1>

      <h3>Live Digits</h3>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {digits.map((d, i) => (
          <div
            key={i}
            style={{
              width: 40,
              height: 40,
              border: "1px solid black",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: 3
            }}
          >
            {d}
          </div>
        ))}
      </div>
    </div>
  );
}
