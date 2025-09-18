import { useRef, useState } from "react";
import VideoJS from "../components/VideoPlayer";

function Home() {
  const playerRef = useRef(null);
  const [videoUrl, setVideoUrl] = useState(null);

  const handleUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://localhost:3000/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      console.log("Backend response:", data);

      setVideoUrl(data.videoUrl); // backend sends this
    } catch (err) {
      console.error("Upload failed:", err);
    }
  };

  const videoPlayerOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: videoUrl,
        type: "application/x-mpegURL"
      }
    ]
  }

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    player.on("waiting", () => {
      console.log("Player is waiting");
    });

    player.on("dispose", () => {
      console.log("Player will dispose");
    });
  }

  return (
    <div className="container">
      <header className="header">
        <h1 className="title">Video Streaming Platform</h1>
        <p className="subtitle">Upload and stream your videos seamlessly</p>
      </header>

      <div className="upload-section">
        <div className="upload-card">
          <div className="upload-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2H6C4.89 2 4 2.89 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3>Upload Video</h3>
          <p>Select a video file to upload and stream</p>
          <label className="file-input-label">
            <input 
              type="file" 
              accept="video/*" 
              onChange={handleUpload}
              className="file-input"
            />
            <span className="file-input-button">Choose File</span>
          </label>
        </div>
      </div>

      {/* Show player only after link is available */}
      {videoUrl && (
        <div className="video-section">
          <div className="video-card">
            <div className="video-wrapper">
              <VideoJS
                options={videoPlayerOptions}
                onReady={handlePlayerReady}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;