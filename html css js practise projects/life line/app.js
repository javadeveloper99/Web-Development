
let dateofBirthV;
const icon = document.querySelector("#hideicon");
const cont = document.querySelector("#hide-cont");
const init = document.querySelector("#initial");
const fin = document.querySelector("#final");
const btn = document.querySelector("button");
const inp = document.querySelector("#dateofB");

const yearv = document.querySelector(".year");
const monthv = document.querySelector(".month");
const dayv = document.querySelector(".day");
const hourv = document.querySelector(".hour");
const minutev = document.querySelector(".minute");
const secondv = document.querySelector(".second");

const updateAge = () => {
    const currentDate = new Date();
    const birthDate = new Date(dateofBirthV);
  let dateDiff = currentDate - birthDate;

  if (dateDiff < 0) {
    const h1 = document.querySelector(".big");
    setTimeout(() => {
      h1.innerHTML = "Wrong DoB Entered,Plese try Again!";
    }, 200);
    h1.innerHTML = "Kindly Enter Your Date Of Birth";
    dateofBirth();
  }


    const years = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365.25));
    dateDiff -= years * (1000 * 60 * 60 * 24 * 365.25);

    const months = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 30.44));
    dateDiff -= months * (1000 * 60 * 60 * 24 * 30.44);

    const days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    dateDiff -= days * (1000 * 60 * 60 * 24);

    const hours = Math.floor(dateDiff / (1000 * 60 * 60));
    dateDiff -= hours * (1000 * 60 * 60);

    const minutes = Math.floor(dateDiff / (1000 * 60));
    dateDiff -= minutes * (1000 * 60);

    const seconds = Math.floor(dateDiff / 1000);

    yearv.innerHTML = years;
    monthv.innerHTML = months;
    dayv.innerHTML = days;
    hourv.innerHTML = hours;
    minutev.innerHTML = minutes;
    secondv.innerHTML = seconds;
}

icon.addEventListener("click", () => {
    cont.classList.toggle("hide");
});

const dateofBirth = () => {
    dateofBirthV = inp.value;
    if (dateofBirthV) {
        init.classList.add("hide");
        fin.classList.remove("hide");
        updateAge();

        setInterval(updateAge, 1000);
    } else {
        fin.classList.add("hide");
        init.classList.remove("hide");
    }
}

btn.addEventListener("click", dateofBirth);
