# 🏓 1st Ziyong Cup 2025 LeaderBoard

A static leaderboard website for the inaugural Ziyong Cup ping pong tournament, featuring ELO rating system and hosted on GitHub Pages.

## ✨ Features

- **ELO Rating System**: Dynamic player rating calculation reflecting true skill levels
- **Real-time Rankings**: Automatic ranking updates based on ELO ratings
- **Match History**: Detailed records of all matches with dates, players, scores, and ELO changes
- **Data Filtering**: Filter matches by player, round, and date
- **Responsive Design**: Perfect for both desktop and mobile devices
- **Static Data**: Match data managed through JSON files
- **Modern UI**: Beautiful, modern interface with smooth user experience

## 🚀 Live Demo

Visit [GitHub Pages Link](https://your-username.github.io/Project05-PingPong) to view the leaderboard

## 📱 Usage

### View Rankings
- Default view shows current ELO rankings
- Displays player ratings, match counts, and win rates
- Top 3 players have special badges (gold, silver, bronze)

### Match History
- Click "Match History" tab to view all matches
- Filter by player name, round, or date
- View ELO rating changes for each match

### Data Management
- All match data is stored in `data/matches.json`
- Update the JSON file to add new matches
- The leaderboard automatically recalculates rankings

## 🎯 ELO Rating System

The ELO rating system calculates relative skill levels between players:

- **Initial Rating**: New players start with 1500 points
- **Rating Changes**: Dynamically adjusted based on match results and opponent strength
- **K-Factor**: Uses 32 as K-factor to balance rating change magnitude
- **Score Impact**: Considers not just win/loss but actual score differences

### Calculation Formula

```
Expected Score = 1 / (1 + 10^((Opponent Rating - Player Rating) / 400))
Actual Score = Sets Won / Total Sets Played
Rating Change = K-Factor × Match Length Multiplier × (Actual Score - Expected Score)
```

### Set-Based Scoring

This leaderboard uses **set-based scoring** where:
- Scores represent sets won, not individual game points
- Example: `3-1` means the winner won 3 sets and opponent won 1 set (4 total sets)
- ELO changes are calculated based on the ratio of sets won
- Longer matches (more total sets) have slightly more impact on ratings

## 💾 Data Management

### Adding New Matches

To add new matches, edit the `data/matches.json` file:

```json
{
  "tournament": {
    "name": "1st Ziyong Cup 2025",
    "startDate": "2025-08-20", 
    "endDate": "2025-08-25",
    "description": "The inaugural Ziyong Cup tournament"
  },
  "matches": [
    {
      "id": 5,
      "date": "2025-08-26",
      "player1": "PlayerName1",
      "player2": "PlayerName2", 
      "score1": 3,
      "score2": 1,
      "round": "Semi-Final"
    }
  ]
}
```

**Note**: `score1: 3, score2: 1` means PlayerName1 won 3 sets and PlayerName2 won 1 set (total 4 sets played).

### File Structure

- `data/matches.json` - Tournament and match data
- `index.html` - Main page structure
- `styles.css` - Styling and themes
- `script.js` - Application logic and ELO calculations

## 🛠️ Deploy to GitHub Pages

1. Fork or Clone this repository
2. Go to repository Settings
3. Scroll to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"
7. Your site will be available at `https://your-username.github.io/Project05-PingPong`

## 🎨 Customization

Easy customization options:

- Edit `styles.css` for appearance and theme colors
- Modify `script.js` for ELO algorithm parameters or new features
- Update `index.html` for page structure changes
- Edit `data/matches.json` for tournament data

## 📊 Tournament Data

The site includes sample data from the 1st Ziyong Cup 2025:
- Multiple matches between Kang Yipeng vs Tu Wenming
- Regular match: Kang Yipeng vs Zhang Zhaowei
- Demonstrates various match results and ELO changes

## 🔧 Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Styling**: Modern CSS Grid/Flexbox layout with gradients and animations
- **Fonts**: Inter font family for elegant modern typography
- **Data**: JSON file-based data management
- **Deployment**: GitHub Pages

## 📝 Changelog

### v2.0.0 (2025-01-20)
- 🏆 Tournament-specific leaderboard (1st Ziyong Cup 2025)
- 📂 JSON file-based data management
- 🌍 English interface
- 🏓 Enhanced match history with rounds
- 🎯 Static data approach for easy maintenance

### v1.0.0 (2025-01-20)
- ✨ Initial release
- 🏓 ELO rating system implementation
- 📱 Responsive design
- 💾 Local data storage
- 🎨 Modern UI interface

## 🤝 Contributing

Welcome to submit Issues and Pull Requests to improve this project!

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details

---

Enjoy your ping pong tournament! 🏓
