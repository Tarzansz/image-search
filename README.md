# Image Search AI Assistant

![Image Search Banner](https://img.shields.io/badge/Image%20Search-AI%20Assistant-blue?style=for-the-badge)

## Overview

Image Search is an AI-powered web application that allows users to upload, store, and search for images using natural language. The system uses advanced AI models to analyze and understand the content of images, generating descriptive text for each uploaded photo. Users can then interact with the AI Assistant through a chat interface to find specific images based on their content, context, or other attributes.

## Features

- **Image Upload**: Easily upload and store your photos in the system
- **AI Image Analysis**: Advanced AI models automatically analyze and understand image content
- **Natural Language Descriptions**: Generate human-readable descriptions of all uploaded images
- **Conversational Search**: Find images by chatting with the AI Assistant using natural language
- **Multi-Criteria Search**: Search by objects, people, scenes, colors, emotions, and more
- **Real-time Results**: Get instant search results as you refine your queries

## How It Works

1. **Upload Images**: Users upload their photos through the intuitive web interface
2. **AI Processing**: The system processes each image using AI vision models
3. **Automatic Indexing**: Images are indexed with detailed descriptions and metadata
4. **Conversational Search**: Users ask questions or describe what they're looking for
5. **Smart Retrieval**: The AI Assistant finds and displays the most relevant images

## Use Cases

- **Personal Photo Collections**: Find specific moments without manually tagging everything
- **Digital Asset Management**: Quickly locate specific images in large collections
- **E-commerce Product Search**: Find products based on visual attributes
- **Content Creation**: Find the perfect image for your content based on context
- **Research & Analysis**: Locate images containing specific elements or themes

## Technical Architecture

The Image Search system is built on a modern tech stack:

- **Frontend**: React.js with a responsive design for all devices
- **Backend**: Node.js/Express.js API server
- **Database**: MongoDB for metadata and PostgreSQL for user data
- **Storage**: Cloud storage for images (AWS S3 or similar)
- **AI Models**: 
  - Vision models for image understanding
  - NLP models for processing search queries
  - Embedding models for semantic search

## Roadmap

- [x] Initial repository setup
- [x] Basic web interface implementation
- [ ] Image upload and storage functionality
- [ ] Integration with AI vision models
- [ ] Natural language description generation
- [ ] Conversational search interface
- [ ] Search algorithm optimization
- [ ] User authentication and personal collections
- [ ] Mobile-responsive design
- [ ] Performance optimization
- [ ] Advanced search filters

## Getting Started

### Prerequisites

- Node.js (v14+ recommended, tested with v22+)
- npm (v6+ recommended, tested with v10+) or yarn

### Installation and Running Locally

#### Windows

```powershell
# Clone the repository
git clone https://github.com/Tarzansz/image-search.git
cd image-search

# Install dependencies
npm install
# or if you use yarn
yarn install

# Start the development server
npm start
# or
yarn start
```

#### macOS

```bash
# Clone the repository
git clone https://github.com/Tarzansz/image-search.git
cd image-search

# Install dependencies
npm install
# or if you use yarn
yarn install

# Start the development server
npm start
# or
yarn start
```

#### Ubuntu/Linux

```bash
# Clone the repository
git clone https://github.com/Tarzansz/image-search.git
cd image-search

# Install dependencies
npm install
# or if you use yarn
yarn install

# Start the development server
npm start
# or
yarn start
```

After running the commands above, the application will be available at `http://localhost:3000` in your web browser. Most modern browsers will be automatically launched when the server starts.

### OS-Specific Launch Commands

If the browser doesn't open automatically, you can use these commands:

- **Windows**: `start http://localhost:3000` in PowerShell or Command Prompt
- **macOS**: `open http://localhost:3000` in Terminal
- **Ubuntu/Linux**: `xdg-open http://localhost:3000` in Terminal

### Verifying the Web Interface

To verify that the web interface is working correctly, follow these steps:

1. **Launch the application**: 
   - After running `npm start`, your browser should automatically open to `http://localhost:3000`
   - If it doesn't, manually open your browser and navigate to that URL

2. **Check the UI components**:
   - You should see a header with "Image Search AI" logo at the top
   - The left section should display an image uploader interface
   - The right section should show a chat interface with a welcome message

3. **Test image upload**:
   - Drag and drop any image onto the upload area, or click to select files
   - You should see the uploaded images appear in the gallery below the uploader
   - For this demo, the AI analysis is simulated, so descriptions are placeholder text

4. **Test the chat interface**:
   - Type a message in the chat input (e.g., "Show me nature images")
   - Press enter or click the send button
   - The app should respond and highlight any relevant images in the gallery
   - Try various queries to test the search functionality

5. **Verify responsive layout**:
   - Resize your browser window to check how the UI adapts to different screen sizes
   - On smaller screens, sections should stack vertically

## Troubleshooting Guide

### Common Issues Across All Platforms

1. **Node.js Version Compatibility**:
   - This application requires Node.js v14 or higher
   - Verify your version with `node -v`
   - If needed, update Node.js from [nodejs.org](https://nodejs.org/)

2. **Dependency Installation Failures**:
   - Try clearing npm cache: `npm cache clean --force`
   - Ensure you have proper internet connection
   - Check for any proxy or firewall issues

3. **Permission Issues**:
   - Ensure you have proper permissions to install packages
   - On Unix-based systems, avoid using `sudo npm install` unless necessary

### Windows-Specific Issues

1. **Application doesn't start**:
   - Ensure you have the correct Node.js version (use `node -v` to check)
   - Check if there are any error messages in the terminal
   - Make sure no other service is using port 3000
   - Try running PowerShell as administrator

2. **Port already in use**:
   - Run `netstat -ano | findstr :3000` to find processes using port 3000
   - Kill the process with `taskkill /PID <PID> /F`

3. **Long Path Issues**:
   - Windows may have issues with long file paths in node_modules
   - Enable long path support in Windows 10+ or use a shorter installation path

### macOS-Specific Issues

1. **Application doesn't start**:
   - Ensure you have the correct Node.js version (use `node -v` to check)
   - Check if there are any error messages in the terminal
   - Make sure no other service is using port 3000

2. **Port already in use**:
   - Run `lsof -i :3000` to find processes using port 3000
   - Kill the process with `kill -9 <PID>`

3. **Permissions Issues**:
   - If you see EACCES errors, fix npm permissions: [npm docs](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally)

### Ubuntu/Linux-Specific Issues

1. **Application doesn't start**:
   - Ensure you have the correct Node.js version (use `node -v` to check)
   - Check if there are any error messages in the terminal
   - Make sure no other service is using port 3000

2. **Port already in use**:
   - Run `sudo netstat -tulpn | grep :3000` to find processes using port 3000
   - Kill the process with `kill -9 <PID>`

3. **Browser doesn't open automatically**:
   - Open your browser manually and navigate to `http://localhost:3000`
   - Or use `xdg-open http://localhost:3000` in the terminal

4. **Node.js Installation Issues**:
   - Consider using NVM (Node Version Manager) for easier Node.js management
   - Install with: `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash`

### Application-Specific Issues

1. **Images don't upload**:
   - Check your browser console for any JavaScript errors (F12 or right-click > Inspect > Console)
   - Make sure your images meet the requirements (less than 5MB, common image formats)
   - Try using a different browser (Chrome, Firefox, Safari)

2. **Chat doesn't respond**:
   - This is a frontend-only demo with simulated AI responses
   - Ensure you entered text and clicked the send button or pressed enter
   - Check browser console for any errors

3. **UI rendering issues**:
   - Clear browser cache and reload
   - Try disabling browser extensions that might interfere
   - Update your browser to the latest version

## Current Limitations

This version is a frontend prototype with simulated AI capabilities:

- Image analysis is not actually performed - descriptions are pre-defined
- Images are stored in browser memory only and will disappear on refresh
- No backend storage or API integration yet
- Search results are based on simple text matching, not actual AI understanding

## Contributing

Contributions are welcome! If you'd like to contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure your code follows the project's coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- AI model providers for image recognition technology
- Open source community for various libraries and tools
- All contributors and testers who help improve this project

---

*This project is under active development. Features and documentation will be regularly updated.*