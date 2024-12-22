const express = require('express');
const { getFilm, getFilmDetail } = require('../controllers/UserFilmController');
const { verifyToken, isUser } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/films', verifyToken, isUser, getFilm);  // Hanya User yang bisa akses
router.get('/films/:id', verifyToken, isUser, getFilmDetail);  // Hanya User

module.exports = router;
