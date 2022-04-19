window.onload = start;

function kategorie ()
{
    losowanie();
    start();

}

let kraje = new Array(5);
kraje[0]="Polska";
kraje[1]="italia";
kraje[2]="niemcy";
kraje[3]="holandia";
kraje[4]="irlandia";

function losowanie()
{
    let numer=Math.floor(Math.random()*kraje.length);
    return kraje[numer];
}

let haslo = losowanie();
let haslo1 = "";
let dlugosc = haslo.length;
let ile_skuch = 0;
let yes = new Audio("yes.wav");
let no = new Audio("no.wav");
haslo = haslo.toUpperCase();

for(i=0;i<dlugosc;i++)
{
    if(haslo.charAt(i)==" ") haslo1+= " ";
    else haslo1 += "-";
}
 
function wypiszhaslo()
{
    document.getElementById("plansza").innerHTML= haslo1;
}

let litery = new Array(35);
 
litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";
 
function start()
{
    let tresc_diva = "";
     
    for(i=0; i<=34;i++)
    {
        let element = "lit"+i;
        tresc_diva += '<div class="litera" onclick="sprawdz('+ i +')"  id="' + element + '">' + litery[i] + '</div>';
        if((i+1) % 7 ==0) tresc_diva=tresc_diva+'<div style="clear:both;"></div>';
    }
     
    document.getElementById("alfabet").innerHTML = tresc_diva;
    wypiszhaslo();
}
 
String.prototype.ustawZnak = function (miejsce,znak)
{
    if(miejsce>this.length-1) return this.toString();
    else return this.substring(0,miejsce)+znak+this.substring(miejsce+1);
}
 
function sprawdz(nr)
{
    let trafiona = false;
     
    for(i=0;i<dlugosc;i++)
    {
        if(haslo.charAt(i)== litery[nr])
        {
            haslo1 = haslo1.ustawZnak(i,litery[nr]);
            trafiona=true;
        }
    }
    if(trafiona==true)
    {
        yes.play();
        let element = "lit"+nr;
        document.getElementById(element).style.background = "#003300";
        document.getElementById(element).style.color = "#00C000";
        document.getElementById(element).style.border = "3px solid #00C000";
        document.getElementById(element).style.cursor = "default";
        wypiszhaslo();
    }
    else
    {
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
  if(haslo==haslo1)document.getElementById("alfabet").innerHTML = 'Tak jest! Podano prawidłowe hasło: '+haslo+'<br/><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';

   
  //przegrana
  if(ile_skuch>=9)document.getElementById("alfabet").innerHTML = 'Przegrana! Prawidłowe hasło to: '+haslo+'<br/><br/><span class="reset" onclick="wybieszKategorie()">JESZCZE RAZ?</span>';
}
let tresc_diva_kategorie = "";

function wybieszKategorie ()
{
tresc_diva_kategorie += '<div id="alfabet">Wybierz kategorie hasła</div><br><br><span class="kategorie" onclick="kategorie()">"Państwa"</span><br/><span class="kategorie" >"Historia"</span> </br><span class="kategorie" >"Technologie"</span></br><span class="kategorie" >"Nauka"</span></br><span class="kategorie" >"Przysłowia"</span>'
document.getElementById("alfabet").innerHTML = tresc_diva_kategorie;
}   
