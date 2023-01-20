const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

//register
const registeration_form = document.querySelector(".sign-up-form");
    registeration_form.addEventListener("submit", (e) => {
        e.preventDefault();
        const fullname = document.getElementById("name");

        const email = document.getElementById("email");
        const gender = document.getElementById("gender");
        const password = document.getElementById("password");
        const phone = document.getElementById("phone");
        const userObject = {
             fullname: fullname.value,
            email: email.value,
          gender: gender.value,
            password: password.value,
         phone: phone.value,
        }
        console.log(userObject)

        fetch("http://localhost:4500/user/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userObject),
        }).then((res) => {
            return res.json();
        }).then((data) => {
            alert(`${data.fullname} successfully created`);
            // window.location.href = "homepage.html"
            console.log(data);
        }).catch((err) => {
            console.log({ err: "err" });
        });

    })


    //login

    // const login_form = document.querySelector(".sign-in-form");
    // login_form.addEventListener("submit",(e)=>{
    //     e.preventDefault()
    //     const email = document.getElementById("email");
    //     const password = document.getElementById("password");
    //     const uObject = {
    //         email: email.value,
    //         password: password.value
    //     }
    //     console.log(uObject)

    //     fetch("http://localhost:4500/user/login",{
    //         method:"POST",
    //         body:JSON.stringify(uObject);
    //     })
        

    // })


