const input = document.querySelector("input");

const btn = document.querySelector(".submit");

const img = document.querySelector("img");

const downBtn = document.querySelector(".download")

const error = document.querySelector(".error")
const copy = document.querySelector(".copyright")

const year = new Date().getFullYear()
copy.innerHTML = `Copyright - &copy; ${year} | All rights reserved`



btn.addEventListener("click", ()=>{
    if(input.value ===""){
    error.textContent = `"Enter the Value"`
    }
    
    else{
    let imgLink =`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`
    img.src = imgLink
    img.style.visibility = "visible"        
    }


})

