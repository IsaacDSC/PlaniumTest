const App = require('./app/app')
const Configurations = require('./config/Configurations')
const port = Configurations.params()


App.listen(port, () => { console.log('Servidor on http://localhost:' + port) })