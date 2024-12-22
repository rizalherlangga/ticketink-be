const { MoviesUser } = require("../models");

const getFilm = async (req, res, next) => {
  const data = await MoviesUser.findAll();
  return res.status(200).json(data);
};

const getFilmDetail = async (req, res, next) => {
  const data = await MoviesUser.findOne({
    where: {
      id: req.params.id,
    },
  });

  return res.status(200).json(data);
};


module.exports = {
  getFilm,
  getFilmDetail,

};