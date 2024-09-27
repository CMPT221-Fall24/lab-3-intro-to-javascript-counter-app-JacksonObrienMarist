var counter = 0;

document.getElementById("add").addEventListener("click", function() {
    counter++;
    document.getElementById("number").textContent = counter;
});

document.getElementById("reset").addEventListener("click", function() {
    counter = 0;
    document.getElementById("number").textContent = counter;
});

document.getElementById("subtract").addEventListener("click", function() {
    counter--;
    document.getElementById("number").textContent = counter;
});