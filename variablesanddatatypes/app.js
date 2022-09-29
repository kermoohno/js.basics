//Ül1.1
//console.log("Tere, maailm!");

//Yl1.2
//const aasta = 2022;
//const president = "Alari Karis";
//const lausekeskosa =" . aastal valiti Eesti presidendiks";
//console.log(`${aasta}${lausekeskosa} ${president}`);

//YL1.3

//var astmeAlus = prompt("Sisesta astme alus: ");
//var aste = prompt("Sisesta aste: ");
//var tulemus = astmeAlus**aste;
//console.log(tulemus);

//Yl1.4

//var nimi = prompt("Mis on sinu nimi?");
// var lubatudkiirus = prompt("Mis oli lubatud kiirus?");
//var tegelikkiirus = prompt("Kui kiiresti sa tegelikult sõitsid?");

    //var trahv = (tegelikkiirus-lubatudkiirus)*3;

    //console.log(`${nimi} kiiruse ületamise eest on teie trahv ${Math.min(190, trahv)} eurot.`);

//Yl1.5

    /*
    var ainepunktidearv = prompt("Sisesta ainepunktide arv: ");

    var tegelikarv = ainepunktidearv*26;

    var nadalatearv = prompt("Sisesta nädalate arv: ");

    var ajakulu = tegelikarv/nadalatearv;

    console.log(`Ühe nädala eeldatav ajakulu on ${Math.round(ajakulu)} h`);
    */
//Yl1.6

/*let inimesed = prompt("Sisesta reisiate arv");

let kohtiBussides = prompt("Mitme kohalist bussi soovite");

let bussidtaidetud = Math.floor(inimesed / kohtiBussides);

let mahajaanud = inimesed % kohtiBussides;

console.log(`Inimeste sõidutamiseks läheb vaja ${bussidtaidetud} bussi ja ${mahajaanud} inimest jäi maha`);

*/

//Yl 2.1

/*let ohutemperatuur = prompt("Sisesta õhutemperatuur");

if (ohutemperatuur > 4)
{
    console.log("Ei ole jäätumis ohtu");
} else if (ohutemperatuur <= 4){
    console.log("On jäätumis oht");
}
*/

//Yl 2.3

/*let vanus = Number(prompt("Sisesta enda vanus"));
let sugu = prompt("Sisesta enda sugu(N, n, M, m)");
let treening = Number(prompt("Sisesta treeningutüüp 1 - tervisetreening, 2 - põhivastupidavuse treening, 3 - intensiivne aeroobne treening"));
let pulsisagedus;
if(sugu == 'n' || sugu == 'N'){
    pulsisagedus = 206 - 0.88 * vanus
} else if(sugu == 'm' || sugu == 'M'){
    pulsisagedus = 220 - vanus

}
let min;
let max;
if(treening == 1){
    min = 0.5 * pulsisagedus
    max = 0.7 * pulsisagedus
} else if(treening == 2){
    min = 0.7 * pulsisagedus
    max = 0.8 * pulsisagedus
} else if(treening == 3){
    min = 0.8 * pulsisagedus
    max = 0.87 * pulsisagedus
}
console.log(`Pulsisagedus peab olema vahemikus ${Math.round(min)} kuni ${max}`)
*/

//Yl 2.4
/*let valik = prompt(`Kas soovite istekohta ise valida "ise" või loosida "loos"`);
let koht;

if(valik == `ise`){
    let kohavalik = prompt(`Kas soovite istuda akna ääres "aken" või mujal "muu"`)
    console.log(`Valisite ise`)
    if(kohavalik == `aken`){
        koht = `Aknakoht`
    } else if(kohavalik == `muu`){
        koht = `Vahekäigukoht`
    }
} else if(valik == `loos`){
    console.log(`Istekoht loostiti`)
    let juhuarv = Math.ceil(Math.random() * 3)
    if(juhuarv == 1){
        koht = `Aknakoht`
    } else {
        koht = `Vahekäigukoht`
    }

}
console.log(`${koht}`)

 */

//Yl 2.5
/*let teema = prompt(`Kirja teema:`);
let fail = prompt(`Kas kirjaga on kaasas fail? "jah" "ei"`);
let suurus = prompt(`Kui suur on kiri mbs`);
let test = teema;
let spamm;

if(test == teema  && fail == "jah" && suurus < 1){
    console.log(`Ei ole spämm`)
} else if(teema == "" && fail == "jah" && suurus >1 ) {
    console.log(`On spämm`)
} else if(teema == "" && fail == "ei" && suurus > 1){
    console.log(`On spämm`)
}
*/

//Yl 3.1

/*let kordamise_arv = Number(prompt(`Sisestage mitu korda äratab`))
let kord = 1
while(kord <= kordamise_arv){
    console.log(`Tõuse ja sära ${kord}. kord`)
    kord++
}
*/

//Yl 3.2

/*let ringideArv = Number(prompt(`Sisesta ringide arv`))
let porgandidKokku = 0
let ring = 1
while(ring <= ringideArv){
    //console.log(`${ring}. ring`)
    if(ring % 2 == 0){
        //console.log(`saab ${ring} porgandint`)
        porgandidKokku = porgandidKokku + ring
        //6
        // console.log(porgandidKokku)
    }
    ring++
}
console.log(`Porgandeid kokku ${porgandidKokku}.`)
*/



