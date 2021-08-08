const searchInput = document.getElementsByClassName("searchInput")[0];
const search = document.getElementsByClassName("SearchB")[0];
const drinksContainer = document.getElementById("MainContainer");

search.onclick =searchs;
const api = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s";
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
    const link= document.createElement("a");
link.setAttribute("href","../selectedProduct/selectedProduct.html")
    const Drink = document.createElement("div");
    Drink.setAttribute("class", "FirstOpject");
    drinksContainer.appendChild(Drink);
    const imgDrink = document.createElement("img");
    imgDrink.setAttribute("class", "imgOfOpject");

    Drink.appendChild(imgDrink);

    imgDrink.setAttribute("src", `${arrayOfDrinks[i].strDrinkThumb}`);
    const favoriteDrink = document.createElement("div");
    favoriteDrink.setAttribute("class", "favorite");

    Drink.appendChild(favoriteDrink);

    const favIcon = document.createElement("i");
    favIcon.setAttribute("class", "ri-heart-line");
    favoriteDrink.appendChild(favIcon);
    link.appendChild(Drink);
    drinksContainer.appendChild(link);
  }
}
function searchs(e) {
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
        const link= document.createElement("a");
        link.setAttribute("href","../selectedProduct/selectedProduct.html"); 

        const Drink = document.createElement("div");
        Drink.setAttribute("class", "FirstOpject");

        const imgDrink = document.createElement("img");
        imgDrink.setAttribute("class", "imgOfOpject");
        imgDrink.setAttribute("src", `${i.strDrinkThumb}`);
       
        const favoriteDrink = document.createElement("div");
        favoriteDrink.setAttribute("class", "favorite");

        const favIcon = document.createElement("i");
        favIcon.setAttribute("class", "ri-heart-line");

        Drink.appendChild(imgDrink);;
        favoriteDrink.appendChild(favIcon);
        Drink.appendChild(favoriteDrink);
        link.appendChild(Drink);
        drinksContainer.appendChild(link);
      }
    })
    .catch((rej) => console.log(rej));
  searchInput.value = "";
}
