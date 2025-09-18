import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">About StreamFlex</h1>
            <p className="hero-subtitle">
              A modern, full-stack video streaming platform that converts uploaded videos 
              to HLS format for adaptive, high-quality video playback across all devices.
            </p>
            <div className="hero-badges">
              <span className="badge badge-blue">Video Streaming</span>
              <span className="badge badge-react">React 19.1.1</span>
              <span className="badge badge-node">Node.js</span>
              <span className="badge badge-videojs">Video.js</span>
              <span className="badge badge-hls">HLS Streaming</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">🚀 Platform Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📤</div>
              <h3>Video Upload</h3>
              <p>Drag-and-drop or click to upload video files with support for multiple formats</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3>Automatic HLS Conversion</h3>
              <p>Server-side conversion to HLS format for optimal streaming performance</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎛️</div>
              <h3>Quality Selection</h3>
              <p>Adaptive bitrate streaming with manual quality control options</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Responsive Design</h3>
              <p>Beautiful dark theme that works seamlessly on all devices</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Fast Streaming</h3>
              <p>Efficient video delivery with segment-based streaming technology</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Modern UI</h3>
              <p>Clean, dark interface with smooth animations and intuitive controls</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="tech-stack-section">
        <div className="container">
          <h2 className="section-title">🛠️ Technology Stack</h2>
          
          {/* Frontend Technologies */}
          <div className="tech-category">
            <h3 className="tech-category-title">Frontend Technologies</h3>
            <div className="tech-grid">
              <div className="tech-card">
                <div className="tech-header">
                  <div className="tech-logo react-logo">⚛️</div>
                  <div className="tech-info">
                    <h4>React</h4>
                    <span className="version">v19.1.1</span>
                  </div>
                </div>
                <p className="tech-purpose">UI Framework</p>
                <ul className="tech-advantages">
                  <li>Component-based architecture</li>
                  <li>Virtual DOM for performance</li>
                  <li>Large ecosystem</li>
                  <li>Easy state management</li>
                </ul>
              </div>

              <div className="tech-card">
                <div className="tech-header">
                  <div className="tech-logo vite-logo">⚡</div>
                  <div className="tech-info">
                    <h4>Vite</h4>
                    <span className="version">v7.1.2</span>
                  </div>
                </div>
                <p className="tech-purpose">Build Tool</p>
                <ul className="tech-advantages">
                  <li>Lightning-fast development server</li>
                  <li>Hot Module Replacement (HMR)</li>
                  <li>Optimized production builds</li>
                  <li>Modern ES modules support</li>
                </ul>
              </div>

              <div className="tech-card">
                <div className="tech-header">
                  <div className="tech-logo videojs-logo">🎬</div>
                  <div className="tech-info">
                    <h4>Video.js</h4>
                    <span className="version">v8.23.4</span>
                  </div>
                </div>
                <p className="tech-purpose">Video Player</p>
                <ul className="tech-advantages">
                  <li>HTML5 video player</li>
                  <li>Plugin ecosystem</li>
                  <li>Responsive design</li>
                  <li>Cross-browser compatibility</li>
                </ul>
              </div>

              <div className="tech-card">
                <div className="tech-header">
                  <div className="tech-logo hls-logo">🎯</div>
                  <div className="tech-info">
                    <h4>HLS Quality Selector</h4>
                    <span className="version">v2.0.0</span>
                  </div>
                </div>
                <p className="tech-purpose">Quality Control</p>
                <ul className="tech-advantages">
                  <li>Adaptive bitrate streaming</li>
                  <li>Manual quality selection</li>
                  <li>Seamless quality switching</li>
                  <li>Network-aware streaming</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Backend Technologies */}
          <div className="tech-category">
            <h3 className="tech-category-title">Backend Technologies</h3>
            <div className="tech-grid">
              <div className="tech-card">
                <div className="tech-header">
                  <div className="tech-logo nodejs-logo">🟢</div>
                  <div className="tech-info">
                    <h4>Node.js</h4>
                    <span className="version">Latest</span>
                  </div>
                </div>
                <p className="tech-purpose">Runtime Environment</p>
                <ul className="tech-advantages">
                  <li>JavaScript everywhere</li>
                  <li>Non-blocking I/O</li>
                  <li>NPM ecosystem</li>
                  <li>Great for real-time apps</li>
                </ul>
              </div>

              <div className="tech-card">
                <div className="tech-header">
                  <div className="tech-logo express-logo">🚀</div>
                  <div className="tech-info">
                    <h4>Express</h4>
                    <span className="version">v5.1.0</span>
                  </div>
                </div>
                <p className="tech-purpose">Web Framework</p>
                <ul className="tech-advantages">
                  <li>Minimal and fast</li>
                  <li>Robust routing</li>
                  <li>Middleware support</li>
                  <li>RESTful API development</li>
                </ul>
              </div>

              <div className="tech-card">
                <div className="tech-header">
                  <div className="tech-logo multer-logo">📁</div>
                  <div className="tech-info">
                    <h4>Multer</h4>
                    <span className="version">v2.0.2</span>
                  </div>
                </div>
                <p className="tech-purpose">File Upload</p>
                <ul className="tech-advantages">
                  <li>Multipart form handling</li>
                  <li>File size limits</li>
                  <li>Storage customization</li>
                  <li>Memory-efficient uploads</li>
                </ul>
              </div>

              <div className="tech-card">
                <div className="tech-header">
                  <div className="tech-logo ffmpeg-logo">🎞️</div>
                  <div className="tech-info">
                    <h4>FFmpeg</h4>
                    <span className="version">System</span>
                  </div>
                </div>
                <p className="tech-purpose">Video Processing</p>
                <ul className="tech-advantages">
                  <li>Industry-standard tool</li>
                  <li>Format conversion</li>
                  <li>Video optimization</li>
                  <li>HLS segmentation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="architecture-section">
        <div className="container">
          <h2 className="section-title">🏗️ Architecture Overview</h2>
          <div className="architecture-diagram">
            <div className="arch-component client">
              <div className="arch-icon">⚛️</div>
              <h4>React Client</h4>
              <p>Port 5173</p>
              <div className="arch-details">
                <span>• Video.js Player</span>
                <span>• HLS Support</span>
                <span>• Quality Menu</span>
                <span>• Dark Theme</span>
              </div>
            </div>
            
            <div className="arch-connection">
              <div className="connection-line"></div>
              <span className="connection-label">HTTP/API & HLS Stream</span>
            </div>
            
            <div className="arch-component server">
              <div className="arch-icon">🚀</div>
              <h4>Express Server</h4>
              <p>Port 3000</p>
              <div className="arch-details">
                <span>• FFmpeg Processing</span>
                <span>• Video Conversion</span>
                <span>• Segmentation</span>
                <span>• HLS Generation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="usage-section">
        <div className="container">
          <h2 className="section-title">💡 How to Use</h2>
          <div className="usage-tabs">
            <div className="usage-category">
              <h3>For End Users</h3>
              <div className="usage-steps">
                <div className="usage-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Upload Video</h4>
                    <p>Click "Choose File" or drag & drop your video. Supports MP4, AVI, MOV, MKV and more. Maximum file size: 50MB.</p>
                  </div>
                </div>
                <div className="usage-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Video Processing</h4>
                    <p>Server automatically converts your video to HLS format, creating optimized segments for streaming.</p>
                  </div>
                </div>
                <div className="usage-step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Watch Video</h4>
                    <p>Video player appears automatically. Use quality selector to change video quality and enjoy smooth streaming.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="usage-category">
              <h3>For Developers</h3>
              <div className="usage-steps">
                <div className="usage-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Adding Features</h4>
                    <p>Frontend components in <code>client/src/components/</code>, backend routes in <code>server/index.js</code></p>
                  </div>
                </div>
                <div className="usage-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Video Processing</h4>
                    <p>Modify FFmpeg commands, adjust HLS parameters, add multiple quality variants for adaptive streaming.</p>
                  </div>
                </div>
                <div className="usage-step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Deployment</h4>
                    <p>Build frontend with <code>npm run build</code>, use PM2 for production, configure Nginx for performance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Tech Section */}
      <section className="why-tech-section">
        <div className="container">
          <h2 className="section-title">🎯 Why These Technologies?</h2>
          <div className="why-tech-grid">
            <div className="why-tech-card">
              <h3>Why React?</h3>
              <ul>
                <li><strong>Component Reusability:</strong> Build once, use everywhere</li>
                <li><strong>Virtual DOM:</strong> Exceptional performance for UI updates</li>
                <li><strong>Developer Experience:</strong> Excellent debugging tools and hot reload</li>
                <li><strong>Community Support:</strong> Massive ecosystem and learning resources</li>
              </ul>
            </div>

            <div className="why-tech-card">
              <h3>Why Video.js?</h3>
              <ul>
                <li><strong>HTML5 First:</strong> Modern web standards without flash dependencies</li>
                <li><strong>Plugin Architecture:</strong> Extensible with quality selectors, analytics</li>
                <li><strong>Mobile Optimized:</strong> Touch controls and responsive design</li>
                <li><strong>Accessibility:</strong> Screen reader support and keyboard navigation</li>
              </ul>
            </div>

            <div className="why-tech-card">
              <h3>Why HLS Streaming?</h3>
              <ul>
                <li><strong>Adaptive Bitrate:</strong> Automatically adjusts quality based on network</li>
                <li><strong>Compatibility:</strong> Works on all modern browsers and devices</li>
                <li><strong>Scalability:</strong> CDN-friendly for global content delivery</li>
                <li><strong>Reliability:</strong> Graceful degradation on poor connections</li>
              </ul>
            </div>

            <div className="why-tech-card">
              <h3>Why Express + Node.js?</h3>
              <ul>
                <li><strong>JavaScript Everywhere:</strong> Same language for frontend and backend</li>
                <li><strong>Performance:</strong> Non-blocking I/O perfect for video streaming</li>
                <li><strong>Ecosystem:</strong> Rich npm packages for video processing</li>
                <li><strong>Real-time Capabilities:</strong> WebSocket support for live features</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Project Structure Section */}
      <section className="project-structure-section">
        <div className="container">
          <h2 className="section-title">📁 Project Structure</h2>
          <div className="file-tree">
            <div className="file-tree-item folder">
              <span className="file-icon">📁</span>
              <span className="file-name">video-streaming/</span>
            </div>
            <div className="file-tree-item folder nested">
              <span className="file-icon">📁</span>
              <span className="file-name">client/</span>
              <span className="file-description">React frontend</span>
            </div>
            <div className="file-tree-item folder nested-2">
              <span className="file-icon">📁</span>
              <span className="file-name">src/components/</span>
            </div>
            <div className="file-tree-item file nested-3">
              <span className="file-icon">📄</span>
              <span className="file-name">VideoPlayer.jsx</span>
              <span className="file-description">Video.js player component</span>
            </div>
            <div className="file-tree-item file nested-2">
              <span className="file-icon">📄</span>
              <span className="file-name">App.jsx</span>
              <span className="file-description">Main application component</span>
            </div>
            <div className="file-tree-item file nested-2">
              <span className="file-icon">🎨</span>
              <span className="file-name">App.css</span>
              <span className="file-description">Styling and dark theme</span>
            </div>
            <div className="file-tree-item folder nested">
              <span className="file-icon">📁</span>
              <span className="file-name">server/</span>
              <span className="file-description">Express backend</span>
            </div>
            <div className="file-tree-item folder nested-2">
              <span className="file-icon">📁</span>
              <span className="file-name">uploads/courses/</span>
              <span className="file-description">HLS converted videos</span>
            </div>
            <div className="file-tree-item file nested-2">
              <span className="file-icon">⚙️</span>
              <span className="file-name">index.js</span>
              <span className="file-description">Main server file</span>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="getting-started-section">
        <div className="container">
          <h2 className="section-title">🚀 Getting Started</h2>
          <div className="setup-steps">
            <div className="setup-step">
              <h3>Prerequisites</h3>
              <div className="prerequisites">
                <div className="prereq-item">
                  <span className="prereq-icon">🟢</span>
                  <span>Node.js (v16 or higher)</span>
                </div>
                <div className="prereq-item">
                  <span className="prereq-icon">🎞️</span>
                  <span>FFmpeg installed on your system</span>
                </div>
                <div className="prereq-item">
                  <span className="prereq-icon">📦</span>
                  <span>npm or yarn package manager</span>
                </div>
              </div>
            </div>

            <div className="setup-step">
              <h3>Installation Steps</h3>
              <div className="install-commands">
                <div className="command-group">
                  <h4>1. Clone Repository</h4>
                  <code className="command">git clone &lt;repository-url&gt;</code>
                  <code className="command">cd video-streaming</code>
                </div>
                <div className="command-group">
                  <h4>2. Install Dependencies</h4>
                  <code className="command">cd server && npm install</code>
                  <code className="command">cd ../client && npm install</code>
                </div>
                <div className="command-group">
                  <h4>3. Start Development Servers</h4>
                  <code className="command">cd server && npm run dev</code>
                  <code className="command">cd client && npm run dev</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
