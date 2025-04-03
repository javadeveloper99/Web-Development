let btn = document.querySelector("#btn");
let input = document.querySelector("#input");
let btn2 = document.querySelector("#search");

btn.addEventListener("click", () => {
  let inputValue=input.value;
  fetchData(inputValue);
});


async function fetchData(inputValue) {
  let url = `https://github.com/${inputValue}`;

  try {
    let get = await fetch(url);
    let data = await get.json();
    console.log(data);
  } catch (error) {
    console.log("profile not found")
  }

}


