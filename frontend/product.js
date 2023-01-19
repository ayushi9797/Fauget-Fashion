let bag;
async function fetching_data() {
  try {
    let res = await         fetch("http://localhost:4500/product/get");
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
        <h2>${name}</h2>
        <img src="${elem.images}" alt="">
        <p>${elem.category}</p>
        <h3>${elem.price}</h3>
        <p>${elem.discount}% Off</p>
        <button>Add to cart</button>

    </div>`
    }).join(" ")}`

}
