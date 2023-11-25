const btn1 = document.getElementById("div-1");
const btn2 = document.getElementById("div-2");
const btn3 = document.getElementById("div-3");
const btn4 = document.getElementById("div-4");
const btn5 = document.getElementById("div-5");
const formSubmit = document.getElementById("formSubmit");

btn1.addEventListener("click", () => {
    btn1.style.backgroundColor = "hsl(25, 97%, 53%)";
})

btn2.addEventListener("click", () => {
    btn2.style.backgroundColor = "hsl(25, 97%, 53%)";
})

btn3.addEventListener("click", () => {
    btn3.style.backgroundColor = "hsl(25, 97%, 53%)";
})

btn4.addEventListener("click", () => {
    btn4.style.backgroundColor = "hsl(25, 97%, 53%)";
})

btn5.addEventListener("click", () => {
    btn5.style.backgroundColor = "hsl(25, 97%, 53%)";
})

formSubmit.addEventListener("submit", (e) => {
    if (e) {
        console.log(e);
        e.preventDefault();
        formSubmit.submit();
    }

})

