console.log("Hello World")

let description_radio = document.getElementById("description-radio")
let details_radio = document.getElementById("details-radio")
let description = document.getElementById("description")
let details = document.getElementById("details")

if(description_radio.getAttribute("checked") == "true"){
    description.classList.remove("display_block")
}
description_radio.addEventListener("click", ()=>{
    details.classList.add("display_block")
    description.classList.remove("display_block")
})

details_radio.addEventListener("click",()=>{
    description.classList.add("display_block")
    details.classList.remove("display_block")
})


let img_placer = document.getElementById("img-placer")
let red = document.getElementById("red")
let white = document.getElementById("white")
let blue = document.getElementById("blue")
let black = document.getElementById("black")
let skyblue = document.getElementById("skyblue")
let add_cart_btn = document.getElementById("add-cart")

if(red.getAttribute("checked") == "true"){
    img_placer.innerHTML = `<img src="Img/red_chair-removebg-preview.png">`
    document.body.className = "bg-color-red"
    add_cart_btn.className = "bg-color-red"
}

black.addEventListener("click", ()=>{
    img_placer.innerHTML = `<img src="Img/black_chair-removebg-preview.png">`
    document.body.className = "bg-color-black"
    add_cart_btn.className = "bg-color-black"
})
red.addEventListener("click", ()=>{
    img_placer.innerHTML = `<img src="Img/red_chair-removebg-preview.png">`
    document.body.className = "bg-color-red"
    add_cart_btn.className = "bg-color-red"
})
blue.addEventListener("click", ()=>{
    img_placer.innerHTML = `<img src="Img/blue_chair-removebg-preview.png">`
    document.body.className = "bg-color-blue"
    add_cart_btn.className = "bg-color-blue"
})
white.addEventListener("click", ()=>{
    img_placer.innerHTML = `<img src="Img/white_chair-removebg-preview.png">`
    document.body.className = "bg-color-white"
    add_cart_btn.className = "bg-color-white"
})
skyblue.addEventListener("click", ()=>{
    img_placer.innerHTML = `<img src="Img/skyblue_chair-removebg-preview.png">`
    document.body.className = "bg-color-skyblue"
    add_cart_btn.className = "bg-color-skyblue"
})

addEventListener("click",()=>{
    setTimeout(()=>{
        img_placer.firstElementChild.className = "animation_chair"
    },500)
})