//converter objeto para json

const objeto = { // objeto aletório para exemplo
    nome: "juan",
    idade: 15,
    sexo: "masculino",
    estudante: true
}

const jsonJuan = JSON.stringify(objeto)

console.log(jsonJuan) // arquivo.json com informações do objeto
console.log(typeof jsonJuan) // string

//converter json para objeto

const JuanNormal = JSON.parse(jsonJuan)

console.log(JuanNormal) // objeto original
console.log(typeof JuanNormal) // object



//mas como eu faço para pegar informações de um jason de outro arquivo??

const lista = document.querySelector('ul'); // estou selecionando a "ul" do index.html para eu futuramente fazer uma lista

fetch('./superHeroes.json') // estou chamando (fazendo um fetch) no arquivo superHeroes.json

    .then(res => res.json()) // eu uso esse .then para transformar o arquivo.json em um arquivo legivel para javascript (no caso um objeto) o res pode se chamar qualquer coisa é apena a resposta q o fetch da

    .then(data => {  // depois eu consigo uma variavel que eu chamei de data que contem todos arquivos do superHeroes.json e eu dou um console.log neles

        console.log(data) // mostrando no terminal (não funciona em node.js) tem que usar um live-server pois não le arquivos locais

        const herois = document.createElement('div') // aqui eu crio uma div chamada herois que contera a parte de "members" do Superheroes.json
        //vale ressaltar que a variavel data equivale a um arquivo identico ao json por isso trataremos-a como tal
        //vale ressaltar que ela poderia ter qualquer nome, isso é indiferente, (apenas semantica)
       
        herois.innerText = data.members.forEach(e => { // como o que queremos pegar é uma array podemos usar um forEach para passar por todos os arquivos dentro de uma array

            lista.insertAdjacentHTML('beforeend', `<li>nome: ${e.name}</li>`) //use sempre insertAdjacentHTML do que innerHTML pois o innerHTML vai subscrever os arquivos antigos
            //podemos usar "beforeend" para colocar itens sempre no final da lista ou "beforebegin"
            // na função acima inserimos ao final da string o nome de cada item da lista (basicamente falando)
            //basicamente são os os 3 herois que estão no Superheroes.json, mas podemos colocar mais

            lista.insertAdjacentHTML('beforeend', `<li>idade: ${e.age}</li>`)
        });
        document.body.appendChild(herois)
    })