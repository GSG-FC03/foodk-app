const searchInput = document.getElementsByClassName("searchInput")[0];
const drinksContainer = document.getElementById("MainContainer");
const addLocalStorge = [];

searchInput.onkeypress = searchs;
drinksContainer.addEventListener("click", forSelected);

const api = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

// function to fetch API with try and return error by catch
async function getData() {
  try {
    const response = await fetch(api);
    const data = await response.json();
    createCardsOfDrinks(data);
  } catch (error) {
    console.log("error", error.message);
  }
}
getData();

// function to create elements and get all photos of drinks from API

function createCardsOfDrinks(data) {
  let arrayOfDrinks = data.drinks;
  for (let i = 0; i < arrayOfDrinks.length; i++) {
    // for each element in API Create a tag and give it href attribute that take the user to Selected productpage
    const link = document.createElement("a");
    link.setAttribute("class", "item");
    link.setAttribute("href", "../selectedProduct/selectedProduct.html");

    // create div class FirstOpject inside a(item)
    const Drink = document.createElement("div");
    Drink.setAttribute("class", "FirstOpject");
    drinksContainer.appendChild(Drink);

    //create img tag and give it class imgOfOpject and src attribute and put it inside div(FirstOpject)
    const imgDrink = document.createElement("img");
    imgDrink.setAttribute("class", "imgOfOpject");

    link.appendChild(imgDrink);
    const drinkName = document.createElement("p");
    drinkName.setAttribute("class", "drinkName");
    drinkName.textContent = `${arrayOfDrinks[i].strDrink}`;
    drinkName.style.display = "none";
    Drink.appendChild(drinkName);

    imgDrink.setAttribute("src", `${arrayOfDrinks[i].strDrinkThumb}`);

    // create div tag and give it class favorite and put it inside div            (FirstOpject)

    const favoriteDrink = document.createElement("div");
    favoriteDrink.setAttribute("class", "favorite");
    Drink.appendChild(favoriteDrink);

    var LocalstorageValues = localStorage.getItem("favoriteDrinks");
    LocalstorageValues = LocalstorageValues
      ? LocalstorageValues.split(",")
      : [];
    var Found = Boolean(LocalstorageValues.includes(arrayOfDrinks[i].strDrink));
    // create i tag and give it class ri-heart-line and put it inside div(favorite)
    const favIcon = document.createElement("i");
    if (Found == false) {
      favIcon.setAttribute("class", "ri-heart-line");
      favIcon.setAttribute("onclick", "Favorite(this)");
    } else {
      //favIcon.setAttribute("class", "fas");
      favIcon.setAttribute("class", "fas fa-heart");
      favIcon.setAttribute("onclick", "Favorite(this)");
    }

    favoriteDrink.appendChild(favIcon);
    Drink.appendChild(link);
    drinksContainer.appendChild(Drink);
  }
}
function searchs(e) {
  if (e.key === "Enter") {
    e.preventDefault();
    drinksContainer.textContent = "";
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput.value}`
    )
      .then((res) => {
        if (res.status !== 200) {
          console.log(`looks like there was an error ${res.status}`);
        } else {
          return res.json();
        }
      })
      .then((data) => {
        for (let i of data.drinks) {
          const link = document.createElement("a");
          link.setAttribute("href", "../selectedProduct/selectedProduct.html");

          const Drink = document.createElement("div");
          Drink.setAttribute("class", "FirstOpject");

          const imgDrink = document.createElement("img");
          imgDrink.setAttribute("class", "imgOfOpject");
          imgDrink.setAttribute("src", `${i.strDrinkThumb}`);

          const drinkName = document.createElement("p");
          drinkName.setAttribute("class", "drinkName");
          drinkName.textContent = `${i.strDrink}`;
          drinkName.style.display = "none";
          Drink.appendChild(drinkName);

          const favoriteDrink = document.createElement("div");
          favoriteDrink.setAttribute("class", "favorite");

          var LocalstorageValues = localStorage.getItem("favoriteDrinks");
          LocalstorageValues = LocalstorageValues
            ? LocalstorageValues.split(",")
            : [];
          var Found = Boolean(LocalstorageValues.includes(i.strDrink));
          const favIcon = document.createElement("i");
          if (Found == false) {
            favIcon.setAttribute("class", "ri-heart-line");
            favIcon.setAttribute("onclick", "Favorite(this)");
          } else {
            //favIcon.setAttribute("class", "fas");
            favIcon.setAttribute("class", "fas fa-heart");
            favIcon.setAttribute("onclick", "Favorite(this)");
          }

          link.appendChild(imgDrink);
          favoriteDrink.appendChild(favIcon);
          Drink.appendChild(favoriteDrink);
          Drink.appendChild(link);
          drinksContainer.appendChild(Drink);
        }
      })
      .catch((rej) => console.log(rej));
    searchInput.value = "";
  }
}
// This function make repalce the value for each click on dish or drink and save in localStorge ,this is the same function in drink page .
function forSelected(items) {
  const select = items.target.parentElement.parentElement;
  const selectedElemet =
    select.getElementsByClassName("drinkName")[0].innerHTML;
  // console.log(selectedElemet);
  const s = localStorage.setItem("value", selectedElemet);
  addLocalStorge.push(s);
}
function Favorite(x) {
  if (x.classList == "ri-heart-line") {
    x.classList.toggle("ri-heart-line");
    x.classList.toggle("fas");
    x.classList.toggle("fa-heart");
    const select =
      x.parentElement.parentElement.getElementsByClassName("drinkName")[0]
        .innerHTML;

    var LocalStorageArr = localStorage.getItem("favoriteDrinks");
    LocalStorageArr = LocalStorageArr ? LocalStorageArr.split(",") : [];
    LocalStorageArr.push(select);
    localStorage.setItem("favoriteDrinks", LocalStorageArr);
  } else {
    x.classList.toggle("ri-heart-line");
    x.classList.toggle("fas");
    x.classList.toggle("fa-heart");
    const select =
      x.parentElement.parentElement.getElementsByClassName("drinkName")[0]
        .innerHTML;
    var LocalStorageArr = localStorage.getItem("favoriteDrinks");
    LocalStorageArr = LocalStorageArr ? LocalStorageArr.split(",") : [];
    var remove = LocalStorageArr.indexOf(select);
    LocalStorageArr.splice(remove, 1);

    localStorage.setItem("favoriteDrinks", LocalStorageArr);
  }
}
