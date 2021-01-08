import React from "react";

export async function LoadCompras(id) {
    let todosValores = [];
    let response = await fetch('http://10.0.2.2:3000/getCompras', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            id: id
        })
    });
    let jsonLista = await response.json();
    for (i=0; i<jsonLista.length;i++) {
        todosValores.push({id: jsonLista[i].id, produtoId: jsonLista[i].produtoId, preco: jsonLista[i].precoProduto});
    }
    console.log("BackEnd.LoadCompras");
    return todosValores;
}

export async function BuyItens(listaId, produtos, valores){
    let response=await fetch('http://10.0.2.2:3000/buyItens', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            listaId: listaId,  
            produtos:produtos, 
            valores:valores
        })
    });
    let json=await response.json();
    console.log(json);    
}

export async function DeleteList(id) {
    let response = await fetch('http://10.0.2.2:3000/deleteList', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ listaId: id })
    });
    let json=await response.json();
    console.log(json);
}

export async function LoadListas() {
    let todasListas = [];
    let response = await fetch('http://10.0.2.2:3000/getListas');
    let jsonLista = await response.json();
    for (i=0; i<jsonLista.length;i++) {
      todasListas.push({id: jsonLista[i].id, nome: jsonLista[i].nomeLista, produtos: []});
    }
    response = await fetch('http://10.0.2.2:3000/getItens');
    let jsonItens = await response.json(); 
    for (i=0; i<jsonItens.length;i++) {
      for (j=0; j<todasListas.length; j++) {
        if(todasListas[j].id === jsonItens[i].listaId) {
          todasListas[j].produtos.push({id: jsonItens[i].id, nome: jsonItens[i].nomeProduto, medida: jsonItens[i].nomeMedida})
        }
      }
    }
    console.log("BackEnd.LoadListas");
    return todasListas;
}

export async function CreateNewList(nomeLista) {
    let response=await fetch('http://10.0.2.2:3000/createNewList', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nomeLista: nomeLista })
    });
    let json=await response.json();
    console.log(json);
};

export async function AddNewItens(itens, lista) {
    console.log(itens.length);
    console.log(lista)
    let response = await fetch ('http://10.0.2.2:3000/addItens', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            blista: lista,
            bitens: itens
        })
    });
    //let json=await response.json();
    //console.log(json); 
}

export async function UpdateList(editable) {
    let response=await fetch('http://10.0.2.2:3000/updateList', 
        {
            method: 'POST',
            headers: {
            Accept: 'application/json', 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            id: editable.id,
            nome: editable.nome,
        })
    });
    //let json=await response.json();
    //console.log(json);
    //console.log(editable.produtos.length);
    response = await fetch('http://10.0.2.2:3000/updateItens', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            idLista: editable.id,
            produtos: editable.produtos
        })
    });
    //let json=await response.json();
    //console.log(json);
};