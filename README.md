# Dino Runner Game

A simple browser-based game inspired by Chrome's T-Rex Runner. Jump over cacti to score points!

## 🎮 Game Features

- Simple one-button gameplay (Spacebar to jump)
- Score tracking
- Local high score system
- Start menu with scoreboard
- Progressively challenging gameplay

## 🚀 Quick Start

### Prerequisites

You need either Python or Node.js installed on your system:
- [Python](https://www.python.org/downloads/) (Version 3.x recommended)
- [Node.js](https://nodejs.org/) (Optional alternative)

### Installation

1. Clone or download this repository: 
2. No additional dependencies needed!

### Running the Game

#### Windows Users:
- Double-click `start-game.bat`
- Or run in terminal:
```

#### Mac/Linux Users:
```
chmod +x start-game.sh
./start-game.sh
```

3. Open your browser and go to:
```
http://localhost:8000
```

## 🎯 How to Play

1. Click the "Start Game" button on the main menu
2. Press SPACEBAR to make the dinosaur jump
3. Avoid the incoming cacti
4. Try to achieve the highest score possible
5. Your high scores are automatically saved

## 📁 Project Structure

```
dino_runner/
├── index.html          # Main game HTML
├── style.css           # Game styles
├── script.js           # Game logic
├── start-game.bat      # Windows startup script
├── start-game.sh       # Unix startup script
└── README.md          # This file
```

## 🛠️ Technical Details

- Pure JavaScript (no frameworks)
- CSS animations for smooth movement
- LocalStorage for high score persistence
- Responsive design

## 🔍 Troubleshooting

### Common Issues:

1. **Server won't start**
   - Ensure Python or Node.js is installed
   - Check if port 8000 is available
   - Try running as administrator

2. **Game doesn't load**
   - Verify all files are in the same directory
   - Check browser console for errors
   - Try a different browser

3. **High scores not saving**
   - Enable cookies/localStorage in your browser
   - Try clearing browser cache

## 🤝 Contributing

Feel free to fork this project and submit pull requests with improvements!

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by Chrome's T-Rex Runner game
- Built with vanilla JavaScript, HTML, and CSS