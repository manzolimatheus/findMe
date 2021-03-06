const pessoas = [
  {
    nome: "Brenda Sueli Manuela Pinto",
    idade: 69,
    data_nasc: "07/11/1952",
    sexo: "Feminino",
    signo: "Escorpião",
    mae: "Benedita Catarina Giovanna",
    pai: "Francisco Sérgio Vitor Pinto",
    email: "brendasuelimanuelapinto__brendasuelimanuelapinto@velc.com.br",
    cep: "69035836",
    endereco: "Beco do Igarapé II",
    numero: 125,
    bairro: "Compensa",
    cidade: "Manaus",
    estado: "AM",
    telefone_fixo: "9225293119",
    celular: "92985963960",
    altura: "1,73",
    peso: 46,
    tipo_sanguineo: "A+",
    cor: "verde",
    foto: "https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8b2xkJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    nome: "Miguel Fábio Novaes",
    idade: 27,
    data_nasc: "04/12/1994",
    sexo: "Masculino",
    signo: "Sagitário",
    mae: "Andrea Teresinha",
    pai: "Lucca Oliver Benjamin Novaes",
    email: "miguelfabionovaes-81@raioazul.com.br",
    cep: "15013040",
    endereco: "Rua Armando Sales de Oliveira",
    numero: 275,
    bairro: "Vila Ercília",
    cidade: "São José do Rio Preto",
    estado: "SP",
    telefone_fixo: "1726062914",
    celular: "17987833265",
    altura: "1,70",
    peso: 79,
    tipo_sanguineo: "A-",
    cor: "roxo",
    foto: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    nome: "Yago Lucca Moreira",
    idade: 29,
    data_nasc: "22/11/1992",
    sexo: "Masculino",
    signo: "Sagitário",
    mae: "Pietra Benedita Analu",
    pai: "Kevin Benedito Murilo Moreira",
    email: "yagoluccamoreira-71@orteca.com.br",
    cep: "89062216",
    endereco: "Rua Tunápolis",
    numero: 124,
    bairro: "Itoupava Central",
    cidade: "Blumenau",
    estado: "SC",
    telefone_fixo: "4729500442",
    celular: "47993676283",
    altura: "1,64",
    peso: 88,
    tipo_sanguineo: "A+",
    cor: "azul",
    foto: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    nome: "Enzo Márcio Nelson Cardoso",
    idade: 45,
    data_nasc: "24/07/1976",
    sexo: "Masculino",
    signo: "Leão",
    mae: "Bianca Lavínia",
    pai: "Otávio Kevin Thales Cardoso",
    email: "enzomarcionelsoncardoso_@sgstelecom.com.br",
    cep: "70274010",
    endereco: "Quadra SQS 211 Bloco A",
    numero: 948,
    bairro: "Asa Sul",
    cidade: "Brasília",
    estado: "DF",
    telefone_fixo: "6125704586",
    celular: "61997272981",
    altura: "1,97",
    peso: 58,
    tipo_sanguineo: "AB+",
    cor: "verde",
    foto: "https://images.unsplash.com/photo-1590086782957-93c06ef21604?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    nome: "Amanda Larissa Rebeca Moraes",
    idade: 34,
    data_nasc: "22/01/1987",
    sexo: "Feminino",
    signo: "Aquário",
    mae: "Jaqueline Maria Renata",
    pai: "Kaique Henrique Moraes",
    email: "amandalarissarebecamoraes-92@lnaa.com.br",
    cep: "29130528",
    endereco: "Comunidade Três Barras",
    numero: 523,
    bairro: "São Paulo Setor IV",
    cidade: "Viana",
    estado: "ES",
    telefone_fixo: "2739677213",
    celular: "27999098175",
    altura: "1,80",
    peso: 49,
    tipo_sanguineo: "B+",
    cor: "preto",
    foto: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29tYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    nome: "Ryan Davi Assunção",
    idade: 30,
    data_nasc: "12/08/1991",
    sexo: "Masculino",
    signo: "Leão",
    mae: "Caroline Marina",
    pai: "Raul Ryan Renato Assunção",
    email: "ryandaviassuncao__ryandaviassuncao@adherminer.com.br",
    cep: "37706299",
    endereco: "Rua Trinta e Seis",
    numero: 849,
    bairro: "Jardim Bandeirantes",
    cidade: "Poços de Caldas",
    estado: "MG",
    telefone_fixo: "3529152274",
    celular: "35982642872",
    altura: "1,76",
    peso: 106,
    tipo_sanguineo: "B-",
    cor: "laranja",
    foto: "https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    nome: "Mateus André Moraes",
    idade: 51,
    data_nasc: "08/05/1970",
    sexo: "Masculino",
    signo: "Touro",
    mae: "Fátima Aparecida Emilly",
    pai: "Enzo Daniel Moraes",
    email: "mmateusandremoraes@barratravel.com.br",
    cep: "48903902",
    endereco: "Praça Barão do Rio Branco 15",
    numero: 641,
    bairro: "Centro",
    cidade: "Juazeiro",
    estado: "BA",
    telefone_fixo: "7436019475",
    celular: "74992036204",
    altura: "1,92",
    peso: 92,
    tipo_sanguineo: "B-",
    cor: "roxo",
    foto: "https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    nome: "Sophia Alícia Teixeira",
    idade: 19,
    data_nasc: "22/03/2002",
    sexo: "Feminino",
    signo: "Áries",
    mae: "Sophia Vitória",
    pai: "Breno Diego Teixeira",
    email: "ssophiaaliciateixeira@charquesorocaba.com.br",
    cep: "76808350",
    endereco: "Rua Capitão Sílvio",
    numero: 253,
    bairro: "Conceição",
    cidade: "Porto Velho",
    estado: "RO",
    telefone_fixo: "6936871115",
    celular: "69991531706",
    altura: "1,68",
    peso: 78,
    tipo_sanguineo: "AB+",
    cor: "roxo",
    foto: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    nome: "Isabel Benedita Mariana da Conceição",
    idade: 30,
    data_nasc: "19/12/1991",
    sexo: "Feminino",
    signo: "Sagitário",
    mae: "Cristiane Andrea",
    pai: "Davi Isaac Marcelo da Conceição",
    email: "iisabelbeneditamarianadaconceicao@cathedranet.com.br",
    cep: "60823100",
    endereco: "Rua Cezídio Albuquerque",
    numero: 250,
    bairro: "Cidade dos Funcionários",
    cidade: "Fortaleza",
    estado: "CE",
    telefone_fixo: "8538393116",
    celular: "85995757550",
    altura: "1,61",
    peso: 89,
    tipo_sanguineo: "O-",
    cor: "laranja",
    foto: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    nome: "Teresinha Pietra Luna Farias",
    idade: 47,
    data_nasc: "27/08/1974",
    sexo: "Feminino",
    signo: "Virgem",
    mae: "Giovanna Nair Agatha",
    pai: "Yago Benjamin Murilo Farias",
    email: "teresinhapietralunafarias-86@archosolutions.com.br",
    cep: "69905145",
    endereco: "Rua Jamaica",
    numero: 131,
    bairro: "Baixada da Habitasa",
    cidade: "Rio Branco",
    estado: "AC",
    telefone_fixo: "6839436495",
    celular: "68995109966",
    altura: "1,71",
    peso: 84,
    tipo_sanguineo: "O+",
    cor: "vermelho",
    foto: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
];

function show(id) {
  event.preventDefault();
  document.getElementById("placeholder").style.display = "none";
  document.getElementById("dados").style.display = "block";
  document.getElementById("foto").style.display = "block";
  const ul = document.getElementById("lista");
  document.getElementById("add_foto").src = pessoas[id].foto;
  document.getElementById(
    "titulo"
  ).innerText = `Informações sobre ${pessoas[id].nome}`;

  document.getElementById(
    "gmap_canvas"
  ).src = `https://maps.google.com/maps?q=${pessoas[id].endereco}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
  ul.innerHTML = "";

  Object.entries(pessoas[id]).forEach((item) => {
    if (item[0] === "foto") {
      return false;
    } else {
      const li = document.createElement("li");
      const texto = `${item[0].toUpperCase()}: ${item[1]}`.replace("_", " ");
      li.appendChild(document.createTextNode(texto));
      ul.appendChild(li);
    }
  });
}
