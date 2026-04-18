import { useState, useEffect } from "react";

export default function App() {
  const [section, setSection] = useState("dashboard");
  const [digits, setDigits] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const d = Math.floor(Math.random() * 10);
      setDigits((prev) => [d, ...prev].slice(0, 20));
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: "flex", height: "100vh" }}>

      {/* Sidebar */}
      <div style={{ width: 200, padding: 10, borderRight: "1px solid #ccc" }}>
        <h3>Trading Hub</h3>

        <button onClick={() => setSection("dashboard")}>Dashboard</button>
        <button onClick={() => setSection("analysis")}>Analysis</button>
        <button onClick={() => setSection("bots")}>Bots</button>
      </div>

      {/* Main */}
      <div style={{ padding: 20, flex: 1 }}>

        {section === "dashboard" && (
          <div>
            <h2>Dashboard</h2>

            <input
              placeholder="Deriv API Token"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              style={{ padding: 8, width: 250 }}
            />

            <p>Status: {token ? "Connected (UI only)" : "Not connected"}</p>
          </div>
        )}

        {section === "analysis" && (
          <div>
            <h2>Live Digits</h2>

            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {digits.map((d, i) => (
                <div key={i} style={{
                  width: 40,
                  height: 40,
                  border: "1px solid black",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: 3
                }}>
                  {d}
                </div>
              ))}
            </div>
          </div>
        )}

        {section === "bots" && (
          <div>
            <h2>Bot Builder</h2>
            <p>Coming soon...</p>
          </div>
        )}

      </div>
    </div>
  );
}