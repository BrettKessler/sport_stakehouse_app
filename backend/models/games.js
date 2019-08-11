const mongoose = require('mongoose');

const gameSchema = mongoose.Schema({
  homeTeam: {
    teamName: String,
    totalBets: Number,
    schoolPrimaryColor: String,
    schoolSecondaryColor: String
  },
  awayTeam: {
    teamName: String,
    totalBets: Number,
    schoolPrimaryColor: String,
    schoolSecondaryColor: String
  },
  gameTime: String,
});

module.exports = mongoose.model('Game', gameSchema);
