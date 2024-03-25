import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/caf", (req, res) => {
  res.status(200).json([
    {
      total_docs: parseInt(process.env.total_docs),
      docs_5min: parseInt(process.env.docs_5min),
      docs_10min: parseInt(process.env.docs_10min),
      docs_15min: parseInt(process.env.docs_15min),
    },
  ]);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
