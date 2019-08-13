const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

const Game = require('./backend/models/games');

const mongoose = require('mongoose');

const path = require('path')

// var distDir = __dirname + "/dist/";

// app.use(express.static(distDir));


mongoose.connect('mongodb+srv://brett:JWM9sg77yFsMDXeg@cluster0-nqx9x.mongodb.net/gameData?retryWrites=true&w=majority')

.then(() => {
  console.log('Connected to Sport Stakehouse database!')
})
.catch(() => {
  console.log('Connection Failed!')
})

app.use(express.static(__dirname + '/dist/sport-stakehouse-app'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/sport-stakehouse-app/index.html'));
});

app.listen(port, () => {
  console.log(`Sport Stakehouse Server Started on port ${port}`);
})

// If we don't take care of the CORS policy, the site will not let our routing be handled
// it's a security thing. What this is saying is, if the request comes from "http://localhost:4200"
// assume that it is a good route and safe for us to use.

// Read more about CORS here: https://www.codecademy.com/articles/what-is-cors

// Add headers
app.use(function (req, res, next) {

  // Website we wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'https://thawing-fortress-79986.herokuapp.com');

  // Request methods we wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers we wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if we need the website to include cookies in the requests sent
  // to the API (e.g. in case we use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.route('/api/games').get((req, res) => {
  Game.find()
    .then(games => {
      console.log(games);
      return res.status(200).json({
        message: 'Games fetched successfully',
        games: games
      });
    })
})

// This route handles single games, we can use this for a search, the : means that it's
// variable, so the route is variable, we pass the variable along to the route and use
// the variable to search for a specific game from the database that matches.
app.route('/api/:game').get((req, res) => {

})

// app.route('/api/games').post((req, res) => {
//   const postGames = new Game({
//     homeTeam: {
//       teamName: 'Iowa State',
//       totalBets: 2384,
//       schoolPrimaryColor: '#be4b63',
//       schoolSecondaryColor: '#F1BE48'
//     },
//     awayTeam: {
//       teamName: 'Han',
//       totalBets: 20,
//       schoolPrimaryColor: '#405280',
//       schoolSecondaryColor: '#000000'
//     },
//     gameTime: 'March 15, 1989',
//   })
//   console.log(postGames);
//   res.status(201).json({
//     message:'Games added successfully'
//   })
// })
