let button = document.querySelector(".container");

button.addEventListener("click",() =>{
    button.classList.add("active");

    setTimeout(() =>{
        button.classList.remove("active");
        document.querySelector("i").classList.replace("fa-cloud-arrow-down","fa-circle-check");
        document.querySelector(".btn-txt").innerHTML="downloaded";
    },5000);
});