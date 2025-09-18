import express from "express";
import cors from "cors";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import fs from "fs";
import { exec } from "child_process";

const app = express();
const PORT = 3000;

//multer middleware
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + uuidv4() + path.extname(file.originalname));
  },
});

//multer config
const upload = multer({
  storage: storage,
  limits: { fileSize: 50 * 1024 * 1024 }, // 50MB limit
});

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5173"],
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.json({ message: "/ route hit sucessfull" });
});

app.post("/upload", upload.single("file"), (req, res) => {
  const lessonId = uuidv4();
  const videoPath = req.file.path;
  const outputPath = `./uploads/courses/${lessonId}`;
  const hlsPath = `${outputPath}/index.m3u8`;

  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true });
  }

  const ffmpegCommand = `ffmpeg -i "${videoPath}" -codec:v libx264 -codec:a aac -hls_time 10 -hls_playlist_type vod -hls_segment_filename "${outputPath}/segment%03d.ts" -start_number 0 ${hlsPath}`;

  // not used in production but can be used in proof of work
  // the code below sometimes takes a lot of time to execute in real life production level this command runs on set of machines to make it faster
  exec(ffmpegCommand, (error, stdout, stderr) => {
    if (error) {
      return res
        .status(500)
        .json({ message: `ffmpeg error: ${error.message}` });
    }

    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);

    const videoUrl = `http://localhost:3000/uploads/courses/${lessonId}/index.m3u8`;

    res.json({
      message: "Video converted to HLS format",
      videoUrl: videoUrl,
      lessonId: lessonId,
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});
