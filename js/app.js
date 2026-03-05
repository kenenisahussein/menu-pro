let menuData = [];

fetch("data/menu.json")
  .then((res) => res.json())

  .then((data) => {
    menuData = data;

    displayMenu(menuData);
  });

function displayMenu(items) {
  let container = document.getElementById("menuContainer");

  container.innerHTML = "";

  items.forEach((item) => {
    container.innerHTML += `

<div class="card">

<img src="${item.image || "images/placeholder.jpg"}">

<div class="card-content">

<h3>${item.name}</h3>

<p>${item.description}</p>

<p class="price">$${item.price}</p>

</div>

</div>

`;
  });
}

function filterMenu(category) {
  if (category === "all") {
    displayMenu(menuData);

    return;
  }

  let filtered = menuData.filter((item) => item.category === category);

  displayMenu(filtered);
}

document
  .getElementById("search")

  .addEventListener("keyup", function () {
    let text = this.value.toLowerCase();

    let filtered = menuData.filter((item) =>
      item.name.toLowerCase().includes(text),
    );

    displayMenu(filtered);
  });
