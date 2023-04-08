let bag;
async function fetching_data() {
  try {
    let res = await fetch("http://localhost:4500/mens/men");
    if(res.ok){
        let data =await res.json();
       bag=data;
       renderData(data);
    }
  } catch (error) {
    alert(error.message);
  }
}
fetching_data()
let div=document.getElementById("product-cards")
function renderData(data){
    div.innerHTML=`${data.map((elem)=>{
        return ` <div id="dummy-cart">
        <h2>${elem.name}</h2>
        <img src="${elem.thumbnail}" alt="">
        <h2> strike_price:  ${elem.strike_price} <i class="fa-regular fa-dollar-sign"></i></h3>
        <h3> Price :${elem.price} <i class="fa-solid fa-comments-dollar"></i></h3>
        <h4> Rating :${elem.rating}<i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></h4>
        <p> Products :${elem.no_of_products} </p>
        
        <button id= "btn">Add to cart</button>

    </div>`
    }).join(" ")}`

}
