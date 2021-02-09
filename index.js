const config = require("./controller/config")

const app = config()
app.listen(3000, () => {console.log("Servidor rodando na porta 3000.")})