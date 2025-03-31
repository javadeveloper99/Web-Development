let isOpen = false;
let icon = document.querySelector(".fa-icon");
let cont = document.querySelector(".hide-cont");

icon.addEventListener("click", toggle);


toggle=()=> {
     if (isOpen) {
       cont.classList.add("hide");
     } else {
       cont.classList.remove("hide");
  }

  let isOpen = !isOpen;
}
