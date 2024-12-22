const { MoviesAdmin } = require("../models");

const getFilm = async (req, res, next) => {
  const data = await MoviesAdmin.findAll();
  return res.status(200).json(data);
};

const getFilmDetail = async (req, res, next) => {
  const data = await MoviesAdmin.findOne({
    where: {
      id: req.params.id,
    },
  });

  return res.status(200).json(data);
};

const addFilm = async (req, res, next) => {
  const {film, sinopsis, genre, director, writter, ph, duration, release_date, rating, poster_url, trailer_url} = req.body;


  const data = await MoviesAdmin.create({
    film,
    sinopsis,
    genre,
    director,
    writter,
    ph,
    duration,
    release_date,
    rating,
    poster_url, 
    trailer_url
  });

  return res.status(200).json(data);
};

const updateFilm = async (req, res, next) => {
  const { name, password, email} = req.body;

  const data = await MoviesAdmin.findOne({
    where: {
      id: req.params.id,
    },
  });

  data.name = name;
  data.password = hashedPassword;
  data.email = email;
  data.film  = film;
  data.sinopsis = sinopsis,
  data.genre = genre,
  data.director = director,
  data.writter = writter
  data.ph = ph,
  data.duration = duration,
  data.release_date = release_date,
  data.rating = rating,
  data.poster_url = poster_url, 
  data.trailer_url = trailer_url


  await data.save();
  return res.status(200).json(data);
};

const deleteFilm = async (req, res, next) => {
  const data = await MoviesAdmin.findOne({
    where: {
      id: req.params.id,
    },
  });

  await data.destroy();
  return res.status(200).json(data);
};

module.exports = {
  getFilm,
  getFilmDetail,
  addFilm,
  updateFilm,
  deleteFilm,
};