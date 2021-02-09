const conexao = require("../model/conexao")
const execucao = require("../model/execucao")

class Querys {
    criarTabela = () => {
        const sql = `CREATE TABLE IF NOT EXISTS formulario (
            id int(4) NOT NULL AUTO_INCREMENT,
            nome VARCHAR(50) NOT NULL,
            PRIMARY KEY (id)
        )`

        execucao(sql)

        // conexao.query(sql, erro => {
        //     if(erro){
        //         console.log(erro)
        //     }else{
        //         console.log("Tabela formulario criada com sucesso.")
        //     }
        // })
    }

    selecionar = (id, res) => {
        if(id){
            const sql = `SELECT * FROM formulario WHERE id='${id}'`
            return execucao(sql)
        }
    }

    adicionar = (dados, res)  => {
        console.log(dados)
        if(dados){
            this.criarTabela()
            const sql = "INSERT INTO formulario SET ?"

            return execucao(sql, dados)
        }
    }

    remover = (id, res) => {
        const sql = "DELETE FROM formulario WHERE id = ?"

        execucao(sql, id)
            // .then(resultados => res.status(200).json(resultados))
            // .catch(erros => res.status(400).json(erros))
    }
}

module.exports = new Querys