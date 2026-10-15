function setup() { //funzioni dentro draw e setup vengono lette ed eseguite in ordine
  createCanvas(windowWidth, windowHeight);
  background(15, 15, 35); 
  angleMode(DEGREES); //gli angoli si leggono in gradi

  let numeroGlifi = 100;
  let numeroColonne = ceil(sqrt(numeroGlifi));
  let numeroRighe = sqrt(numeroGlifi);
  let dimColonna = windowWidth/numeroColonne;
  let dimRiga = windowHeight/numeroRighe;
 
  let xCorrente = 0;
  let yCorrente = 0;
  let colonna = 0; 
  let riga = 0;    

  for(let g=0; g<numeroGlifi; g++){
 
    //l'inclinazione dell'anello va da -60 a 60 gradi random
    let inclinazione = random(-60, 60);
 
    //colore del pianeta casuale da 4
    let colorePianeta = [color(89, 63, 98),color(221, 112, 87),color(244, 169, 113), color(107, 152, 157)];
 
    mioPianeta(xCorrente + dimColonna/2, yCorrente + dimRiga/2, random(dimRiga*0.15, dimRiga*0.7), inclinazione, random(colorePianeta));
 
    xCorrente = xCorrente + dimColonna;
    colonna = colonna + 1;
 
    if(xCorrente >= windowWidth){
      xCorrente = 0;
      yCorrente = yCorrente + dimRiga;
    }
  }
}
 
function draw() { //draw eseguito 60 volte al secondo
  //vuoto: il disegno viene fatto una volta sola nel setup
}
 
function mioPianeta (x, y, size, inclinazione, colorePianeta){
  push()
 
  translate(x, y);
 
  //colore dell'anello, casuale da 4
  let paletteAnelli = [color(173, 221, 227), color(255, 204, 147), color(255, 167, 139), color(191, 161, 200)];
  let coloreAnello = random(paletteAnelli);
  let Anello = random(1) < 0.5;
 
  //metà dietro dell'anello
  if(Anello){
    push()
    rotate(inclinazione);
    noFill();
    stroke(coloreAnello);
    strokeWeight(size/12);
    arc(0, 0, size*1.8, size*0.45, 180, 360);
    pop()
  }
 
  //pianeta
  noStroke();
  fill(colorePianeta);
  circle(0, 0, size);
 
  //metà davanti dell'anello
  if(Anello){
    push()
    rotate(inclinazione);
    noFill();
    stroke(coloreAnello);
    strokeWeight(size/12);
    arc(0, 0, size*1.8, size*0.45, 0, 180);
    pop()
  }
 
  //lune: da 0 a 3, posizioni casuali intorno al pianeta
  noStroke();
  fill(220);
  let numeroLune = random(0, 4);
 
  for(let i=0; i<numeroLune; i++){
    let miaRotazione = random(360);
    let raggioLuna = random(size/10, size/5);
    push() //salvo la posizione attuale
    rotate(miaRotazione)
    translate(size, 0);
    circle(0, 0, raggioLuna);
    pop() //rimetto la posizione salvata
  }
 
  pop() 
}
 