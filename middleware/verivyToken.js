const jwt = require('jsonwebtoken');
const JWT_SECRET = 'c1w28Zb6$3J@9NkL7vXq8YyPqD5Vt8o2U7kFhZmM9XnYpWzA7mHzg6b2!1JkAfT';  // Sama seperti secret key di authController.js

const verifyToken = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];  // Ambil token dari header Authorization
  
  if (!token) {
    return res.status(403).json({ message: "Access Denied!" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;  // Menyimpan informasi user yang sudah didecode (id dan role)
    next();  // Melanjutkan ke controller berikutnya
  } catch (error) {
    return res.status(400).json({ message: "Invalid Token!" });
  }
};

module.exports = verifyToken;