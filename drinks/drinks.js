const api = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s";
//function to fetch API with try and return error by catch
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

const drinksContainer = document.getElementById("drinksContainer");

// function to create elements and get all photos of drinks from API
function createCardsOfDrinks(data) {
  let arrayOfDrinks = data.drinks;
  for (let i = 0; i < arrayOfDrinks.length; i++) {
    const Drink = document.createElement("div");
    Drink.setAttribute("class", "firstDrink");
    drinksContainer.appendChild(Drink);
    const imgDrink = document.createElement("img");
    imgDrink.setAttribute("class", "imgOfDrink");

    Drink.appendChild(imgDrink);

    imgDrink.setAttribute("src", `${arrayOfDrinks[i].strDrinkThumb}`);
    const favoriteDrink = document.createElement("div");
    favoriteDrink.setAttribute("class", "favorite");

    Drink.appendChild(favoriteDrink);

    const favIcon = document.createElement("i");
    favIcon.setAttribute("class", "ri-heart-line");
    favoriteDrink.appendChild(favIcon);
  }
}
