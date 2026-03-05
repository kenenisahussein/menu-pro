let menuData = [];

fetch("/data/menu.json")
  .then((res) => res.json())
  .then((data) => {
    menuData = data;
    displayMenu(data);
  });

function displayMenu(items) {
  const container = document.getElementById("menuContainer");

  container.innerHTML = "";

  items.forEach((item) => {
    container.innerHTML += `
<div class="menu-item" data-category="${item.category}">
<h3>${item.name}</h3>
<p>${item.description}</p>
<p class="price">$${item.price}</p>
</div>
`;
  });
}

function filterMenu(category) {
  if (category === "all") {
    displayMenu(menuData);
    return;
  }

  const filtered = menuData.filter((item) => item.category === category);

  displayMenu(filtered);
}

document.getElementById("languageSwitcher").addEventListener("change", (e) => {
  setLanguage(e.target.value);
});
