const esram = document.getElementById("esram");


const text  = "Esra Seni Seviyorum...";
let idx = 1;



writeText();

function writeText(){
    esram.innerText = text.slice(0,idx);
    idx++;
    if(idx >text.length){
        idx=1;
    }
    setTimeout(writeText,200);
}