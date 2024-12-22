const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { Admin, User } = require("../models");

const JWT_SECRET = 'c1w28Zb6$3J@9NkL7vXq8YyPqD5Vt8o2U7kFhZmM9XnYpWzA7mHzg6b2!1JkAfT';  // Gantilah dengan secret key yang aman

// Fungsi login untuk Admin atau User
const login = async (req, res, next) => {
  const { email, password } = req.body;
  
  let user = await Admin.findOne({ where: { email } }) || await User.findOne({ where: { email } });
  
  if (!user) {
    return res.status(400).json({ message: "User not found!" });
  }
  
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({ message: "Invalid credentials!" });
  }

  // Generate JWT token
  const token = jwt.sign(
    { id: user.id, role: user.role },  // Menyertakan id dan role di dalam token
    JWT_SECRET,
    { expiresIn: '1h' }  // Set token expired time sesuai kebutuhan
  );

  return res.status(200).json({ token });
};

// Fungsi logout
const logout = (req, res) => {
  // JWT tidak perlu dihapus karena hanya disimpan di client-side.
  // Biasanya kita hanya memberikan instruksi pada client untuk menghapus token.
  return res.status(200).json({ message: "Logout successful!" });
};

module.exports = {
  login,
  logout
};