const Sequelize = require('sequelize');
const connection = new Sequelize('db', 'root', '');

let Saved_movie = connection.define(saved_movie, {
  title: sequelize.STRING,
  year: sequelize.STRING,
  genre: sequelize.STRING,
  poster: sequelize.STRING,
  actors: sequelize.STRING,
  plot: sequelize.STRING
}, {
  timestamps: false
})

Saved_movie.sync();

module.exports.Saved_movie = Saved_movie;
