let count = 0;
let counted = document.getElementById("count");

function countincrement() {
    count += 1;
    counted.textContent = count;
}
function countdecrement() {
    count -= 1;
    counted.textContent= count;
}

//save functionality for people counters
let saveEl = document.getElementById("savedvalues");
function save(){
    let countstr = count + " - ";
    saveEl.textContent += countstr; 
    counted.textContent = 0;
    count = 0;
    alert(countstr);
}