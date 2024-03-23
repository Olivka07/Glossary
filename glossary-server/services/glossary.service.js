const path = require('node:path');
const fs = require('node:fs');

class GlossarySerice {
    glossaryPath = path.resolve(__dirname, '..', 'data', 'glossary.json');

    async getGlossary() {
        try {
            const glossary = JSON.parse(fs.readFileSync(this.glossaryPath));
            return glossary;
        } catch (e) {
            throw e;
        }
    }
}

module.exports = new GlossarySerice();
