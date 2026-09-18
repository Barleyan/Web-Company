const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Company Website API is running",
  });
});

app.get("/api/company", (req, res) => {
  res.json({
    success: true,
    data: {
      name: "YourCompany",
      description:
        "Digital technology partner untuk pertumbuhan bisnis modern.",
      location: "Madiun, Jawa Timur",
      email: "hello@yourcompany.id",
      phone: "+62 812-3456-7890",
    },
  });
});

app.get("/api/services", (req, res) => {
  res.json({
    success: true,
    data: [
      {
        id: 1,
        name: "Custom Software",
      },
      {
        id: 2,
        name: "Web Development",
      },
      {
        id: 3,
        name: "ERP & CRM",
      },
      {
        id: 4,
        name: "AI & Automation",
      },
      {
        id: 5,
        name: "IT Consulting",
      },
      {
        id: 6,
        name: "Digital Marketing",
      },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});