const isAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: "Access Denied! Admins only." });
    }
    next();
  };
  
  const isUser = (req, res, next) => {
    if (req.user.role !== 'user') {
      return res.status(403).json({ message: "Access Denied! Users only." });
    }
    next();
  };
  
  module.exports = {
    isAdmin,
    isUser
  };