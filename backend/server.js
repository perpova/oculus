import express from "express";
import cors from "cors";
import { pool } from "./db.js";

const app = express();
app.use(cors());
app.use(express.json());

// Health check — visit http://localhost:5000/ to confirm the server itself is running
// (this does NOT test the database — just that Express started correctly)
app.get("/", (req, res) => {
  res.send("Backend server is running.");
});

// Test the database connection specifically — visit http://localhost:5000/api/test-db
app.get("/api/test-db", async (req, res) => {
  try {
    await pool.query("SELECT 1");
    res.json({ success: true, message: "Database connection works!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET the hero section content — used by the website
app.get("/api/hero", async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM home_hero ORDER BY id DESC LIMIT 1"
    );
    res.json(rows[0] || null);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch hero content" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));