const conexao = require("../model/conexao")

execucao = (sql, dados) => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, {...dados}, (erros, resultados, campos) => {
            if(erros){
                reject(erros)
            }else{
                resolve(resultados)
            }
        })
    })
}

module.exports = execucao