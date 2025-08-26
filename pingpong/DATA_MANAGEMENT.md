# 📊 Data Management Guide

This guide explains how to manage match data for the 1st Ziyong Cup 2025 LeaderBoard.

## 📁 File Structure

```
data/
└── matches.json    # Tournament and match data
```

## 📝 Adding New Matches

### Step 1: Edit matches.json

Open `data/matches.json` and add new match entries to the `matches` array:

```json
{
  "tournament": {
    "name": "1st Ziyong Cup 2025",
    "startDate": "2025-08-20",
    "endDate": "2025-08-25",
    "description": "The inaugural Ziyong Cup tournament featuring top ping pong players"
  },
  "matches": [
    {
      "id": 5,
      "date": "2025-08-26",
      "player1": "NewPlayer1",
      "player2": "NewPlayer2",
      "score1": 3,
      "score2": 1,
      "round": "Quarter-Final"
    }
  ]
}
```

### Step 2: Match Data Format

Each match must include these fields:

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `id` | number | Unique match identifier | `5` |
| `date` | string | Match date (YYYY-MM-DD) | `"2025-08-26"` |
| `player1` | string | First player name | `"KangYipeng"` |
| `player2` | string | Second player name | `"Tu Wenming"` |
| `score1` | number | Sets won by player1 | `3` |
| `score2` | number | Sets won by player2 | `1` |
| `round` | string | Tournament round | `"Final"` |

### 🏓 Score Format Explanation

The scores represent **sets won**, not individual game points:

- `"score1": 3, "score2": 1` means player1 won 3 sets and player2 won 1 set
- Total match was 4 sets (3+1)
- The winner is determined by who won more sets
- ELO calculation considers both the outcome and the set ratio

#### Examples:
- `2:1` = Best of 3 sets, winner won 2 sets
- `3:1` = Best of 5 sets, winner won 3 sets  
- `3:2` = Best of 5 sets, close match
- `4:0` = Best of 7 sets, dominant performance

### Step 3: Deploy Changes

After editing the JSON file:

1. Commit and push changes to GitHub
2. GitHub Pages will automatically update
3. The leaderboard will recalculate rankings

## 🏆 Tournament Rounds

Common round names used in the tournament:

- `"Regular"`
- `"Group Stage"`
- `"Round of 16"`
- `"Quarter-Final"`
- `"Semi-Final"`
- `"Final"`
- `"3rd Place Match"`

## 👥 Player Names

### Guidelines

- Use consistent spelling for player names
- Case-sensitive matching (e.g., "KangYipeng" ≠ "kangyipeng")
- Avoid special characters if possible
- Use full names or consistent nicknames

### Example Players

Current players in the tournament:
- `Kang Yipeng`
- `Tu Wenming`
- `Zhang Zhaowei`

## 📈 ELO Calculation

The system automatically calculates:
- ELO rating changes based on sets won/lost
- Win/loss records (match winners)
- Overall rankings
- Win percentages

### Enhanced ELO Features:
- **Set-based calculation**: More accurate than simple win/loss
- **Match length weighting**: Longer matches have slightly more impact
- **Performance ratio**: Considers how decisively a match was won

**Note**: ELO calculations are done in chronological order based on match dates.
## ⚠️ Important Notes

### Data Validation

The system will handle:
- Missing or malformed data gracefully
- Automatic winner determination (player with more sets wins)
- Date sorting for proper ELO calculation

### Common Mistakes to Avoid

1. **Duplicate IDs**: Each match must have a unique `id`
2. **Invalid Dates**: Use YYYY-MM-DD format
3. **Tie Sets**: Ping pong matches cannot end in tied sets
4. **Missing Fields**: All required fields must be present
5. **Zero Sets**: Both players must win at least 0 sets

### Match Examples

```json
{
  "matches": [
    {
      "id": 1,
      "date": "2025-08-20",
      "player1": "Kang Yipeng", 
      "player2": "Tu Wenming",
      "score1": 2,
      "score2": 1,
      "round": "Regular"
    },
    {
      "id": 2,
      "date": "2025-08-21",
      "player1": "Player A",
      "player2": "Player B", 
      "score1": 3,
      "score2": 2,
      "round": "Semi-Final"
    }
  ]
}
```

### Backup Strategy

Before making changes:
1. Keep a backup copy of `matches.json`
2. Test changes locally if possible
3. Verify data format using a JSON validator

## 🔧 Advanced Features

### Export Current Data

Use browser console to export current standings:

```javascript
// Get current standings
leaderboardUtils.getStandings()

// Get head-to-head record
leaderboardUtils.getH2H("Kang Yipeng", "Tu Wenming")

// Get matches by round
leaderboardUtils.getByRound("Final")

// Export all data
leaderboardUtils.export()
```

### Batch Adding Matches

For multiple matches, add them all at once to the `matches` array:

```json
{
  "matches": [
    {
      "id": 5,
      "date": "2025-08-26",
      "player1": "Player1",
      "player2": "Player2",
      "score1": 3,
      "score2": 1,
      "round": "Semi-Final"
    },
    {
      "id": 6,
      "date": "2025-08-26", 
      "player1": "Player3",
      "player2": "Player4",
      "score1": 2,
      "score2": 3,
      "round": "Semi-Final"
    }
  ]
}
```

## 📞 Troubleshooting

### Site Not Updating

1. Check if JSON syntax is valid
2. Ensure all required fields are present
3. Wait a few minutes for GitHub Pages to update
4. Clear browser cache and refresh

### ELO Ratings Look Wrong

1. Check match dates are in correct chronological order
2. Verify set scores are correct
3. Ensure player names are spelled consistently
4. Make sure no matches have tied sets

### Missing Players

1. Check player name spelling and capitalization
2. Ensure the player has at least one match recorded

---

Need help? Create an issue in the GitHub repository!
