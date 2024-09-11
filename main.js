let button = document.querySelector("button");
let errorspan = document.querySelector(".error");
let img = document.querySelector(".arrow");
let email = document.querySelector("#email"); // افترض أن هناك عنصر إدخال للبريد الإلكتروني
let info = document.querySelector(".info");  // افترض أن هناك عنصر info لعرض المعلومات

button.onclick = function() {
    if (email.value.length > 0) {
        setTimeout(() => {
            let emailRegex = /[\w-.]+@\w+.\w+/;
            if (email.value.match(emailRegex)) {
                errorspan.innerHTML = "thank you!";
                img.classList.add("hidden");
            } else {
                errorspan.innerHTML = "email not valid";
                img.classList.remove("hidden");
            }
            email.value = "";
        }, 500);
    } else {
        errorspan.innerHTML="entre email plz!";
    }
    setTimeout(() => {
        img.classList.add("hidden");
        errorspan.innerHTML="";
    }, 2000);
};
