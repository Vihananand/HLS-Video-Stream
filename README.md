# 🎥 Video Streaming Platform

A modern, full-stack video streaming platform that converts uploaded videos to HLS (HTTP Live Streaming) format for adaptive, high-quality video playback across all devices.

![Video Streaming Platform](https://img.shields.io/badge/Platform-Video%20Streaming-blue)
![React](https://img.shields.io/badge/Frontend-React-61DAFB)
![Node.js](https://img.shields.io/badge/Backend-Node.js-339933)
![Video.js](https://img.shields.io/badge/Player-Video.js-FF6B6B)
![HLS](https://img.shields.io/badge/Streaming-HLS-orange)

## 🚀 Features

- **📤 Video Upload**: Drag-and-drop or click to upload video files
- **🔄 Automatic HLS Conversion**: Server-side conversion to HLS format for optimal streaming
- **🎛️ Quality Selection**: Adaptive bitrate streaming with manual quality control
- **📱 Responsive Design**: Beautiful dark theme that works on all devices
- **⚡ Fast Streaming**: Efficient video delivery with segment-based streaming
- **🎨 Modern UI**: Clean, dark interface with smooth animations

## 🛠️ Technology Stack

### Frontend Technologies

| Technology | Version | Purpose | Advantages |
|------------|---------|---------|------------|
| **React** | 19.1.1 | UI Framework | • Component-based architecture<br>• Virtual DOM for performance<br>• Large ecosystem<br>• Easy state management |
| **Vite** | 7.1.2 | Build Tool | • Lightning-fast development server<br>• Hot Module Replacement (HMR)<br>• Optimized production builds<br>• Modern ES modules support |
| **Video.js** | 8.23.4 | Video Player | • HTML5 video player<br>• Plugin ecosystem<br>• Responsive design<br>• Cross-browser compatibility |
| **HLS Quality Selector** | 2.0.0 | Quality Control | • Adaptive bitrate streaming<br>• Manual quality selection<br>• Seamless quality switching<br>• Network-aware streaming |

### Backend Technologies

| Technology | Version | Purpose | Advantages |
|------------|---------|---------|------------|
| **Node.js** | Latest | Runtime Environment | • JavaScript everywhere<br>• Non-blocking I/O<br>• NPM ecosystem<br>• Great for real-time apps |
| **Express** | 5.1.0 | Web Framework | • Minimal and fast<br>• Robust routing<br>• Middleware support<br>• RESTful API development |
| **Multer** | 2.0.2 | File Upload | • Multipart form handling<br>• File size limits<br>• Storage customization<br>• Memory-efficient uploads |
| **FFmpeg** | System | Video Processing | • Industry-standard tool<br>• Format conversion<br>• Video optimization<br>• HLS segmentation |
| **UUID** | 13.0.0 | Unique IDs | • Collision-resistant<br>• No central authority needed<br>• RFC 4122 compliant<br>• Perfect for distributed systems |

### Development Tools

| Tool | Purpose | Benefits |
|------|---------|----------|
| **ESLint** | Code Linting | • Code quality enforcement<br>• Consistent coding style<br>• Bug prevention<br>• Team collaboration |
| **Nodemon** | Development Server | • Auto-restart on changes<br>• Faster development<br>• Built-in monitoring<br>• Zero configuration |
| **CORS** | Cross-Origin Requests | • Secure API access<br>• Frontend-backend communication<br>• Configurable security<br>• Modern web standards |

## 🏗️ Architecture Overview

```code

┌─────────────────┐    HTTP/API     ┌─────────────────┐
│                 │ ──────────────► │                 │
│   React Client  │                 │  Express Server │
│   (Port 5173)   │ ◄────────────── │   (Port 3000)   │
│                 │    HLS Stream   │                 │
└─────────────────┘                 └─────────────────┘
         │                                   │
         │                                   │
         ▼                                   ▼
┌─────────────────┐                 ┌────────────────────┐
│   Video.js      │                 │      FFmpeg        │
│   Player        │                 │    Processing      │
│                 │                 │                    │
│ • HLS Support   │                 │ • Video Conversion │
│ • Quality Menu  │                 │ • Segmentation     │
│ • Dark Theme    │                 │ • HLS Generation   │
└─────────────────┘                 └────────────────────┘
```

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **FFmpeg** installed on your system - [Installation guide](https://ffmpeg.org/download.html)
- **npm** or **yarn** package manager

### Installing FFmpeg

#### Windows

```bash
# Using Chocolatey
choco install ffmpeg

# Or download from https://ffmpeg.org/download.html
```

#### macOS

```bash
# Using Homebrew
brew install ffmpeg
```

#### Linux (Ubuntu/Debian)

```bash
sudo apt update
sudo apt install ffmpeg
```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd video-streaming
```

### 2. Install Dependencies

#### Backend Setup

```bash
cd server
npm install
```

#### Frontend Setup

```bash
cd ../client
npm install
```

### 3. Start the Development Servers

#### Start Backend (Terminal 1)

```bash
cd server
npm run dev
```

Server will start at `http://localhost:3000`

#### Start Frontend (Terminal 2)

```bash
cd client
npm run dev
```

Client will start at `http://localhost:5173`

### 4. Access the Application

Open your browser and navigate to `http://localhost:5173`

## 💡 How to Use

### For End Users

1. **Upload Video**
   - Click the "Choose File" button or drag & drop a video file
   - Supported formats: MP4, AVI, MOV, MKV, and more
   - Maximum file size: 50MB (configurable)

2. **Video Processing**
   - The server automatically converts your video to HLS format
   - This process creates optimized segments for streaming
   - Progress is indicated by the upload status

3. **Watch Video**
   - Once processed, the video player appears automatically
   - Use the quality selector (⚙️) to change video quality
   - Enjoy smooth, adaptive streaming

### For Developers

1. **Adding New Features**
   - Frontend components are in `client/src/components/`
   - Backend routes are in `server/index.js`
   - Styling is in `client/src/App.css`

2. **Customizing Video Processing**
   - Modify FFmpeg commands in `server/index.js`
   - Adjust HLS segment duration and other parameters
   - Add multiple quality variants for adaptive streaming

3. **Deployment**
   - Build frontend: `npm run build` in client directory
   - Use process managers like PM2 for production server
   - Configure reverse proxy (Nginx) for better performance

## 🎯 Key Advantages of Our Technology Choices

### Why React?

- **Component Reusability**: Build once, use everywhere
- **Virtual DOM**: Exceptional performance for UI updates
- **Developer Experience**: Excellent debugging tools and hot reload
- **Community Support**: Massive ecosystem and learning resources

### Why Video.js?

- **HTML5 First**: Modern web standards without flash dependencies
- **Plugin Architecture**: Extensible with quality selectors, analytics, etc.
- **Mobile Optimized**: Touch controls and responsive design
- **Accessibility**: Screen reader support and keyboard navigation

### Why HLS (HTTP Live Streaming)?

- **Adaptive Bitrate**: Automatically adjusts quality based on network
- **Compatibility**: Works on all modern browsers and devices
- **Scalability**: CDN-friendly for global content delivery
- **Reliability**: Graceful degradation on poor connections

### Why Express + Node.js?

- **JavaScript Everywhere**: Same language for frontend and backend
- **Performance**: Non-blocking I/O perfect for video streaming
- **Ecosystem**: Rich npm packages for video processing
- **Real-time Capabilities**: WebSocket support for live features

### Why FFmpeg?

- **Industry Standard**: Used by Netflix, YouTube, and major platforms
- **Format Support**: Handles virtually all video/audio formats
- **Optimization**: Advanced encoding for optimal file sizes
- **Customization**: Extensive options for professional workflows

## 📁 Project Structure

```code
video-streaming/
├── client/                     # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   └── VideoPlayer.jsx # Video.js player component
│   │   ├── App.jsx            # Main application component
│   │   ├── App.css            # Styling and dark theme
│   │   └── main.jsx           # React entry point
│   ├── public/                # Static assets
│   └── package.json           # Frontend dependencies
│
├── server/                    # Express backend
│   ├── uploads/               # Uploaded video files
│   │   └── courses/           # HLS converted videos
│   ├── index.js               # Main server file
│   └── package.json           # Backend dependencies
│
└── README.md                  # This file
```

## 🔧 Configuration Options

### Server Configuration (server/index.js)

```javascript
// File upload limits
limits: { fileSize: 50 * 1024 * 1024 } // 50MB

// HLS segment duration
-hls_time 10 // 10 seconds per segment

// Video quality settings
-codec:v libx264 -codec:a aac // H.264 video, AAC audio
```

### Client Configuration (client/src/App.jsx)

```javascript
// Video.js options
const videoPlayerOptions = {
  controls: true,
  responsive: true,
  fluid: true,
  playbackRates: [0.5, 1, 1.25, 1.5, 2], // Speed options
}
```

## 🚀 Production Deployment

### Frontend (Static Files)

```bash
cd client
npm run build
# Deploy dist/ folder to CDN or static hosting
```

### Backend (Node.js Server)

```bash
cd server
npm start
# Use PM2 for process management:
npm install -g pm2
pm2 start index.js --name "video-streaming"
```

### Recommended Production Setup

- **Frontend**: Deploy to Vercel, Netlify, or AWS S3 + CloudFront
- **Backend**: Deploy to AWS EC2, DigitalOcean, or Heroku
- **Storage**: Use AWS S3 for video storage and CDN delivery
- **Database**: Add MongoDB or PostgreSQL for metadata storage

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License. See the LICENSE file for details.

## 🆘 Troubleshooting

### Common Issues

1. **FFmpeg not found**
   - Ensure FFmpeg is installed and in your system PATH
   - Test with `ffmpeg -version` in terminal

2. **CORS errors**
   - Check if both servers are running on correct ports
   - Verify CORS configuration in server/index.js

3. **Video not playing**
   - Check browser console for errors
   - Ensure HLS conversion completed successfully
   - Verify file permissions in uploads directory

4. **Large file uploads failing**
   - Increase file size limits in multer configuration
   - Check server disk space and memory

### Performance Tips

- **Enable Gzip**: Compress API responses for faster loading
- **Use CDN**: Serve HLS segments from a CDN for global performance
- **Database Indexing**: Add proper indexes if you add a database
- **Caching**: Implement Redis for session and metadata caching

## 📞 Support

For support, email [your-email] or create an issue in the repository.

---

**Made with ❤️ using modern web technologies**