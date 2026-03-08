 let saveEl = document.getElementById("save-el");
 let countel = document.getElementById("count");

 console.log(saveEl);
 
 
 
 let count = 0;
function increment() {
    console.log("Button clicked");
    count += 1;
    countel.textContent = count;
}
function save() {
    console.log(count)
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countel.textContent = 0;
    count = 0;

}


