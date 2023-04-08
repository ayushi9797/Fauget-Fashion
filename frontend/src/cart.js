let nav = document.querySelector(".nav");
window.onresize = () => {
  nav_fun();
};
function nav_fun() {
  let w = window.outerWidth;
  let iconDiv = document.querySelector(".icon");
  let headDiv = document.querySelector(".logo");
  let smallnav = document.querySelector(".smallnav");
  let hideblackdiv = document.querySelector("#hide");
  let bigcard = document.querySelector("#hide2");
  if (w <= 876 && w >= 100) {
    bigcard.style.display = "none";
    hideblackdiv.style.display = "none";
    smallnav.style.display = "none";
    nav.style.display = "none";
    iconDiv.innerHTML = "Dropdown &darr;";
    iconDiv.style.fontSize = "15px";
    iconDiv.style.padding = "10px";
    iconDiv.style.width = "100%";
    iconDiv.style.backgroundColor = "whitesmoke";
    iconDiv.style.display = "flex";
    let logoDiv = document.createElement("div");
    let logo = document.createElement("img");
    logo.src = "";
    logo.style.width = "100px";
    logoDiv.style.margin = "auto";
    logoDiv.append(logo);
    let cart = document.createElement("span");
    cart.innerText = "Go to Cart";
    cart.style.marginRight = "50px";
    iconDiv.append(logoDiv, cart);
    headDiv.style.display = "none";
  } else {
    nav.style.display = "flex";
    iconDiv.innerHTML = null;
    iconDiv.style.display = "none";
    headDiv.style.display = "flex";
    smallnav.style.display = "flex";
  }
}

// scroll to top functionality
window.onscroll = () => {
  scroll_fun();
};
let scrollUp = document.querySelector("#scrollTop");
scrollUp.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

function scroll_fun() {
  if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
    scrollUp.style.display = "block";
  } else {
    scrollUp.style.display = "none";
  }
}

// Get data of card and appending to the div

let cartbag = JSON.parse(localStorage.getItem("cart"));
let main = document.querySelector(".cartmain");
function displayitem() {
    main.innerHTML = null;
  cartbag.forEach((elem, index) => {
    let div1 = document.createElement("div");
    let img = document.createElement("img");
    img.src = elem.avatar;
    let name = document.createElement("h4");
    name.innerText = "Name:"+" "+elem.name;
    let price = document.createElement("h4");
    price.innerText = "Price:"+" "+elem.price;
    let des = document.createElement("h4");
    des.innerText = "Category:"+" "+elem.description;
    let imgdiv = document.createElement("div");
    div1.append(img);
    let txtdiv = document.createElement("div");
    txtdiv.append(name,price,des)
    div1.append(imgdiv, txtdiv);
    let div2 = document.createElement("div");
    let price2 = document.createElement("h3");
    price2.innerText = "Price:"+" "+"$"+elem.price;
    let qnt = document.createElement("span");
    qnt.innerText = elem.quantity;
    qnt.style.backgroundColor="whitesmoke"
    qnt.style.padding="10px";
    let subt = document.createElement("h3");
    subt.innerText = "Subtotal:"+" "+"$"+elem.quantity*elem.price;
    let plus = document.createElement("button");
    plus.innerText = "+";
    plus.addEventListener("click", ()=>{
        elem.quantity++;
        qnt.innerText = elem.quantity;
        subt.innerText = "Subtotal:"+" "+"$"+elem.quantity*elem.price;
        localStorage.setItem("cart",JSON.stringify(cartbag));
    })
    plus.setAttribute("class", "plus")
    let minus = document.createElement("button");
    minus.innerText = "-";
    minus.setAttribute("class", "minus");
    minus.addEventListener("click", ()=>{
        if(elem.quantity==1){
            return;
        }
        elem.quantity--;
        qnt.innerText = elem.quantity;
        subt.innerText = "Subtotal:"+" "+"$"+elem.quantity*elem.price;
        localStorage.setItem("cart",JSON.stringify(cartbag));
    })
    let del = document.createElement("i");
    del.setAttribute("class", "fa-solid fa-trash");
    del.addEventListener("click", ()=>{
        del_elem(cartbag, index);
    })
    div2.append(price2,minus,qnt,plus,subt, del);
    let bigdiv = document.createElement("div");
    bigdiv.append(div1, div2);
    bigdiv.setAttribute("class", "bigdiv")
    main.append(bigdiv);
  });
}
displayitem();

// deleting the element from dom and localstorage:

function del_elem(data, index){
    data.splice(index,1);
    localStorage.setItem("cart", JSON.stringify(data));
    displayitem(data);
}

// total price:

let total = document.querySelector(".total");

let t =  cartbag.reduce((acc,elem,i)=>{
    return  acc + elem.quantity*(elem.price);
},0)

total.innerText = "Grand Total:"+" "+"$"+t;

//Login check it's or not:
let login_check = localStorage.getItem("isLogin");
let user = JSON.parse(localStorage.getItem("unique"));
if(login_check){
    let myAcc = document.querySelector("#myacc");
    myAcc.innerText = "Hello !"+" "+user.name;
}else if(!login_check){
    let myAcc = document.querySelector("#myacc");
    myAcc.innerText = "My Account";
}