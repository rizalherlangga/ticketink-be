const { Admin } = require("../models");
const bcrypt = require('bcrypt');

const getAdmin = async (req, res, next) => {
  const data = await Admin.findAll();
  return res.status(200).json(data);
};

const getUAdminDetail = async (req, res, next) => {
  const data = await Admin.findOne({
    where: {
      id: req.params.id,
    },
  });

  return res.status(200).json(data);
};

const addAdmin = async (req, res, next) => {
  const { name, password, email} = req.body;

   // Hash password
   const salt = await bcrypt.genSalt(10);
   const hashedPassword = await bcrypt.hash(password, salt);


  const data = await Admin.create({
    name,
    password : hashedPassword,
    email,
    no_phone,
  });

  return res.status(200).json(data);
};

const updateAdmin = async (req, res, next) => {
  const { name, password, email} = req.body;

  const data = await Admin.findOne({
    where: {
      id: req.params.id,
    },
  });

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  data.name = name;
  data.password = hashedPassword;
  data.email = email;


  await data.save();
  return res.status(200).json(data);
};

const deleteAdmin = async (req, res, next) => {
  const data = await Admin.findOne({
    where: {
      id: req.params.id,
    },
  });

  await data.destroy();
  return res.status(200).json(data);
};

module.exports = {
  getAdmin,
  getUAdminDetail,
  addAdmin,
  updateAdmin,
  deleteAdmin,
};