let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2")

function msg() {
    console.log("clicado com sucesso")
}

btn1.addEventListener("click", msg)

btn2.addEventListener("click", function() {
    btn1.removeEventListener("click", msg)
})