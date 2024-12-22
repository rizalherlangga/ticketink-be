const express = require('express');
const { getFilm, getFilmDetail, addFilm, updateFilm, deleteFilm } = require('../controllers/AdminFilmController');
const { verifyToken, isAdmin } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/films', verifyToken, isAdmin, getFilm);  // Hanya Admin yang bisa akses
router.get('/films/:id', verifyToken, isAdmin, getFilmDetail);  // Hanya Admin
router.post('/films', verifyToken, isAdmin, addFilm);  // Hanya Admin
router.put('/films/:id', verifyToken, isAdmin, updateFilm);  // Hanya Admin
router.delete('/films/:id', verifyToken, isAdmin, deleteFilm);  // Hanya Admin

module.exports = router;
