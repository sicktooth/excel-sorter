import express, { urlencoded } from "express";
import { log } from "node:console";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import dotenv from 'dotenv'; // to get var from env file: dotenv

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config(); // dotenv

app.use(express.static("public"));
app.use(urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "public", "index.html"));
});

app.post("/results" , (req, res) => {

});

app.listen(process.env.PORT || 3000, () => {
  log(`Server is running on port ${process.env.PORT || port}`);
});