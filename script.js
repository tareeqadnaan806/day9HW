const root = document.getElementById("root")

const inputField = document.querySelector("#inputField")

const button = document.getElementById("button")
button.addEventListener("click", ()=>{
    const inputValue = inputField.value
    const p = document.createElement("h4")
    p.innerText = inputValue
    root.append(p)
})