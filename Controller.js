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

/*
app.get('/create', async (req,res)=>{
    let create=await lista.create({
        nomeLista: 'Frutas',
        createdAt: new Date(),
        updatedAt: new Date(),
    })
    res.send('Lista criada!');
});
app.get('/read', async (req,res)=>{
    let read=await lista.findAll({
        raw: true
    });
    console.log(read);    
});
app.get('/update', async (req,res)=>{
    let update=await lista.findByPk(3).then((response)=> {
        response.nomeLista="Lista de Frutas";
        response.save();
    });
});
app.get('/delete', async (req,res)=>{
    lista.destroy({
        where: {id:3}
    });
});
*/

let port=process.env.PORT || 3000;
app.listen(port,(req,res) => {
   console.log("Servidor ON"); 
});