

const url = 'https://api.github.com/users/';
const input = document.querySelector("#input");
const profcont = document.querySelector(".profile-container");
const loading = document.querySelector(".loading");

const generateProfile = (profile) => {

    return `
        <div class="box-cont">
            <div class="top-section">
                <div class="avatar">
                    <img src="${profile.avatar_url}" alt="avatar">
                </div>
                <div class="user">
                     <h3>${profile.name}</h3>
                     <p>@${profile.login}</p>
                </div>
                <div class="right">
                    <button onclick="window.open('${profile.html_url}', '_blank')">Profile</button>
                </div>

            </div>

            <div class="about">${profile.bio || 'No bio available'}</div>
            <div class="numbers">
                <span>Followers: ${profile.followers}</span>
                <span>Following: ${profile.following}</span>
                <span>Repos: ${profile.public_repos}</span>
            </div>
        </div>
    `;
}

const fetchProfile = async () => {
    const username = input.value.trim();

    if (!username) return;


    loading.style.display = "block";
    loading.style.color = "black";
    loading.innerHTML = "Loading...";
    profcont.innerHTML = "";

    try {
        const res = await fetch(`${url}${username}`); 
        const data = await res.json();


        if (data.message) {
            loading.style.color = "red";
            loading.innerHTML = "Profile not found";
        } else {
            profcont.innerHTML = generateProfile(data);
            loading.innerHTML = "";
        }
    } catch (error) {

        console.error("Error:", error);
        loading.style.color = "red";
        loading.innerHTML = "An error occurred";
    }
}

btn.addEventListener("click", fetchProfile);

input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") fetchProfile();
});
=======
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


>>>>>>> 0e960ea1f311d93a332cf30a01c2a31c309a9333
