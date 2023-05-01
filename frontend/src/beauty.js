// login part

let token = localStorage.getItem("Token");
console.log(token);
if (!token) {
  alert("please login first");
  window.location.href = "./signup.html";
}
let bag;
async function fetching_data() {
  try {
    let res = await fetch(
      "https://courageous-pike-cuff.cyclic.app/Makeup/beauty",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/JSON",
          Authorization: token,
        },
      }
    );
    if (res.ok) {
      let data = await res.json();
      bag = data;
      renderData(data);
    }
  } catch (error) {
    console.log(error.message);
  }
}
fetching_data();
let div = document.getElementById("product-cards");
function renderData(data) {
  div.innerHTML = `${data
    .map((elem) => {
      return ` <div id="dummy-cart">
        
        <p style="color: #FC2779">FEATURED</p>
        <img src="${elem.image}" alt="beauty">
        <h4>${elem.name}</h4>
       
        
        <p> Rating :${elem.rating}<i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></p>
        <h5> Price :${elem.price} <i class="fa-solid fa-comments-dollar"></i></h5>
        
        <p class="heart">&#9825</p>
        
        
        <button id= "btn">Add to cart</button>
        

    </div>`;
    })
    .join(" ")}`;
}
