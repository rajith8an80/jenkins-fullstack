const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let contacts = [
  { id: 1, name: "Rajith", phone: "9876543210" },
  
];

app.get("/api/contacts", (req, res) => {
  res.json(contacts);
});

app.post("/api/contacts", (req, res) => {
  const newContact = {
    id: contacts.length + 1,
    name: req.body.name,
    phone: req.body.phone
  };

  contacts.push(newContact);
  res.json(newContact);
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});