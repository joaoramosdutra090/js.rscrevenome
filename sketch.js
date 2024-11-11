// fantasia, drama, terror, romance, aventura, sombrio, ação, comédia

// a viagem de chihiro, LIVRE, fantasia, aventura
// kimetsu no yaiba, 16, fantasia, sombrio
// Scott Pilgrim contra o mundo, 12, romance, comédia

// shingeki no kyojin, 18, ação, fantasia
// bleach, 10, fantasia
// naruto, 14, aventura, fantasia, comédia
// pokemón, 12, aventura, fantasia

let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h1", "Recomendador de Animes");
  createSpan("sua idade:");
  campoIdade = createInput("15");
  campoFantasia = createCheckbox("Gosta de fantasia ?");
  campoAventura = createCheckbox("Gosta de aventura ?");
}

function draw() {
  background(220);
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);
  fill(color(100, 50, 200))
  textAlign(CENTER, CENTER);
  textSize(46);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if(idade >= 10) {
      if(idade >= 14) {
        return "shingeki no kyojin";
    } else {
        if(idade >= 12) {
          if(gostaDeFantasia || gostaDeAventura) {
          return "my hero academia";
           } else {
          return "Scott Pilgrim contra o mundo";
         }
        if(gostaDeFantasia) {
            return "naruto";
      } else {
       }    return "bleach";
      }
     }
  } else {
      if(gostaDeFantasia){
          return "a viagem de chihiro"
    } else {
          return "pokemón";
     }
  } 
} 





