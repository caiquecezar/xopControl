const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const models=require('./models');

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
let lista=models.Lista;
let produto=models.Produto;
let compra=models.Compra;

app.post('/createNewList', async (req,res)=>{
    let create=await lista.create({
        nomeLista: req.body.nomeLista,
        createdAt: new Date(),
        updatedAt: new Date()
    })
    res.send(create);
});

app.get('/getListas', async (req,res)=> {
    let data=await lista.findAll({ raw: true});
    res.send(data);
});

app.get('/getItens', async (req,res)=> {
    let data=await produto.findAll({
        attributes: ['id', 'nomeProduto', 'nomeMedida', 'listaId']
      });
    res.send(data);
});

app.post('/updateList', async (req,res)=>{
    let update = await lista.findByPk(req.body.id).then((response)=> {
        response.nomeLista = req.body.nome;
        response.save();
    });
    res.send(update);
});

app.post('/addItens', async (req,res) => {
    let find = await lista.findOne({
        where: { nomeLista: req.body.blista}
    });
    let id = find.id;
    for (i=0; i<req.body.bitens.length; i++) {
        let addItens = await produto.create({
            listaId: id,
            nomeProduto: req.body.bitens[i].nome,
            nomeMedida: req.body.bitens[i].medida,
            createdAt: new Date(),
            updatedAt: new Date(),
        }) 
    }
});

app.post('/updateItens', async (req,res)=>{
    for (i=0;i<req.body.produtos.length;i++) {
        let update = await produto.findByPk(req.body.produtos[i].id).then((response) => {
            if (response) {
                console.log('MODIFICANDO O REGISTRO DE ID:' + req.body.id);
                response.nomeProduto = req.body.produtos[i].nome;
                response.nomeMedida = req.body.produtos[i].medida;
                response.updatedAt = new Date();
                response.save();
            } else {
                console.log('ADICIONANDO NOVO REGISTRO');
                produto.create ({
                    listaId: req.body.idLista,
                    id: req.body.produtos[i].id,
                    nomeProduto: req.body.produtos[i].nome,
                    nomeMedida: req.body.produtos[i].medida,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                });
            }
        })
    }   
});

app.post('/deleteList', async (req,res)=>{
    lista.destroy({
        where: {id:req.body.listaId}
    });
    /*produto.destroy({
        where: {listaId:req.body.listaId}
    });*/
});

let port=process.env.PORT || 3000;
app.listen(port,(req,res) => {
   console.log("Servidor ON"); 
});

/*
app.get('/read', async (req,res)=>{
    let read=await lista.findAll({
        raw: true
    });
    console.log(read);    
});

*/

