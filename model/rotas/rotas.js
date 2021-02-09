const app = require("../../controller/config")
const Querys = require('../querys')
const express = require('express')
const fs = require("fs")

module.exports = (app) => {
    //Serve para mostrar o caminho da visualização principal
    let caminho_principal = __dirname.replace('\\model\\rotas', '\\view')
    app.use(express.static(caminho_principal +'html'));

    app.get('/', function (req, res){
        let caminho = __dirname.replace('\\model\\rotas', '\\view\\index.html')
        res.sendFile(caminho)
    })

    app.get('/inscricao', function (req, res){
        let caminho = __dirname.replace('\\model\\rotas', '\\view\\inscricao.html')
        res.sendFile(caminho)
    })

    app.get('/detalhamento/:id', function (req, res){
        let caminho = __dirname.replace('\\model\\rotas', '\\view\\detalhamento.html')
        res.sendFile(caminho)

        const id = parseInt(req.params.id)

        Querys.selecionar(id, res)
            .then(resultados => {
                res.status(200)
                console.log(resultados)
            })
            .catch(erros => res.status(400).json(erros))
    })

    app.post('/formulario', (req, res) => {
        Querys.adicionar(req.body, res)
            .then(resultados => {
                res.status(200)
                console.log(resultados.insertId)
                res.redirect(`/detalhamento/${resultados.insertId}`)
            })
            .catch(erros => res.status(400).json(erros))
    })

    app.delete('/formulario/:id', (req, res) => {
        Querys.remover(parseInt(req.params.id), res)
    })
}