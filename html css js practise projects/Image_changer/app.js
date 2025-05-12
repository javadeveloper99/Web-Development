let img = document.querySelector("img");
let h2 = document.querySelector("h2");

let prevSrc = img.src;
let prevText = h2.innerText;

img.addEventListener("mouseover", () => {
  img.src =
    "https://media.istockphoto.com/id/977164386/photo/aerial-view-of-paris-with-eiffel-tower-during-sunset.jpg?s=612x612&w=is&k=20&c=vGXf84WBVBVmB097aZWcDx4kaXea33HxmvcyZfqV_4I=";
  h2.innerText = "Paris";
  img.style.border = "2px solid yellow";
});
img.addEventListener("mouseleave", () => {
  img.src = prevSrc;
  h2.innerText = prevText;
  img.style.border = "2px solid blue";
});
