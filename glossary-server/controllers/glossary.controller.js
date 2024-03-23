const glossaryService = require('../services/glossary.service');

class GlossaryController {
    async getGlossary(req, res) {
        try {
            const glossary = await glossaryService.getGlossary();
            res.status(200).json({ data: glossary });
        } catch (e) {
            res.status(400).json({
                message: `Что-то пошло не так при получении глоссария`
            });
        }
    }
}

module.exports = new GlossaryController();
