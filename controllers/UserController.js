const { User } = require("../models");

const getUser = async (req, res, next) => {
  const data = await User.findAll();
  return res.status(200).json(data);
};

const getUserDetail = async (req, res, next) => {
  const data = await User.findOne({
    where: {
      id: req.params.id,
    },
  });

  return res.status(200).json(data);
};

const addUser = async (req, res, next) => {
  const { name, password, email, no_phone} = req.body;
  const data = await User.create({
    name,
    password,
    email,
    no_phone,
  });

  return res.status(200).json(data);
};

const updateUser = async (req, res, next) => {
  const { name, password, email, no_phone} = req.body;

  const data = await User.findOne({
    where: {
      id: req.params.id,
    },
  });

  data.name = name;
  data.password = password;
  data.email = email;
  data.no_phone = no_phone;

  await data.save();
  return res.status(200).json(data);
};

const deleteUser = async (req, res, next) => {
  const data = await User.findOne({
    where: {
      id: req.params.id,
    },
  });

  await data.destroy();
  return res.status(200).json(data);
};

module.exports = {
  getUser,
  getUserDetail,
  addUser,
  updateUser,
  deleteUser,
};