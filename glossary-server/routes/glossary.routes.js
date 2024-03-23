const { Router } = require('express');
const glossaryController = require('../controllers/glossary.controller');

const router = Router();

// /api/glossary
router.get('/glossary', glossaryController.getGlossary);

module.exports = router;
