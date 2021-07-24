const fs = require('fs');
const Configurations = require('../config/Configurations')

class ReadWrite {
    async read(PathDatabase) {
        try {
            let GetDatas = await fs.readFileSync(PathDatabase, "utf8")
            return GetDatas
        } catch (error) {
            return error
        }
    }
    async write(Content, Database) {
        try {
            if (Database != 'propostas') {
                return 'Você não tem permissão para escrever em outro arquivo'
            } else {
                const ContentData = readFile(Database)
                ContentData.push(Content)
                fs.writeFileSync(Configurations.params().folder_propotas, JSON.stringify(ContentData), 'utf-8')
                return true
            }
        } catch (error) {
            return error
        }

    }
}

module.exports = new ReadWrite