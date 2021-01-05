import React from "react";

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
    console.log(todasListas);
    return todasListas;
}

export async function createNewList(nomeLista) {
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
