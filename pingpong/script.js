// 1st Ziyong Cup 2025 LeaderBoard
class PingPongLeaderboard {
    constructor() {
        this.tournament = null;
        this.matches = [];
        this.players = [];
        this.init();
    }

    // Initialize the application
    async init() {
        this.setupEventListeners();
        await this.loadMatchData();
        this.calculatePlayerStats();
        this.updateAllViews();
    }

    // Setup event listeners
    setupEventListeners() {
        // Tab switching
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchTab(e.target.dataset.tab);
            });
        });

        // Filter functionality
        document.getElementById('player-filter').addEventListener('change', () => {
            this.updateMatchesView();
        });

        document.getElementById('round-filter').addEventListener('change', () => {
            this.updateMatchesView();
        });

        document.getElementById('date-filter').addEventListener('change', () => {
            this.updateMatchesView();
        });

        document.getElementById('clear-filters').addEventListener('click', () => {
            this.clearFilters();
        });

        // Pairing suggestions
        const suggestBtn = document.getElementById('suggest-pairings');
        if (suggestBtn) {
            suggestBtn.addEventListener('click', () => {
                const pairings = this.suggestFairPairings();
                this.renderPairingSuggestions(pairings);
            });
        }
    }

    // Load match data from JSON file
    async loadMatchData() {
        try {
            console.log('Attempting to load data from data/matches.json...');
            const response = await fetch('data/matches.json');
            console.log('Fetch response:', response.status, response.statusText);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            console.log('JSON data loaded successfully:', data);
            
            this.tournament = data.tournament;
            this.matches = data.matches.map(match => ({
                ...match,
                winner: match.score1 > match.score2 ? match.player1 : match.player2
            }));
            
            console.log('Matches processed:', this.matches.length, 'matches');
        } catch (error) {
            console.error('Error loading match data:', error);
            console.log('Falling back to demo data...');
            // Fallback to demo data if JSON file not found
            this.loadFallbackData();
        }
    }

    // Suggest fair random pairings based on current ELO, avoid very recent repeat
    suggestFairPairings() {
        if (!this.players || this.players.length < 2) return [];

        // Build recent opponents map from last N matches
        const recentWindow = 5;
        const recentOpponents = new Map();
        const recent = [...this.matches]
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, Math.max(0, recentWindow));
        recent.forEach(m => {
            [m.player1, m.player2].forEach(name => {
                const key = name.toLowerCase();
                if (!recentOpponents.has(key)) recentOpponents.set(key, new Set());
            });
            recentOpponents.get(m.player1.toLowerCase()).add(m.player2.toLowerCase());
            recentOpponents.get(m.player2.toLowerCase()).add(m.player1.toLowerCase());
        });

        // Sort by ELO and then create buckets to balance
        const pool = [...this.players].sort((a, b) => b.elo - a.elo);
        const unpaired = new Set(pool.map(p => p.name.toLowerCase()));
        const nameToPlayer = new Map(pool.map(p => [p.name.toLowerCase(), p]));

        const pairings = [];
        while (unpaired.size >= 2) {
            // Pick a random seed from top half to bias fairness
            const candidates = [...unpaired].map(n => nameToPlayer.get(n));
            const half = Math.ceil(candidates.length / 2);
            const seed = candidates[Math.floor(Math.random() * half)];
            unpaired.delete(seed.name.toLowerCase());

            // Find opponent minimizing ELO gap and avoiding recent opponents if possible
            let best = null;
            let bestScore = Number.POSITIVE_INFINITY;
            const avoidSet = recentOpponents.get(seed.name.toLowerCase()) || new Set();
            const remaining = [...unpaired].map(n => nameToPlayer.get(n));

            // First pass: avoid recent opponents
            remaining.forEach(op => {
                if (avoidSet.has(op.name.toLowerCase())) return;
                const gap = Math.abs(seed.elo - op.elo);
                if (gap < bestScore) { bestScore = gap; best = op; }
            });

            // Fallback: allow recent opponent if no alternative
            if (!best && remaining.length > 0) {
                remaining.forEach(op => {
                    const gap = Math.abs(seed.elo - op.elo);
                    if (gap < bestScore) { bestScore = gap; best = op; }
                });
            }

            if (best) {
                unpaired.delete(best.name.toLowerCase());
                pairings.push({
                    player1: seed.name,
                    player2: best.name,
                    elo1: Math.round(seed.elo),
                    elo2: Math.round(best.elo),
                    gap: Math.round(Math.abs(seed.elo - best.elo))
                });
            } else {
                // No opponent found (odd count), break
                break;
            }
        }

        return pairings;
    }

    renderPairingSuggestions(pairings) {
        const container = document.getElementById('pairing-suggestions');
        if (!container) return;
        if (!pairings || pairings.length === 0) {
            container.innerHTML = '<div class="pairing-item">No pairing suggestions available.</div>';
            return;
        }
        const html = [
            '<div class="suggestion-title">Suggested Pairings (balanced by ELO)</div>',
            ...pairings.map(p => `<div class="pairing-item">${p.player1} (${p.elo1}) vs ${p.player2} (${p.elo2}) — gap ${p.gap}</div>`) 
        ].join('');
        container.innerHTML = html;
    }

    // Fallback data if JSON file is not accessible
    loadFallbackData() {
        this.tournament = {
            name: "1st Ziyong Cup 2025",
            startDate: "2025-08-20",
            endDate: "2025-08-25",
            description: "The inaugural Ziyong Cup tournament featuring top ping pong players"
        };

        this.matches = [
            {
                id: 1,
                date: "2025-08-20",
                player1: "Kang Yipeng",
                player2: "Tu Wenming",
                score1: 2,
                score2: 1,
                round: "Regular",
                winner: "Kang Yipeng"
            },
            {
                id: 2,
                date: "2025-08-21",
                player1: "Kang Yipeng",
                player2: "Tu Wenming",
                score1: 2,
                score2: 1,
                round: "Regular",
                winner: "Kang Yipeng"
            },
            {
                id: 3,
                date: "2025-08-22",
                player1: "Kang Yipeng",
                player2: "Tu Wenming",
                score1: 0,
                score2: 1,
                round: "Regular",
                winner: "Tu Wenming"
            },
            {
                id: 4,
                date: "2025-08-25",
                player1: "Kang Yipeng",
                player2: "Zhang Zhaowei",
                score1: 0,
                score2: 3,
                round: "Regular",
                winner: "Zhang Zhaowei"
            }
        ];
    }

    // Tab switching
    switchTab(tabName) {
        // Update button state
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

        // Update content display
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(tabName).classList.add('active');
    }

    // ELO rating calculation (match-level with MOV and dynamic K)
    // Based on Elo with margin-of-victory scaling commonly used in sports ratings
    // Inputs: current ratings, set scores, and matches played for K scheduling
    calculateEloChange(ratingA, ratingB, setsWonA, setsWonB, matchesPlayedA, matchesPlayedB) {
        const expectedA = 1 / (1 + Math.pow(10, (ratingB - ratingA) / 400));
        const expectedB = 1 - expectedA;

        // Actual result at match level (win/draw/loss)
        let actualA = 0.5;
        if (setsWonA > setsWonB) actualA = 1;
        else if (setsWonA < setsWonB) actualA = 0;
        const actualB = 1 - actualA;

        // Margin of victory multiplier
        const margin = Math.max(0, Math.abs(setsWonA - setsWonB));
        const ratingDiff = Math.abs(ratingA - ratingB);
        const movMultiplier = Math.log(margin + 1) * (2.2 / ((ratingDiff * 0.001) + 2.2)) || 0; // 0 if margin=0

        // Dynamic K: higher for fewer matches, lower as sample grows
        const baseK = (matches) => {
            if (matches < 5) return 40;
            if (matches < 15) return 32;
            if (matches < 30) return 24;
            return 16;
        };

        const kA = baseK(matchesPlayedA);
        const kB = baseK(matchesPlayedB);

        const scaleA = 1 + movMultiplier;
        const scaleB = 1 + movMultiplier;

        const changeA = Math.round(kA * scaleA * (actualA - expectedA));
        const changeB = Math.round(kB * scaleB * (actualB - expectedB));

        return { changeA, changeB };
    }

    // Calculate player statistics
    calculatePlayerStats() {
        const playerStats = new Map();

        // Sort matches by date
        const sortedMatches = [...this.matches].sort((a, b) => new Date(a.date) - new Date(b.date));

        // Initialize all players
        sortedMatches.forEach(match => {
            [match.player1, match.player2].forEach(playerName => {
                if (!playerStats.has(playerName.toLowerCase())) {
                    playerStats.set(playerName.toLowerCase(), {
                        name: playerName,
                        elo: 1500,
                        matches: 0, // This will be total sets played
                        matchesPlayed: 0, // This will be number of matches
                        wins: 0,
                        losses: 0,
                        totalScoreFor: 0,
                        totalScoreAgainst: 0
                    });
                }
            });
        });

        // Calculate ELO changes and stats for each match
        sortedMatches.forEach(match => {
            const player1Stats = playerStats.get(match.player1.toLowerCase());
            const player2Stats = playerStats.get(match.player2.toLowerCase());

            // Update match statistics 
            const totalSetsInMatch = match.score1 + match.score2;
            player1Stats.matches += totalSetsInMatch; // Total sets played
            player2Stats.matches += totalSetsInMatch; // Total sets played
            player1Stats.matchesPlayed++; // Number of matches
            player2Stats.matchesPlayed++; // Number of matches

            // Add sets won/lost to total scores
            player1Stats.totalScoreFor += match.score1;
            player1Stats.totalScoreAgainst += match.score2;
            player2Stats.totalScoreFor += match.score2;
            player2Stats.totalScoreAgainst += match.score1;

            // Count individual game/set wins (not match wins)
            player1Stats.wins += match.score1; // Add individual games won by player1
            player1Stats.losses += match.score2; // Add individual games lost by player1
            player2Stats.wins += match.score2; // Add individual games won by player2
            player2Stats.losses += match.score1; // Add individual games lost by player2

            // Determine match winner based on sets won (for ELO calculation)
            if (match.score1 > match.score2) {
                match.winner = match.player1;
            } else {
                match.winner = match.player2;
            }

            // Calculate and update ELO based on sets won
            const { changeA, changeB } = this.calculateEloChange(
                player1Stats.elo,
                player2Stats.elo,
                match.score1,
                match.score2,
                player1Stats.matchesPlayed,
                player2Stats.matchesPlayed
            );

            // Store ELO changes in match data
            match.player1EloChange = changeA;
            match.player2EloChange = changeB;
            match.player1EloBefore = player1Stats.elo;
            match.player2EloBefore = player2Stats.elo;



            // Apply and bound ratings
            player1Stats.elo = Math.max(100, Math.min(3000, player1Stats.elo + changeA));
            player2Stats.elo = Math.max(100, Math.min(3000, player2Stats.elo + changeB));

            match.player1EloAfter = player1Stats.elo;
            match.player2EloAfter = player2Stats.elo;
        });

        // Convert to array and calculate win rates
        this.players = Array.from(playerStats.values()).map(player => {
            const totalGames = player.wins + player.losses;
            return {
                ...player,
                winRate: totalGames > 0 ? (player.wins / totalGames * 100) : 0
            };
        });
    }

    // Update all views
    updateAllViews() {
        this.updateRankingsView();
        this.updateMatchesView();
        this.updateFilters();
        this.updateStats();
    }

    // Update rankings view
    updateRankingsView() {
        const rankingsList = document.getElementById('rankings-list');
        
        if (this.players.length === 0) {
            rankingsList.innerHTML = `
                <div class="empty-state">
                    <div class="emoji">🏓</div>
                    <h3>No match records yet</h3>
                    <p>Add matches to see rankings!</p>
                </div>
            `;
            return;
        }

        // Sort by ELO rating
        const sortedPlayers = [...this.players].sort((a, b) => b.elo - a.elo);

        rankingsList.innerHTML = sortedPlayers.map((player, index) => {
            const rank = index + 1;
            let rankClass = '';
            if (rank === 1) rankClass = 'gold';
            else if (rank === 2) rankClass = 'silver';
            else if (rank === 3) rankClass = 'bronze';

            let winRateClass = '';
            if (player.winRate >= 70) winRateClass = 'high';
            else if (player.winRate >= 50) winRateClass = 'medium';
            else winRateClass = 'low';

            return `
                <div class="ranking-item">
                    <div class="rank ${rankClass}">${rank}</div>
                    <div class="player-name">${player.name}</div>
                    <div class="elo-score">${Math.round(player.elo)}</div>
                    <div class="match-count">${player.matches}</div>
                    <div class="win-rate ${winRateClass}">${player.winRate.toFixed(1)}%</div>
                </div>
            `;
        }).join('');
    }

    // Update matches view
    updateMatchesView() {
        const matchesList = document.getElementById('matches-list');
        const playerFilter = document.getElementById('player-filter').value;
        const roundFilter = document.getElementById('round-filter').value;
        const dateFilter = document.getElementById('date-filter').value;

        // Filter matches
        let filteredMatches = [...this.matches];

        if (playerFilter) {
            filteredMatches = filteredMatches.filter(match => 
                match.player1.toLowerCase().includes(playerFilter.toLowerCase()) ||
                match.player2.toLowerCase().includes(playerFilter.toLowerCase())
            );
        }

        if (roundFilter) {
            filteredMatches = filteredMatches.filter(match => 
                match.round === roundFilter
            );
        }

        if (dateFilter) {
            filteredMatches = filteredMatches.filter(match => match.date === dateFilter);
        }

        // Sort by date (most recent first)
        filteredMatches.sort((a, b) => new Date(b.date) - new Date(a.date));

        if (filteredMatches.length === 0) {
            matchesList.innerHTML = `
                <div class="empty-state">
                    <div class="emoji">🔍</div>
                    <h3>No matches found</h3>
                    <p>Try adjusting the filters</p>
                </div>
            `;
            return;
        }

        matchesList.innerHTML = filteredMatches.map(match => {
            const formattedDate = new Date(match.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            });
            
            return `
                <div class="match-item">
                    <div class="match-date">${formattedDate}</div>
                    <div class="match-players">${match.player1} vs ${match.player2}</div>
                    <div class="match-score">${match.score1}-${match.score2}</div>
                    <div class="match-round">${match.round}</div>
                    <div class="elo-change">
                        ${match.player1}: <span class="${match.player1EloChange >= 0 ? 'elo-positive' : 'elo-negative'}">${match.player1EloChange >= 0 ? '+' : ''}${match.player1EloChange}</span><br>
                        ${match.player2}: <span class="${match.player2EloChange >= 0 ? 'elo-positive' : 'elo-negative'}">${match.player2EloChange >= 0 ? '+' : ''}${match.player2EloChange}</span>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Update filter options
    updateFilters() {
        const playerFilter = document.getElementById('player-filter');
        const roundFilter = document.getElementById('round-filter');
        
        // Update player filter
        const playersOptions = ['<option value="">All Players</option>'].concat(
            this.players.map(player => `<option value="${player.name}">${player.name}</option>`)
        ).join('');
        
        playerFilter.innerHTML = playersOptions;

        // Update round filter
        const rounds = [...new Set(this.matches.map(match => match.round))];
        const roundsOptions = ['<option value="">All Rounds</option>'].concat(
            rounds.map(round => `<option value="${round}">${round}</option>`)
        ).join('');
        
        roundFilter.innerHTML = roundsOptions;
    }

    // Update statistics
    updateStats() {
        // Sum of per-player match counts (as displayed in the table)
        const totalPlayerMatches = this.players.reduce((sum, player) => sum + (player.matches || 0), 0);
        document.getElementById('total-matches').textContent = totalPlayerMatches;
        document.getElementById('total-players').textContent = this.players.length;
        
        // Add data source indicator
        const header = document.querySelector('.tournament-info p');
        if (header) {
            const originalText = this.tournament ? this.tournament.description : 'Demo data';
            header.textContent = originalText;
        }
    }

    // Clear filters
    clearFilters() {
        document.getElementById('player-filter').value = '';
        document.getElementById('round-filter').value = '';
        document.getElementById('date-filter').value = '';
        this.updateMatchesView();
    }

    // Export data
    exportData() {
        const data = {
            tournament: this.tournament,
            matches: this.matches,
            exportDate: new Date().toISOString(),
            version: '1.0'
        };
        
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `ziyong-cup-2025-leaderboard-${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
    }

    // Get tournament info
    getTournamentInfo() {
        return this.tournament;
    }

    // Get all rounds
    getRounds() {
        return [...new Set(this.matches.map(match => match.round))];
    }

    // Get matches by round
    getMatchesByRound(round) {
        return this.matches.filter(match => match.round === round);
    }

    // Get player head-to-head record
    getHeadToHead(player1, player2) {
        const h2hMatches = this.matches.filter(match => 
            (match.player1.toLowerCase() === player1.toLowerCase() && match.player2.toLowerCase() === player2.toLowerCase()) ||
            (match.player1.toLowerCase() === player2.toLowerCase() && match.player2.toLowerCase() === player1.toLowerCase())
        );

        let player1Wins = 0;
        let player2Wins = 0;

        h2hMatches.forEach(match => {
            if (match.winner.toLowerCase() === player1.toLowerCase()) {
                player1Wins++;
            } else {
                player2Wins++;
            }
        });

        return {
            matches: h2hMatches,
            player1Wins,
            player2Wins,
            totalMatches: h2hMatches.length
        };
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    window.app = new PingPongLeaderboard();
});

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
            case '1':
                e.preventDefault();
                window.app.switchTab('rankings');
                break;
            case '2':
                e.preventDefault();
                window.app.switchTab('matches');
                break;
            case 'e':
                e.preventDefault();
                window.app.exportData();
                break;
        }
    }
});

// Add some utility functions for development
window.leaderboardUtils = {
    // Get current standings
    getStandings: () => window.app.players.sort((a, b) => b.elo - a.elo),
    
    // Get tournament info
    getTournament: () => window.app.getTournamentInfo(),
    
    // Get head-to-head between two players
    getH2H: (player1, player2) => window.app.getHeadToHead(player1, player2),
    
    // Export data
    export: () => window.app.exportData(),
    
    // Get matches by round
    getByRound: (round) => window.app.getMatchesByRound(round),
    
    // Get all rounds
    getRounds: () => window.app.getRounds()
};