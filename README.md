# 🤖 AI Virtual Assistant

A modern, voice-controlled web application that responds to spoken commands and performs various web-based actions. Built with vanilla JavaScript and the Web Speech API.

![AI Assistant Demo](./Leonardo_Phoenix_A_visually_captivating_hightech_background_fo_3.jpg)

## ✨ Features

- **🎤 Voice Recognition**: Advanced speech-to-text using Web Speech API
- **🔊 Text-to-Speech**: Natural voice responses for user feedback
- **🌐 Website Navigation**: Quick access to popular platforms
- **🔍 Smart Search**: Automatic Google search for unrecognized commands
- **🎨 Modern UI**: Sleek design with animated interactions
- **📱 Responsive**: Works on desktop and mobile browsers

## 🚀 Supported Commands

| Command | Action |
|---------|--------|
| "Open YouTube" | Opens YouTube in a new tab |
| "Open Google" | Opens Google in a new tab |
| "Open Facebook" | Opens Facebook in a new tab |
| "Open Instagram" | Opens Instagram in a new tab |
| "Open WhatsApp" | Opens WhatsApp Web in a new tab |
| Any other phrase | Performs Google search |

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with animations and responsive design
- **JavaScript (ES6+)**: Core functionality and API integration
- **Web Speech API**: Speech recognition and synthesis
- **Google Fonts**: Roboto font family for typography

## 📋 Prerequisites

- Modern web browser with Web Speech API support:
  - ✅ Chrome (recommended)
  - ✅ Edge
  - ✅ Safari (limited support)
  - ❌ Firefox (limited Web Speech API support)
- Microphone access permissions
- Internet connection for external website navigation

## 🚀 Getting Started

### Installation

1. **Clone or download** this repository:
   ```bash
   git clone <repository-url>
   cd ai-virtual-assistant
   ```

2. **Open the application**:
   - Simply open `index.html` in your web browser
   - Or use a local server for better performance:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx serve .
     ```

3. **Grant microphone permissions** when prompted by your browser

### Usage

1. Click the **"🎤 Start Listening"** button
2. Wait for the assistant to say "Hello, how can I help you?"
3. Speak your command clearly
4. The assistant will process and execute your request

## 🏗️ Project Structure

```
ai-virtual-assistant/
├── index.html                 # Main HTML file
├── style.css                  # Styling and animations
├── script.js                  # Core JavaScript functionality
├── Leonardo_Phoenix_*.jpg     # Background image
└── README.md                  # Project documentation
```

## 🔧 Configuration

### Adding New Commands

To add new voice commands, modify the `handleCommand()` function in `script.js`:

```javascript
function handleCommand(command) {
  if (command.includes("your new command")) {
    speak("Response message");
    // Your action here
  }
  // ... existing commands
}
```

### Customizing Appearance

- **Background**: Replace the image file or update the CSS `background-image` property
- **Colors**: Modify CSS variables in `style.css`
- **Fonts**: Change the Google Fonts import and font-family declarations

## 🌐 Browser Compatibility

| Browser | Speech Recognition | Speech Synthesis | Overall Support |
|---------|-------------------|------------------|-----------------|
| Chrome | ✅ Full | ✅ Full | ✅ Excellent |
| Edge | ✅ Full | ✅ Full | ✅ Excellent |
| Safari | ⚠️ Limited | ✅ Full | ⚠️ Partial |
| Firefox | ❌ None | ✅ Full | ❌ Limited |

## 🔒 Privacy & Security

- **Local Processing**: Speech recognition is processed by your browser
- **No Data Storage**: No personal data is stored or transmitted
- **External Links**: Commands open websites in new tabs
- **Microphone Access**: Only used when explicitly activated

## 🐛 Troubleshooting

### Common Issues

**Microphone not working:**
- Ensure microphone permissions are granted
- Check browser settings for microphone access
- Try refreshing the page

**Commands not recognized:**
- Speak clearly and at normal pace
- Ensure good microphone quality
- Check browser console for error messages

**No voice response:**
- Check system volume settings
- Verify browser audio permissions
- Test with different browsers

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Web Speech API documentation and community
- Google Fonts for typography
- Modern web development best practices

---

**Made with ❤️ for voice-controlled web experiences**
