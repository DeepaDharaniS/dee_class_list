function adds() {
    let numAdd = document.getElementById("add");
    // alert(num.classList);
    numAdd.classList.add("classAdd");
}
function rems() {
    let numRem = document.getElementById("rem");
    numRem.classList.remove("toRem");
    numRem.classList.add("classAdd");
}
function toggs() {
    let numTogg = document.getElementById("togg");
    numTogg.classList.toggle("classTogg");
}
function conts() {
    let numCont = document.getElementById("cont");
    alert(numCont.classList.contains("toCont"));
}
function reps() {
    let numRep = document.getElementById("rep");
    numRep.classList.replace("toRep", "classRep");
}
function toggleTheme() {
    let numToggle = document.body;
    numToggle.classList.toggle("darkTheme");
}