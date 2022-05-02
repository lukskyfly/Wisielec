window.onload = start;

let historia = ['bitwa pod grunwaldem','porop szwedzki', 'zamek królewski','średniowiecze', 'starożytny egipt' ];
let kraje = ['polska','italia', 'niemcy', 'holandia', 'irlandia'];

function losowanie_panstwa(){

    let numer=Math.floor(Math.random()*kraje.length);
    return kraje[numer];
}
/*nie wiem jak sprawdzić który onclick jest wybrany aby móc przypisać fucnkcje do let haslo,Czy lepiej jest tu urzyć switcha?
function losowanie_historii(){  
    let numer=Math.floor(Math.random()*historia.length);
    return historia[numer];
}*/
let haslo = losowanie_panstwa();
let haslo1 = "";
let dlugosc = haslo.length;
let ile_skuch = 0;
let yes = new Audio("yes.wav");
let no = new Audio("no.wav");
haslo = haslo.toUpperCase();

for(i=0;i<dlugosc;i++){

    if(haslo.charAt(i)==" ") haslo1+= " ";
    else haslo1 += "-";
}
 
function wypiszhaslo(){

    document.getElementById("plansza").innerHTML= haslo1;
}

let litery = ['A', 'Ą', 'B', 'C', 'Ć', 'D', 'E', 'Ę', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'Ł', 'M', 'N', 'Ń', 'O', 'Ó', 'P', 'Q', 'R', 'S', 'Ś', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Ż', 'Ź'];
  
function start(){

    let tresc_diva = "";
     
    for(i=0; i<=34;i++){

        let element = "lit" + i;
        tresc_diva += `<div class=litera onclick=sprawdz(${i}) id=${element}>${litery[i]}</div>`;
        if((i+1) % 7 == 0) tresc_diva+='<div style="clear:both;"></div>';
    }
     
    document.getElementById("alfabet").innerHTML = tresc_diva;
    wypiszhaslo();
}
 
 String.prototype.ustawZnak = function (miejsce,znak){

    if(miejsce>this.length-1){
        return this.toString()
    }
    else{
        return this.substring(0,miejsce)+znak+this.substring(miejsce+1)
    };
}
 
function sprawdz(nr){

    let trafiona = false;
     
    for(i=0;i<dlugosc;i++)
    {
        if(haslo.charAt(i)== litery[nr]){
            haslo1 = haslo1.ustawZnak(i,litery[nr]);
            trafiona=true;
        }
    }
    if(trafiona==true){
        yes.play();
        let element = "lit"+nr;
        document.getElementById(element).style.background = "#003300";
        document.getElementById(element).style.color = "#00C000";
        document.getElementById(element).style.border = "3px solid #00C000";
        document.getElementById(element).style.cursor = "default";
        wypiszhaslo();
    }
    else{
        no.play();
        let element = "lit"+nr;
        document.getElementById(element).style.background = "#330000";
        document.getElementById(element).style.color = "#C00000";
        document.getElementById(element).style.border = "3px solid #C00000";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick",";");
        wypiszhaslo();
         
        //skucha
        ile_skuch++;
        document.getElementById("szubienica").innerHTML = '<img src="img/s'+ile_skuch+'.jpg"/>';
    }
   
  //wygrana
  if(haslo==haslo1){
    document.getElementById("alfabet").innerHTML = `Tak jest! Podano prawidłowe hasło: ${haslo}<br/><br/><span class="reset" onclick="wybieszKategorie()"">JESZCZE RAZ?</span>`;
    }
   
  //przegrana
  if(ile_skuch>=9){
    document.getElementById("alfabet").innerHTML = `Przegrana! Prawidłowe hasło to: ${haslo}<br/><br/><span class="reset" onclick="wybieszKategorie()">JESZCZE RAZ?</span>`;
    }
}
let tresc_diva_kategorie = "";

function wybieszKategorie (){
tresc_diva_kategorie += '<div id="alfabet">Wybierz kategorie hasła</div><br><br><span class="kategorie" onclick="location.reload()">"Państwa"</span><br/><span class="kategorie" onclick="losowanie_historii()" >"Historia"</span> </br><span class="kategorie" >"Technologie"</span></br><span class="kategorie" >"Nauka"</span></br><span class="kategorie" >"Przysłowia"</span>'
document.getElementById("alfabet").innerHTML = tresc_diva_kategorie;
}   