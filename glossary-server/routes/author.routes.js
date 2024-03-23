const { Router } = require('express');

const router = Router();

// /api/author
router.get('/author', async (req, res) => {
    try {
        res.status(200).json({
            author: 'Александр Сергеевич Пирюшов <uchenik.ikt@yandex.ru>'
        });
    } catch (e) {
        res.status(400).json({ message: `Some error ${e}` });
    }
});

module.exports = router;
