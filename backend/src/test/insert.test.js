const fs = require('fs');
const Configurations = require('../config/Configurations')

let DATA = { nome: 'IsaacDSC', idade: 19, codigo: 1, minimo_vidas: 1, value: 80 }

const readFile = () => {
    const content = fs.readFileSync(Configurations.params().folder_propotas, 'utf-8')
    return JSON.parse(content)
}

const write = async(Content) => {
    const ContentData = readFile()
    ContentData.push(Content)
    fs.writeFileSync(Configurations.params().folder_propotas, JSON.stringify(ContentData), 'utf-8')
}


async function run(Content) {
    write(Content)
}


run(DATA)