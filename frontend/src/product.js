let bag;
async function fetching_data() {
  try {
    let res = await fetch("http://localhost:4500/product/Women");
    if (res.ok) {
      let data = await res.json();
      bag = data;
      renderData(data);
    }
  } catch (error) {
    alert(error.message);
  }
}
fetching_data()
let div = document.getElementById("product-cards")
function renderData(data) {
  div.innerHTML = `${data.map((elem) => {
    return ` <div id="dummy-cart">
        <h2>${elem.name}</h2>
        <img src="${elem.images}" alt="">
        <p>${elem.category}</p>
        <h3> price: ${elem.price} $</h3>
        <p>${elem.discount}% Off</p>
        <button  data-id="${elem._id}" class= "btn">Add to cart</button>

    </div>`
  }).join(" ")}`
  let all_cart_btns = document.querySelectorAll(".btn");
  for (let btn of all_cart_btns) {
    btn.addEventListener("click", (e) => {
      let id = e.target.dataset.id;
      cart(id)
    })
  }
}
// let token = localStorage.getItem("token")
let cartitems = JSON.parse(localStorage.getItem("cart-item")) || [];
function cart(id) {

  let filterdata = bag.filter((elem) => {
    return elem._id == id;
  });


  let data = filterdata[0];
  data.quantity = 1
  cartitems.push(data);
  localStorage.setItem("cart-item", JSON.stringify(cartitems))
  alert("Item added to cart")




}

//SORT BY NAME


// SORTING  by Price

let sort = document.querySelector("#sorting-options")
sort.addEventListener("change",sort_by_price)

function sort_by_price(){
  let sorting = document.querySelector("#sorting-options").value;
  if(sorting == "0"){
    window.location.reload()
  }else if(sorting == "1"){
    bag.sort((a,b)=> a.price - b.price)
    renderData(bag)
  }else if(sorting == "2"){
    bag.sort((a,b)=> b.price - a.price)
    renderData(bag)
  }
  // renderData(data)
  
}

// let sort_by_discount = document.querySelector("#sorting-options")
// sort.addEventListener("change",sort_by_price)

// function sort_by_price(){
//   let sorting = document.querySelector("#sorting-options").value;
//   if(sorting == "3"){
//     window.location.reload()
//   }else if(sorting == "3"){
//     bag.sort((a,b)=> a.discount - b.discount)
//     renderData(bag)
//   }else if(sorting == "3"){
//     bag.sort((a,b)=> b.discount - a.discount)
//     renderData(bag)
//   }
//   renderData(data)
  
// }


//FILTERRR




