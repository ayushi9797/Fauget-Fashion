import {footer} from "../components/footer.js"

// console.log(footer())

const profilename = document.querySelector("#profilename");
let data = JSON.parse(localStorage.getItem("data"));
let name = data.name ?? "user" 



 profilename.innerText = name;
const footerdiv=document.querySelector(".footer");
footerdiv.innerHTML = footer()


