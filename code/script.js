function changeText() {
    document.getElementById("message").innertext = "you won dammmit";
}

let button = document.getElementById("moving-btn");

button.addEventListener("mouseover", function () {
    let x = Math.random() * (window.innerWidth - button.offsetWidth);
    let y = Math.random() * (window.innerHeight - button.offsetHeight);

    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
});
