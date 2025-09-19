let food = document.querySelector("main");

const indian = document.querySelector("#indian");
const canadian = document.querySelector("#canadian");
const american = document.querySelector("#american");
const thai = document.querySelector("#thai");
const british = document.querySelector("#british");
const russian = document.querySelector("#russian");
const inp = document.querySelector("input");

const fetchData = async (area) => {
  const api = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
  );
  const data = await api.json();
  const recipe = data.meals;
  showData(recipe);
};

const searchRecipe = async (inputValue) => {
  const api = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`
  );
  const data = await api.json();
  const recipe = data.meals;
  showData(recipe);
};

const showData = (recipe) => {
  if (!recipe) {
    food.innerHTML = `<h2 style="text-align:center;">No recipes found</h2>`;
    return;
  }

  food.innerHTML = recipe
    .map(
      (meal) => `
       <div class="img_hover">
          <div style="text-align:center;">
            <img src=${meal.strMealThumb} alt="${meal.strMeal}">
            <p>${meal.strMeal}</p>
          </div>
       </div>`
    )
    .join("");
};


indian.addEventListener("click", () => fetchData("indian"));
canadian.addEventListener("click", () => fetchData("canadian"));
american.addEventListener("click", () => fetchData("american"));
thai.addEventListener("click", () => fetchData("thai"));
british.addEventListener("click", () => fetchData("british"));
russian.addEventListener("click", () => fetchData("russian"));


inp.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const inputV = inp.value.trim();
    if (inputV) {
      searchRecipe(inputV);
    }
  }
});


fetchData("indian");
